"use client";
import PatientIdentity from "@/components/patients/PatientIdentity";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import AntecedentsForm from "@/components/patients/AntecedentsForm";
import { RetinographieForm } from "@/components/patients/Retinographie";
import { ConstantesTraitementForm } from "@/components/patients/ContantesTraitementForm";
import Link from "next/link";
import { usePatientStore } from "@/stores/patients-store";
import { PatientCompletFormValues } from "@/types/entities.types";
import { createClient } from "@/utils/supabase/client";
import { createPatient, updatePatient } from "@/app/actions";
import { v4 as randomUUID } from "uuid";
import ObservationsForm from "@/components/patients/ObservationsForm";
import { useSearchParams } from "next/navigation";
import { getPatient } from "@/app/api/get_element";
import ExamenForm from "@/components/patients/ExamenForm";
import { extname } from "path";

export default function Page() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const patientId = searchParams.get("pid");

  function handleNextStep() {
    if (step === MAX_STEPS - 1) return;
    setStep((prev) => prev + 1);
  }

  function handlePreviousStep() {
    if (step === 0) return;
    setStep((prev) => prev - 1);
  }

  async function uploadFile(file: any) {
    const supabase = createClient();
    const { data, error } = await supabase.storage
      .from("samophtalmo")
      .upload(`${randomUUID()}${extname(file.name) || ".png"}`, file);

    if (error) {
      console.error("Error uploading file:", error);
      return { error };
    }

    console.log("File uploaded successfully:", data);

    const { data: fileUrlData } = supabase.storage
      .from("samophtalmo")
      .getPublicUrl(data.path);

    return { data, publicUrl: fileUrlData.publicUrl };
  }

  const {
    setIdentitePatient,
    setAntecedents,
    setConstantesTraitement,
    setConstantesTraitementD,
   // constantes_traitementD,
    setRetinographie,
    setExamen,
    identite_patient,
    antecedents,
    constantes_traitement,
    retinographie,
    observations,
    examen,
    setObservations,
    reset,
  } = usePatientStore();

  useEffect(() => {
    if (!patientId) return;
    getPatient(patientId as string).then((patient) => {
      setIdentitePatient({
        age: parseInt(patient.age),
        adresse: patient.adresse,
        confirmer_telephone: patient.confirmer_telephone,
        no_fiche: patient.no_fiche,
        nom: patient.nom,
        prenom: patient.prenom,
        profession: patient.profession,
        sexe: patient.sexe,
        telephone: patient.telephone,
        centre: patient.centre,
        activite_date: new Date(patient.activite_date),
      });

      setAntecedents({
        personnels: {
          traitement: patient.traitement,
          addiction: patient.addiction.toString(),
          type_addiction: patient.type_addiction,
          autres: patient.autres,
          pathologie_ophtalmologique: patient.pathologie_ophtalmologique,
          atopie: patient.atopie.toString(),
          diabete: patient.diabete.toString(),
          drepanocytose: patient.drepanocytose.toString(),
          hta: patient.hta.toString(),
        },
        familiaux: {
          autres: patient.autres,
          cecite: patient.cecite.toString(),
          gpao: patient.gpao.toString(),
        },
      });

      setConstantesTraitement({
        acuite_visuelle_correction: patient.acuite_visuelle_correction,
        cd: patient.cd,
        og: parseFloat(patient.og),
        pachymetrie: patient.pachymetrie,
        refraction_automatisee_a: patient.refraction_automatisee_a,
        refraction_automatisee_c: patient.refraction_automatisee_c,
        refraction_automatisee_s: patient.refraction_automatisee_s,
        refraction_automatisee_dp: patient.refraction_automatisee_dp,
        tonus_oculaire: patient.tonus_oculaire,
        traitement_hypotonisant_oculaire:
          patient.traitement_hypotonisant_oculaire,
      });

      setConstantesTraitement({
        acuite_visuelle_correction: patient.acuite_visuelle_correction ?? false,
        og: parseFloat(patient.og ?? "0"),
        refraction_automatisee_a: patient.refraction_automatisee_a ?? 0,
        refraction_automatisee_s: patient.refraction_automatisee_s ?? 0,
        refraction_automatisee_c: patient.refraction_automatisee_c ?? 0,
        refraction_automatisee_dp: patient.refraction_automatisee_dp ?? 0,
        tonus_oculaire: patient.tonus_oculaire ?? 0,
        pachymetrie: patient.pachymetrie ?? 0,
        cd: patient.cd ?? 0,
        traitement_hypotonisant_oculaire:
          patient.traitement_hypotonisant_oculaire ?? "",
      });

      setConstantesTraitementD({
        acuite_visuelle_correction_d:
          patient.acuite_visuelle_correction_d ?? false,
        od: parseFloat(patient.od ?? "0"),
        odg: parseFloat(patient.odg ?? "0"),
        refraction_automatisee_a_d: patient.refraction_automatisee_a_d ?? 0,
        refraction_automatisee_s_d: patient.refraction_automatisee_s_d ?? 0,
        refraction_automatisee_c_d: patient.refraction_automatisee_c_d ?? 0,
        tonus_oculaire_d: patient.tonus_oculaire_d ?? 0,
        pachymetrie_d: patient.pachymetrie_d ?? 0,
        cd_d: patient.cd_d ?? 0,
        traitement_hypotonisant_oculaire_d:
          patient.traitement_hypotonisant_oculaire_d ?? "",
      });

      setObservations({
        pas_glaucome_reevaluation: patient.pas_glaucome_reevaluation,
        risque_glaucome_examens: patient.risque_glaucome_examens,
        observation: patient.observation ?? "",
      });

      setRetinographie({
        fichier_joint: patient.fichier_joint,
        segment_anterieur_retinographie:
          patient.segment_anterieur_retinographie,
      });

      setExamen({
        annexes: {
          om_od: patient.om_od ?? "",
          om_og: patient.om_og ?? "",
          palpebral_od: patient.palpebral_od ?? "",
          palpebral_og: patient.palpebral_og ?? "",
          conjonctives_od: patient.conjonctives_od ?? "",
          conjonctives_og: patient.conjonctives_og ?? "",
          autres_od: patient.autres_od ?? "",
          autres_og: patient.autres_og ?? "",
        },
        sa: {
          cornee_od: patient.cornee_od ?? "",
          cornee_og: patient.cornee_og ?? "",
          chambre_anterieur_od: patient.chambre_anterieur_od ?? "",
          chambre_anterieur_og: patient.chambre_anterieur_og ?? "",
          rpm_od: patient.rpm_od ?? "",
          rpm_og: patient.rpm_og ?? "",
        },
        toCristallin: {
          to_od: patient.to_od ?? "",
          to_og: patient.to_og ?? "",
          cristallin_od: patient.cristallin_od ?? "",
          cristallin_og: patient.cristallin_og ?? "",
        },
        sp: {
          champs_retiniens_od: patient.champs_retiniens_od ?? "",
          champs_retiniens_og: patient.champs_retiniens_og ?? "",
          vaisseaux_od: patient.vaisseaux_od ?? "",
          vaisseaux_og: patient.vaisseaux_og ?? "",
          papille_od: patient.papille_od ?? "",
          papille_og: patient.papille_og ?? "",
          macula_od: patient.macula_od ?? "",
          macula_og: patient.macula_og ?? "",
          vitre_od: patient.vitre_od ?? "",
          vitre_og: patient.vitre_og ?? "",
        },
      });
    });
  }, [patientId]);

  const STEPS_INFOS = [
    {
      title: "Identité Patient",
      body: (
        <PatientIdentity
          nextFn={handleNextStep}
          setFn={setIdentitePatient}
          initValues={identite_patient}
        />
      ),
      id: "identite-patient",
    },
    {
      title: "Antécédents",
      body: (
        <AntecedentsForm
          nextFn={handleNextStep}
          setFn={setAntecedents}
          initValues={antecedents}
        />
      ),
      id: "antecedents-form",
    },
    {
      title: "Retinographie",
      body: (
        <RetinographieForm
          nextFn={handleNextStep}
          setFn={setRetinographie}
          initValues={retinographie}
        />
      ),
      id: "retinographie",
    },
    {
      title: "Constantes et Traitement ",
      body: (
        <ConstantesTraitementForm
          nextFn={handleNextStep}
          setFn={setConstantesTraitement}
          initValues={constantes_traitement}
        />
      ),
      id: "constantes-traitement",
    },
    {
      title: "Oberservations",
      body: (
        <ObservationsForm
          nextFn={handleNextStep}
          setFn={setObservations}
          initValues={observations}
        />
      ),
      id: "observations-form",
    },
    {
      title: "Examen",
      body: (
        <ExamenForm
          nextFn={handleNextStep}
          setFn={setExamen}
          initValues={examen}
        />
      ),
      id: "examen-form",
    },
    {
      title: "Valider",
      body: null,
      id: "valider",
    },
  ];

  const MAX_STEPS = STEPS_INFOS.length;

  async function handleSubmit() {
    const fullData: PatientCompletFormValues = {
      ...identite_patient,
      ...antecedents.personnels,
      ...antecedents.familiaux,
      ...retinographie,
      ...constantes_traitement,
      ...observations,
      ...examen.annexes,
      ...examen.sa,
      ...examen.toCristallin,
      ...examen.sp,
    };

    try {
      setError(null);
      setIsSaving(true);
      // Upload the file to Supabase
      console.dir(fullData, { depth: null });
      if (
        fullData.fichier_joint &&
        typeof fullData.fichier_joint !== "string"
      ) {
        const uploadResult = await uploadFile(fullData.fichier_joint);
        if (uploadResult.error) {
          throw new Error("File upload failed");
        }
        fullData.fichier_joint = uploadResult.publicUrl; // Assuming you want to store the file URL
      }
      if (patientId) await updatePatient(patientId, fullData);
      else await createPatient(fullData);
      reset();
      setStep(0);
    } catch (err: any) {
      setError((err.message as string) || "Une erreur est survenue");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="w-full container pt-16">
      <Link href="./" className="w-full gap-3 flex items-center">
        <ChevronLeft className="h-6 w-6 m-0" />
        <h1 className="sm:text-2xl text-xl font-semibold">Retour</h1>
      </Link>

      <div className="flex flex-col mt-8 w-full h-full justify-center items-center lg:items-start">
        <Card className="w-auto lg:w-full">
          <CardHeader>
            {/* Steps buttons */}
            <div className="w-full flex justify-between mb-2">
              <Button
                variant={"outline"}
                disabled={step === 0}
                onClick={handlePreviousStep}
              >
                {" "}
                <ChevronLeft className="h-4 w-4" />
                Précedent
              </Button>
              <Button
                variant={"outline"}
                disabled={step === MAX_STEPS - 1}
                form={STEPS_INFOS[step].id}
              >
                Suivant
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            <CardTitle>{STEPS_INFOS[step].title}</CardTitle>
            <CardDescription>Etape {step + 1}</CardDescription>
          </CardHeader>
          <CardContent className="transition-all">
            {STEPS_INFOS[step].body}
          </CardContent>

          {step === MAX_STEPS - 1 && (
            <CardFooter>
              <div className="flex flex-col w-full">
                <Button
                  disabled={isSaving}
                  className="w-full"
                  onClick={handleSubmit}
                >
                  Enregistrer
                </Button>
                {error && <p className="text-red-500 text-center">{error}</p>}
              </div>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
}
