import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getPatient } from "@/app/api/get_element";
import { differenceInYears } from "date-fns";
import { X, CheckCircle2 } from "lucide-react";

async function page({ params }: { params: { id_patient: string } }) {
  const patient = await getPatient(params.id_patient);
  console.log(patient);
  if (!patient) return <div>Patient inexistant...</div>;
  return (
    <div className="container ">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="identite-patient">
          <AccordionTrigger>Identité Patient</AccordionTrigger>
          <AccordionContent>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-y-4">
              <div className="flex space-x-1 ">
                <p className="text-sm font-sem">No Fiche:</p>
                <p className="text-sm">{patient.no_fiche || ""}</p>
              </div>
              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Nom:</p>
                <p className="text-sm">{patient.nom || ""}</p>
              </div>

              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Prénom:</p>
                <p className="text-sm">{patient.prenom || ""}</p>
              </div>
              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Sexe:</p>
                <p className="text-sm">{patient.sexe}</p>
              </div>
              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Age:</p>
                <p className="text-sm">
                  {differenceInYears(patient.age, new Date())} ans
                </p>
              </div>
              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Adresse:</p>
                <p className="text-sm">{patient.adresse}</p>
              </div>
              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Profession:</p>
                <p className="text-sm">{patient.profession}</p>
              </div>
              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Téléphone:</p>
                <p className="text-sm">{patient.telephone}</p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="antecedents">
          <AccordionTrigger>Antécédents</AccordionTrigger>
          <AccordionContent>
            <h2 className="text-base font-semibold underline underline-offset-2 my-4">
              Personnels
            </h2>
            <div className="grid md:grid-cols-4 grid-cols-2  gap-y-4 gap-2">
              <div className="flex space-x-1 items-center">
                <p className="text-sm font-semibold">HTA</p>
                {patient.hta ? (
                  <CheckCircle2 size={16} className="text-green-500" />
                ) : (
                  <X color="red" size={16} />
                )}
              </div>
              <div className="flex space-x-1 items-center">
                <p className="text-sm font-semibold">Diabéte</p>
                {patient.diabete ? (
                  <CheckCircle2 size={16} className="text-green-500" />
                ) : (
                  <X color="red" size={16} />
                )}
              </div>
              <div className="flex space-x-1 items-center">
                <p className="text-sm font-semibold">Drépanocytose</p>
                {patient?.drepanocytose ? (
                  <CheckCircle2 size={16} className="text-green-500" />
                ) : (
                  <X color="red" size={16} />
                )}
              </div>
              <div className="flex space-x-1 items-center">
                <p className="text-sm font-semibold">Atopie</p>
                {patient.atopie ? (
                  <CheckCircle2 size={16} className="text-green-500" />
                ) : (
                  <X color="red" size={16} />
                )}
              </div>
              <div className=" flex flex-col space-y-2">
                <div className="flex space-x-1 items-center">
                  <p className="text-sm font-semibold">Addiction</p>
                  {patient.addiction ? (
                    <CheckCircle2 size={16} className="text-green-500" />
                  ) : (
                    <X color="red" size={16} />
                  )}
                </div>
                <p className="text-sm leading-5 px-1 py-1 bg-gray-100 ">
                  {patient.type_addiction || ""}
                </p>
              </div>
              <div className="flex space-x-1 items-center">
                <p className="text-sm font-semibold">
                  Pathologie opthalmologique:{" "}
                </p>
                <span className="text-sm">
                  {patient.pathologie_ophtalmologique}
                </span>
              </div>
              <div className="flex space-x-1 items-center">
                <p className="text-sm font-semibold">Traitement </p>
                <span className="text-sm">{patient.traitement}</span>
              </div>
            </div>
            <h2 className="text-base font-semibold underline underline-offset-2 my-4">
              Familiaux
            </h2>
            <div className="grid grid-cols-4 gap-y-4">
              <div className="flex space-x-1 items-center">
                <p className="text-sm font-semibold">Cécité</p>
                {patient.cecite ? (
                  <CheckCircle2 size={16} className="text-green-500" />
                ) : (
                  <X color="red" size={16} />
                )}
              </div>
              <div className="flex space-x-1 items-center">
                <p className="text-sm font-semibold">GPAO</p>
                {patient.gpao ? (
                  <CheckCircle2 size={16} className="text-green-500" />
                ) : (
                  <X color="red" size={16} />
                )}
              </div>

              <div className=" flex flex-col space-y-2">
                <p className="text-sm font-semibold">Autres</p>
                <p className="text-sm leading-5 px-1 py-1 bg-gray-100 ">
                  {patient.autres}
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="RETINOGRAPHIE ">
          <AccordionTrigger>Retinographie </AccordionTrigger>
          <AccordionContent>
            <div className="flex justify-center my-4">
              {patient.fichier_joint ? (
                <Image
                  src={patient.fichier_joint}
                  width={250}
                  height={250}
                  alt="Fichier joint"
                />
              ) : null}
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
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-r">
                      Sans Correction
                    </th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                      Avec Correction
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm border-r text-gray-600">
                      OD : {patient.od}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">OD : 1</td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      OG : 0.8
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">OG : 1</td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      OGD : 0.7
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">OGD : 2</td>
                  </tr>
                </tbody>
              </table>

              {/* Regraction automatisee */}
              <p className="text-base font-bold">
                Réfraction automatisée (Oeil gauche)
              </p>
              <table className="min-w-full bg-white border border-gray-300">
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm border-r text-gray-600">
                      A{" "}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.refraction_automatisee_a}°
                    </td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      S
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.refraction_automatisee_s}
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      C
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.refraction_automatisee_c}
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      DP
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.refraction_automatisee_dp} mm
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      Tonus oculaire{" "}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.tonus_oculaire} mmHg
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      Pachymétrie{" "}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.pachymetrie} µm
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      C/D{" "}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.cd} mmHg
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      Traitement hypotonisant oculaire{" "}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.traitement_hypotonisant_oculaire}
                    </td>
                  </tr>
                </tbody>
              </table>

              <p className="text-base font-bold">
                Réfraction automatisée (Oeil droit)
              </p>
              <table className="min-w-full bg-white border border-gray-300">
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm border-r text-gray-600">
                      A{" "}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.refraction_automatisee_a_d}°
                    </td>
                  </tr>
                  <tr className="border-t bg-gray-50">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      S
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.refraction_automatisee_s_d}
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      C
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.refraction_automatisee_c_d}
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      DP
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.refraction_automatisee_dp_d} mm
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      Tonus oculaire{" "}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.tonus_oculaire_d} mmHg
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      Pachymétrie{" "}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.pachymetrie_d} µm
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      C/D{" "}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.cd_d} mmHg
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm text-gray-600 border-r">
                      Traitement hypotonisant oculaire{" "}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-600">
                      {patient.traitement_hypotonisant_oculaire_d}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex space-x-2 my-2 flex-end">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-green-400 text-white"
                >
                  Valider
                </Button>
                <Button variant="destructive" size="lg">
                  Modifier
                </Button>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default page;
