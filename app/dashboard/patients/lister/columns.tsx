"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Sexe, Patient } from "@/types/entities.types";
import { format } from "date-fns";

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "nom",
    header: "Nom",
  },
  {
    accessorKey: "prenom",
    header: "Prénom",
  },
  {
    accessorKey: "sexe",
    header: "Sexe",
    cell: ({ row }) => (row.original.sexe === Sexe.M ? "Masculin" : "Féminin"),
  },
  {
    accessorKey: "age",
    header: "Âge",
    cell: ({ row }) => {
      const birthDate = new Date(row.original.age);
      const age = new Date().getFullYear() - birthDate.getFullYear();
      return `${age} ans`;
    },
  },
  {
    accessorKey: "adresse",
    header: "Adresse",
  },
  {
    accessorKey: "telephone",
    header: "Téléphone",
  },
  {
    accessorKey: "date_enregistrement",
    header: "Date d'Enregistrement",
    cell: ({ row }) =>
      format(row.original.date_enregistrement, "dd/MM/yyyy [à] HH:mm"),
  },
];
