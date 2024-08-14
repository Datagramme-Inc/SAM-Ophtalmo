import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import Image from 'next/image'
  import { Button } from "@/components/ui/button"

function page() {
  return (
    <div className="container ">
       <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="identite-patient">
        <AccordionTrigger>Identité Patient</AccordionTrigger>
        <AccordionContent>
         <div className="grid grid-cols-3 gap-y-4">
            <div className="flex space-x-1 ">
                <p className="text-sm font-sem">No Fiche:</p>
                <p className="text-sm">2023AC</p>
                
            </div>
            <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Nom:</p>
                <p className="text-sm">Seck</p>
                
            </div>

            <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Prénom:</p>
                <p className="text-sm">El Hadj Moussa</p>
                
            </div>
            <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Sexe:</p>
                <p className="text-sm">M</p>
                
            </div>
            <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Age:</p>
                <p className="text-sm">20 ans</p>
                
            </div>
            <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Adresse:</p>
                <p className="text-sm">Ouagou Niayes 3</p>
                
            </div>
            <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Profession:</p>
                <p className="text-sm">Avocat</p>
                
            </div>
            <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Téléphone:</p>
                <p className="text-sm">7789635245</p>
                
            </div>
         </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="antecedents">
        <AccordionTrigger>Antécédents</AccordionTrigger>
        <AccordionContent>
            <h2 className="text-base font-semibold underline underline-offset-2 my-4">Personnels</h2>
            <div className="grid grid-cols-4 gap-y-4 gap-2">
                <div className="flex space-x-1 items-center">
                    <p className="text-sm font-semibold">HTA</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                    </span>
                </div>
                <div className="flex space-x-1 items-center">
                    <p className="text-sm font-semibold">Diabéte</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                    </span>
                </div>
                <div className="flex space-x-1 items-center">
                    <p className="text-sm font-semibold">Drépanocytose</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                    </span>
                </div>
                <div className="flex space-x-1 items-center">
                    <p className="text-sm font-semibold">Atopie</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                    </span>
                </div>
                <div className=" flex flex-col space-y-2">
                    <div className="flex space-x-1 items-center">
                    <p className="text-sm font-semibold">Addiction</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                    </span>
                    
                    </div>
                    <p className="text-sm leading-5 px-1 py-1 bg-gray-100 ">Il fait souvent des cauchemars et est dans état fiévreux . Il a subit beaciup de traumatisme et de chocs au niveau de la tête</p>
                </div>
                <div className="flex space-x-1 items-center">
                    <p className="text-sm font-semibold">Pathologie opthalmologique: </p>
                    <span className="text-sm">Irisinographie  </span>
                </div>
                <div className="flex space-x-1 items-center">
                    <p className="text-sm font-semibold">Traitement </p>
                    <span className="text-sm">colir + lumiere bleue  </span>
                </div>

            </div>
            <h2 className="text-base font-semibold underline underline-offset-2 my-4">Familiaux</h2>
            <div className="grid grid-cols-4 gap-y-4">
                <div className="flex space-x-1 items-center">
                    <p className="text-sm font-semibold">Cécité</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                    </span>
                </div>
                <div className="flex space-x-1 items-center">
                    <p className="text-sm font-semibold">GPAO</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                    </span>
                </div>
              
              
                <div className=" flex flex-col space-y-2">
                    <div className="flex space-x-1 items-center">
                    <p className="text-sm font-semibold">Addiction</p>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                    </span>
                    
                    </div>
                    <p className="text-sm leading-5 px-1 py-1 bg-gray-100 ">Il fait souvent des cauchemars et est dans état fiévreux . Il a subit beaciup de traumatisme et de chocs au niveau de la tête</p>
                </div>
               

            </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="RETINOGRAPHIE ">
        <AccordionTrigger>Retinographie </AccordionTrigger>
        <AccordionContent>
        <div className="flex justify-center my-4">
        <Image src="/ima.png" width={250} height={250} alt="Picture of the author" />
        </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="Constante ">
        <AccordionTrigger>Constantes + traitement </AccordionTrigger>
        <AccordionContent>
        <div className="flex flex-col space-y-2  my-4">
            <p className="text-base font-bold">Acuité visuelle</p>
        <table className="min-w-full bg-white border border-gray-300">
            <thead>
                <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-r">Sans Correction</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Avec Correction</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-t">
                    <td className="px-4 py-2 text-sm border-r text-gray-600">OD : 0.5</td>
                    <td className="px-4 py-2 text-sm text-gray-600">OD : 1</td>
                </tr>
                <tr className="border-t bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">OG : 0.8</td>
                    <td className="px-4 py-2 text-sm text-gray-600">OG : 1</td>
                </tr>
                <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">OGD : 0.7</td>
                    <td className="px-4 py-2 text-sm text-gray-600">OGD : 2</td>
                </tr>
            </tbody>
        </table>
        <p className="text-base font-bold">Réfraction automatisée </p>
        <table className="min-w-full bg-white border border-gray-300">
          
            <tbody>
                <tr className="border-t">
                    <td className="px-4 py-2 text-sm border-r text-gray-600">A </td>
                    <td className="px-4 py-2 text-sm text-gray-600">150°</td>
                </tr>
                <tr className="border-t bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">S</td>
                    <td className="px-4 py-2 text-sm text-gray-600">+15,4 dioptrie</td>
                </tr>
                <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">C</td>
                    <td className="px-4 py-2 text-sm text-gray-600">-8.5</td>
                </tr>
                <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">DP</td>
                    <td className="px-4 py-2 text-sm text-gray-600">25 mm</td>
                </tr>
                <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">Tonus oculaire </td>
                    <td className="px-4 py-2 text-sm text-gray-600">15 mmHg</td>
                </tr>
                <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">Pachymétrie </td>
                    <td className="px-4 py-2 text-sm text-gray-600">3 µm</td>
                </tr>
                <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">C/D </td>
                    <td className="px-4 py-2 text-sm text-gray-600">47.7 mmHg</td>
                </tr>
                <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">Traitement hypotonisant oculaire  </td>
                    <td className="px-4 py-2 text-sm text-gray-600">Colir - Dh785 - Anti lumieres bleux etc..</td>
                </tr>
            </tbody>
        </table>
            <div className="flex space-x-2 my-2 flex-end">
            <Button variant="outline" size="lg"  className="bg-green-400 text-white">Valider</Button>
            <Button variant="destructive" size="lg">Modifier</Button>
            </div>
        </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion> 
    </div>
  )
}

export default page