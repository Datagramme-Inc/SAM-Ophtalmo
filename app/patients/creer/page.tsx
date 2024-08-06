"use client";
import PatientIdentity, {
  PatientFormValues,
} from "@/components/patients/PatientIdentity";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Page() {
  const [step, setStep] = useState(0);

  function handleNextStep() {
    if (step === MAX_STEPS - 1) return;
    console.log("dfdf");
    setStep((prev) => prev + 1);
  }

  function handlePreviousStep() {
    if (step === 0) return;
    setStep((prev) => prev - 1);
  }

  const STEPS_INFOS = [
    {
      title: "Identité Patient",
      body: <PatientIdentity nextFn={handleNextStep} />,
      id: "identite-patient",
    },
  ];

  const MAX_STEPS = STEPS_INFOS.length;

  return (
    <div className="w-full p-16">
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
        </Card>
      </div>
    </div>
  );
}
