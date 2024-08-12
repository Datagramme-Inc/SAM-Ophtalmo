import { columns } from "./columns";
import { DataTable } from "./data-table";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { getPatients } from "@/app/actions";
import { Patient } from "@/types/entities.types";

export default async function Page() {
  const data: Patient[] = await getPatients();

  return (
    <div className="container py-10">
      <div className="mb-4">
        <div className="flex gap-4 items-center">
          <Link href="/patients/">
            <ChevronLeft size={24} />
          </Link>
          <h1 className="text-lg sm:text-2xl">Liste des patients</h1>
        </div>
        <p className="text-gray-400 capitalize italic text-xs">
          {new Date().toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      <DataTable columns={columns} data={data} />
    </div>
  );
}
