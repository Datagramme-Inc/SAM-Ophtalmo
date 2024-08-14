"use client"
import Link from 'next/link'

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

import { FolderSearch } from 'lucide-react';

import { labels, priorities, statuses } from "./data/data"
import { Room } from "./data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { Auxiliaire } from '@/types/entities.types';

export const columns: ColumnDef<Auxiliaire>[] = [
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
    accessorKey: "code",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Code" />
    ),
    
  },
  {
    accessorKey: "prenom",
    header: ({ column }) => (
      <DataTableColumnHeader  column={column} title="Prenom" />
    ),

  },
  {
    accessorKey: "nom",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nom." />
    ),
  },
 

  {
    accessorKey: "service",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Service" />
    ),
    
  },
  {
    accessorKey: "telephone",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Telephone" />
    ),
    
  },
  

  
  {
    id: "Detail",
    cell: ({ row }) => {
      return (
        <Link href={`room/roomdescription/${row.original.id}`}  className="flex items-center cursor-pointer" >
          
          <FolderSearch className="w-4 h-4" />
        </Link>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
  
]