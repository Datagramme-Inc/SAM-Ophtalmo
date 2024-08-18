import Cardstat from "@/components/Cardstat";
import { DataTable } from "@/components/patient_table/data-table";
import { columns } from "@/components/patient_table/column";
import { Patient } from "@/types/entities.types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getPatients } from "@/app/actions";

export default async function Home() {
  const data: Patient[] = await getPatients();
  return (
    <div className=" min-h-screen container  w-full  ">
      <div className=" flex flex-col items-center justify-between ">
        <div className="w-full mb-6">
          <Cardstat votant={data} />
        </div>
        <div className="bg-white w-full mb-7 py-4 flex flex-col px-2 rounded-sm">
          <div className="flex justify-between">
            <p className="text-2xl underline underline-offset-4 py-4 pl-8">
              {" "}
              Patients{" "}
            </p>
            <Link href="/dashboard/medecin/add_patient">
              <Button className="bg-green-500 space-x-2 font-medium hover:bg-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Ajouter Patient{" "}
              </Button>
            </Link>
          </div>
          <DataTable data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
}
