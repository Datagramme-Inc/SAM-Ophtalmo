import {
    Card,
    CardContent,
 
  } from "@/components/ui/card"
import { Album, BarChart4, TrendingDown, TrendingUp } from "lucide-react"
import Image from "next/image"

export default function Cardadmin() {
  
  return ( 
    <div className="grid my-4 w-full gap-4 md:grid-cols-2 lg:grid-cols-4">
    <Card className="py-3">
     
      <CardContent className="flex space-x-2 justify-center items-center">
      <Album className="bg-[#f0f4f8] w-9 h-9 py-2 px-2 rounded-md" strokeWidth={1.5} />
        <div className="flex flex-col ">
            <p className="font-medium text-sm"> Nouveaux Patients </p>
            <p className="text-xl leading-6 font-bold ">15</p>
        </div>
      </CardContent>
    </Card>
    <Card className="py-3">
     
     <CardContent className="flex space-x-2 justify-center items-center">

     <TrendingUp className="bg-[#f0f4f8] w-9 h-9 py-2 px-2 rounded-md" strokeWidth={1.5}/>
       <div className="flex flex-col ">
           <p className="font-medium text-sm">Medecin Total</p>
           <p className="text-xl leading-6 font-bold ">103</p>
       </div>
     </CardContent>
   </Card>
   <Card className="py-3">
     
     <CardContent className="flex space-x-2 justify-center items-center">
    
    
     <TrendingDown className="bg-[#f0f4f8] w-9 h-9 py-2 px-2 rounded-md" strokeWidth={1.5}/>
     
       <div className="flex flex-col ">
           <p className="font-medium text-sm">Auxiliaire Total</p>
           <p className="text-xl leading-6 font-bold ">71</p>
       </div>
     </CardContent>
   </Card>
   <Card className="py-3">
     
     <CardContent className="flex space-x-2 justify-center items-center">
     <div className="w-9 h-9 bg-[#fdecf4] py-2 px-2 rounded-md">
     <BarChart4  className=" w-6 h-6  rounded-md" strokeWidth={1.5}/>
     </div>
       <div className="flex flex-col ">
           <p className="font-medium text-sm">Total patients</p>
           <p className="text-xl leading-6 font-bold ">71</p>
       </div>
     </CardContent>
   </Card>
   
  </div>
  )
  
}
