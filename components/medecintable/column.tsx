"use client";

import { ColumnDef } from "@tanstack/react-table";
// import { CLient_Reservation } from "@/utils/interface/interface";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
// import { priorities } from "../reservationtable/data/data";
import { FolderSearch } from "lucide-react";
import Link from "next/link";
type Priorities = Record<string, any>[];
const priorities: Priorities = [];
export const columns: ColumnDef<any>[] = [
  {
    accessorKey: "reservation_id",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-medium text-black"
        column={column}
        title="Book id"
      />
    ),
  },
  {
    accessorFn: (row) => (row.client ? row.client.prenom : ""),
    id: "prenom",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-medium text-black"
        column={column}
        title="Prenom"
      />
    ),
  },
  {
    accessorKey: "dateDebut",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-medium text-black"
        column={column}
        title="Check in"
      />
    ),
  },
  {
    accessorKey: "Duration",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-medium text-black"
        column={column}
        title="Durée"
      />
    ),
  },
  {
    accessorKey: "dateFin",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-medium text-black"
        column={column}
        title="Check out"
      />
    ),
  },
  {
    accessorKey: "Room_number",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-medium text-black"
        column={column}
        title="Room id"
      />
    ),
  },
  {
    accessorKey: "Guest",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-medium text-black"
        column={column}
        title="Guest"
      />
    ),
  },
  {
    accessorFn: (row) => (row.client ? row.client.client_id : ""),
    id: "client_id",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-medium text-black"
        column={column}
        title="Client id"
      />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader
        className="text-medium text-black"
        column={column}
        title="status"
      />
    ),
    cell: ({ row }) => {
      const priority = priorities.find(
        (priority) => priority.value === row.getValue("status")
      );

      if (!priority) {
        return null;
      }

      return (
        <div className="flex  items-center">
          {(() => {
            switch (priority.label) {
              case "Not Reserved":
                return (
                  <>
                    {priority.icon && (
                      <priority.icon className="mr-2 h-4 w-4 text-gray-400" />
                    )}
                    <span className="font-normal text-gray-500">
                      {priority.label}
                    </span>
                  </>
                );
              case "In house":
                return (
                  <>
                    {priority.icon && (
                      <priority.icon className="mr-2 h-4 w-4 text-blue-500" />
                    )}
                    <span className="font-medium text-sm text-blue-400">
                      {priority.label}
                    </span>
                  </>
                );
              case "confirmed":
                return (
                  <>
                    {priority.icon && (
                      <priority.icon className="mr-2 h-4 w-4 text-fuchsia-500" />
                    )}
                    <span className="font-medium text-fuchsia-600 text-sm ">
                      {priority.label}
                    </span>
                  </>
                );
              case "Cancelled":
                return (
                  <>
                    {priority.icon && (
                      <priority.icon className="mr-2 h-4 w-4 text-red-600" />
                    )}
                    <span className="font-medium text-red-500 text-sm ">
                      {priority.label}
                    </span>
                  </>
                );

              default:
                return null;
            }
          })()}
        </div>
      );
    },
  },

  {
    id: "Detail",
    cell: ({ row }) => {
      return (
        <Link
          href={`user/detail/${row.original.id}`}
          className="flex items-center cursor-pointer"
        >
          <FolderSearch className="w-4 h-4  " color="#6a6868" />
        </Link>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
