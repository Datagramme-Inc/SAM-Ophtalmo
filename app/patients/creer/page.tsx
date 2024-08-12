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
import { createPatient, getPatients } from "@/app/actions";

export default function Page() {
  const [step, setStep] = useState(0);

  function handleNextStep() {
    if (step === MAX_STEPS - 1) return;
    setStep((prev) => prev + 1);
  }

  function handlePreviousStep() {
    if (step === 0) return;
    setStep((prev) => prev - 1);
  }

  const {
    setIdentitePatient,
    setAntecedents,
    setConstantesTraitement,
    setRetinographie,
    //
    antecedents,
    constantes_traitement,
    identite_patient,
    retinographie,
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
      body: <AntecedentsForm nextFn={handleNextStep} setFn={setAntecedents} />,
      id: "antecedents-form",
    },
    {
      title: "Retinographie",
      body: (
        <RetinographieForm nextFn={handleNextStep} setFn={setRetinographie} />
      ),
      id: "retinographie",
    },
    {
      title: "Constantes et Traitement",
      body: (
        <ConstantesTraitementForm
          nextFn={handleNextStep}
          setFn={setConstantesTraitement}
        />
      ),
      id: "constantes-traitement",
    },
  ];

  const MAX_STEPS = STEPS_INFOS.length;

  async function handleSubmit() {
    console.table(identite_patient);
    await createPatient(identite_patient);

    const p = await getPatients();
    console.log(p);
  }

  return (
    <div className="w-full p-16">
      <Link href="/patients" className="w-full gap-3 flex items-center">
        <ChevronLeft className="h-6 w-6 m-0" />
        <h1 className="sm:text-2xl text-xl font-semibold">Retour</h1>
      </Link>

      <div className="flex flex-col mt-8 w-full h-full justify-center items-center">
        <Card className="w-auto">
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
                disabled={step === MAX_STEPS}
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

          {step === MAX_STEPS - 2 && (
            <CardFooter>
              <Button className="w-full" onClick={handleSubmit}>
                Enregistrer
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
}
