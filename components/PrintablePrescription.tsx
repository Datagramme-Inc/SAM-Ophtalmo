"use client";

import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Image from "next/image";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";

interface PrintablePrescriptionProps {
  patientName: string;
  className?: string;
}

export default function PrintablePrescription({
  patientName,
  className = "",
}: PrintablePrescriptionProps) {
  const [user, setUser] = useState<User | null>(null);
  const [userMetadata, setUserMetadata] = useState<any>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      }

      if (!user) throw new Error("User not found");

      const { data: otherData } = await supabase
        .from("medecin")
        .select("*")
        .eq("medecin_id", user?.id)
        .single();

      setUserMetadata(otherData);
    };

    getUser();
  }, []);

  // console.log(userMetadata);

  return (
    <div
      className={`w-[21cm] min-h-[29.7cm] p-8 mx-auto bg-white ${className}`}
    >
      {/* Header with logo */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-2xl font-bold mb-4">ORDONNANCE MEDICALE</h1>
          {user && (
            <div className="text-sm">
              <p className="font-semibold">
                {userMetadata?.prenom || ""} {userMetadata?.nom || ""}
              </p>
              {/* <p>{user.service}</p> */}
              <p>Tel: {userMetadata?.telephone || ""}</p>
            </div>
          )}
        </div>
        <Image
          src="/medecins-logo.jpg"
          alt="Logo medecine"
          width={100}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Date and Patient Info */}
      <div className="flex justify-between mb-8">
        <div>
          <p className="font-semibold">Patient(e): {patientName}</p>
        </div>
        <div className="text-right">
          <p>
            <span className="font-medium">
              {format(new Date(), "dd/MM/yyyy", { locale: fr })}
            </span>
          </p>
        </div>
      </div>

      {/* Content Area */}
      <div className="min-h-[500px] border-b border-gray-300 mb-8">
        {/* Prescription content will go here */}
      </div>

      {/* Footer with Signature */}
      <div className="flex justify-end mt-12">
        <div className="text-center">
          <p className="mb-16">Signature:</p>
          {userMetadata && (
            <p className="font-semibold">
              {userMetadata?.role || ""} {userMetadata?.prenom || ""}{" "}
              {userMetadata?.nom || ""}
            </p>
          )}
        </div>
      </div>

      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          body {
            margin: 0;
            padding: 0;
          }
          .print-prescription {
            width: 21cm;
            min-height: 29.7cm;
            padding: 2cm;
            margin: 0;
            background: white;
            box-shadow: none;
          }
        }
      `}</style>
    </div>
  );
}
