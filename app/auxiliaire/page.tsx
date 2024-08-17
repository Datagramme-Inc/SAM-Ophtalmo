"use client";
import PatientIdentity from "@/components/patients/PatientIdentity";
import { useState } from "react";
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
//import { createPatient } from "@/app/actions";
import { PatientCompletFormValues } from "@/types/entities.types";
import { uploadfile } from "@/app/api/query";
import { createClient } from "@/utils/supabase/client";
//import { createClient } from "@supabase/supabase-js";

export default function Page() {
  const [step, setStep] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleNextStep() {
    if (step === MAX_STEPS - 1) return;
    console.log("dfdf");
    setStep((prev) => prev + 1);
  }

  function handlePreviousStep() {
    if (step === 0) return;
    setStep((prev) => prev - 1);
  }
  async function uploadFile(file:any) {
    const supabase = createClient();
    const { data, error } = await supabase.storage.from('samophtalmo').upload(`${file.name}`, file);
  
    if (error) {
      console.error('Error uploading file:', error);
      return { error };
    }
  
    console.log('File uploaded successfully:', data);
    return { data };
  }

  const {
    setIdentitePatient,
    setAntecedents,
    setConstantesTraitement,
    setRetinographie,
    identite_patient,
    antecedents,
    constantes_traitement,
    retinographie,
    reset,
  } = usePatientStore();

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
      title: "Constantes et Traitement",
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
    };
    if (!fullData.addiction) fullData.type_addiction = "";
    try {
      console.log("je suis la")
      setError(null);
      setIsSaving(true);
       // Upload the file to Supabase
    if (fullData.fichier_joint) {
      const uploadResult = await uploadFile(fullData.fichier_joint);
      if (uploadResult.error) {
        throw new Error('File upload failed');
      }
    //  fullData.fichier_joint_url = uploadResult.data.Key; // Assuming you want to store the file URL
    }
     // await createPatient(fullData);
      reset();
      setStep(0);
    } catch (err: any) {
      setError((err.message as string) || "Une erreur est survenue");
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <div className="w-full container pt-16 ">
    

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
