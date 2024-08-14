"use client"
import Link from 'next/link'

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

import { Patient } from '@/types/entities.types'
import { DataTableColumnHeader } from "./data-table-column-header"


export const columns: ColumnDef<Patient>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader  column={column} title="id" />
    ),

  },
  {
    accessorKey: "nom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nom " />
    ),
  },
 

  {
    accessorKey: "prenom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Prenom " />
    ),
    
  },
  {
    accessorKey: "adresse",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Adresse " />
    ),
    
  },
  {
    accessorKey: "telephone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Telephone " />
    ),
    
  },
  {
    accessorKey: "date_enregistrement",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date Enregistrement " />
    ),
    
  },
  {
    id: "Detail",
    cell: ({ row }) => {
      return (
        <Link href={`./medecin/patient_detail/${row.original.id}`}  className="flex items-center cursor-pointer" >
          <p>Detail</p>
       {/* <FolderSearch className="w-4 h-4" /> */}   
        </Link>
      )
    },
  },
 

  
]