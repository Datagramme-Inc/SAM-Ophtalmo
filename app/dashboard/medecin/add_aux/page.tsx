'use client'
import { useState, useEffect } from "react";
import { columns } from "@/components/proprio_table/column";
import { DataTable } from "@/components/proprio_table/data-table";
import { AuxiliaireModal } from "@/components/auxiliaireModal";
import { GetallAuxiliaire } from "@/app/api/get_element";
import { Auxiliaire } from "@/types/entities.types";
import { createClient } from "@/utils/supabase/client";


export default function TaskPage() {

  const [auxiliaire, setAuxiliaire] = useState<Auxiliaire[]>([]); 
  const handleInsert=(payload :any)=>{
    console.log(payload.new)
    setAuxiliaire((oldAuxiliaire) => [...oldAuxiliaire, payload.new as Auxiliaire]);
    
  }
  const supabase = createClient();


  useEffect(() => {

      GetallAuxiliaire("org_2dm3uHAD18iMU1TjVJJTywHa0Jv").then((data:any)=>setAuxiliaire(data))

      const channel =  supabase.channel('Room_insert')
        .on(
          'postgres_changes',
          {
            event: 'INSERT',
            schema: 'public',
            table: 'room',
          },
          handleInsert,
        )
        .subscribe();

      return  () => {
         supabase.removeChannel(channel);
      };
    
  }, [supabase]);

  return (
    <div className="bg-[#ecf2f3] h-full px-3 ">
      <div className="flex-1 flex-col space-y-8 py-4 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div className="flex justify-between items-center w-full space-x-4">
            <div className="flex flex-col space-y-2">
              <h2 className="lg:text-2xl text-base  font-bold tracking-normal w-full">Liste des Auxiliaires !</h2>
              <p className="text-muted-foreground text-sm ">
               Cette liste represente l'ensemble des auxiliaires du médecin
              </p>
            </div>
           
          </div>
        </div>
        <div className="bg-white mb-7 py-4 px-2 rounded-sm">
          <div className="flex flex-end mb-2 justify-end">
              <AuxiliaireModal />
            </div>
          <DataTable data={auxiliaire} columns={columns} />
        </div>
      </div>
    </div>
  );
}
