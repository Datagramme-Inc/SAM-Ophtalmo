"use client";
import { useState, useEffect } from "react";
// import { columns } from "@/components/proprio_table/column";
import { DataTable } from "@/components/proprio_table/data-table";
import { Auxiliaire } from "@/types/entities.types";
import { createClient } from "@/utils/supabase/client";
import { MedecinModal } from "@/components/medecinmodal";
import { ColumnDef } from "@tanstack/react-table";

export default function Gestionmedecin({ initialMedecins }: { initialMedecins: Auxiliaire[] }) {
  const [auxiliaire, setAuxiliaire] = useState<Auxiliaire[]>(initialMedecins);
  const handleInsert = (payload: any) => {
    // console.log(payload.new);
    setAuxiliaire((oldAuxiliaire) => [
      ...oldAuxiliaire,
      payload.new as Auxiliaire,
    ]);
  };

 /* useEffect(() => {
    const supabase = createClient();

    const channel = supabase
      .channel("schema-db-changes")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "medecin" }, handleInsert)
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);
*/
  const columns: ColumnDef<any>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "titre",
      header: "Titre",
    },
    {
      accessorKey: "prenom",
      header: "Prenom",
    },
    {
      accessorKey: "nom",
      header: "Nom",
    },
    {
      accessorKey: "service",
      header: "Service",
    },
    {
      accessorKey: "telephone",
      header: "Telephone",
    },
    {
      accessorKey: "date_creation",
      header: "Date Creation",
      cell: (row) => {
        return new Date(row.getValue() as string).toLocaleDateString();
      },
    },
  ];

  return (
    <div className="bg-[#ecf2f3] h-full px-3 ">
      <div className="flex-1 flex-col space-y-8 py-4 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex justify-between items-center w-full space-x-4">
            <div className="flex flex-col space-y-2">
              <h2 className="text-2xl font-bold tracking-normal">
                Liste des Medecins !
              </h2>
              <p className="text-muted-foreground">
                Cette liste represente l'ensemble des Medecins du systeme
              </p>
            </div>
            <div>
              <MedecinModal />
            </div>
          </div>
        </div>
        <div className="bg-white mb-7 py-4 px-2 rounded-sm">
          <DataTable data={auxiliaire} columns={columns} />
        </div>
      </div>
    </div>
  );
}
