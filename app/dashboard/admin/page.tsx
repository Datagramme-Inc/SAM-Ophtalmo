

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Cardadmin from "@/components/cardadmin";


export default async function Dashboard() {
  

  return (
    <div className=" min-h-screen container  w-full  ">
     
     <div className=" flex flex-col items-center justify-between ">
      
    <div className="w-full mb-6">
    <Cardadmin />
    </div>
    <div className="bg-white w-full mb-7 py-4 flex flex-col space-y-3 px-2 rounded-sm">
      <h1 className="text-2xl font-medium leading-5 mb-8 underline underline-offset-2">Selectionnez votre destination !</h1>
     <div className="flex justify-between  ">
      <div className="flex flex-col space-y-1">
      <div className="size-60 rounded-md border border-gray-200 bg-medecin hover:scale-125 cursor-pointer hover:mb-8">

      </div>
      <Link className="w-full" href='./admin/medecin'>
      <button className="bg-green-500 hover:bg-green-600 rounded-md w-full px-1 py-1  text-white">Gestion des Medecins</button>
      </Link>
     
      </div>
      <div className="flex flex-col space-y-1">
      <div className="size-60 rounded-md border border-gray-200 bg-auxiliaire bg-cover hover:scale-125 cursor-pointer hover:mb-8">

      </div>
      <Link href="./admin/auxiliaire" className="w-full">
      <button className="bg-green-500 w-full hover:bg-green-600 rounded-md px-1 py-1  text-white">Gestion des Auxiliaires</button>
      </Link>
      
      </div>
      <div className="flex flex-col space-y-1">
        <div className="size-60 rounded-md border border-gray-200 bg-patient bg-no-repeat bg-center hover:scale-125 cursor-pointer hover:mb-8">

        </div>
        <Link href="./admin/patient" className="w-full">
      <button className="bg-green-500 w-full hover:bg-green-600 rounded-md px-1 py-1  text-white">Gestion des Patients</button>
      </Link>
      </div>
      
     </div>

     
     

    </div>   
     </div>
   
    </div>
  );
}
