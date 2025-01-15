"use client";

import PrintablePrescription from "@/components/PrintablePrescription";
import { Button } from "@/components/ui/button";
import { Printer } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { RefObject, useRef } from "react";
import { useReactToPrint } from "react-to-print";

export default function PrescriptionPage() {
  const searchParams = useSearchParams();
  const patientName = searchParams.get("patientName") || "";
  const componentRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef as RefObject<HTMLDivElement>,
    documentTitle: `Ordonnance_${patientName.replace(/\s+/g, "_")}`,
  });

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Ordonnance</h1>
        <Button
          onClick={() => handlePrint()}
          className="print:hidden"
          variant="outline"
        >
          <Printer className="mr-2 h-4 w-4" />
          Imprimer
        </Button>
      </div>

      <div className="bg-white shadow-lg print:shadow-none" ref={componentRef}>
        <PrintablePrescription
          patientName={patientName}
          className="print-prescription"
        />
      </div>
    </div>
  );
}
