"use client";
import {
  ObservationsFormValues,
  observationsSchema,
} from "@/types/observations.types";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  PatientComplet,
  PatientCompletFormValues,
} from "@/types/entities.types";
import { UpdateObservation } from "@/app/api/query";

function page({ params }: { params: { id_patient: string } }) {
  //patient state
  const [patient, setPatient] = useState<any>();
  useEffect(() => {
    getPatient(params.id_patient).then((data) => setPatient(data));
  }, [params.id_patient]);

  const form = useForm<ObservationsFormValues>({
    resolver: zodResolver(observationsSchema),
  });
  if (!patient) return <div>Patient inexistant...</div>;

  const onSubmit = async (data: ObservationsFormValues) => {
    console.log("upadting observations", data);
    await UpdateObservation(data, params.id_patient)
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="container ">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="identite-patient">
          <AccordionTrigger>Identité Patient</AccordionTrigger>
          <AccordionContent>
            <div className="grid md:grid-cols-3 grid-cols-2 gap-y-4">
              <div className="flex space-x-1 ">
                <p className="text-sm font-sem">No Fiche: </p>
                <p className="text-sm">{patient.no_fiche || ""}</p>
              </div>
              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Nom: </p>
                <p className="text-sm">{patient.nom || ""}</p>
              </div>

              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Prénom: </p>
                <p className="text-sm">{patient.prenom || ""}</p>
              </div>
              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Sexe:</p>
                <p className="text-sm">{patient.sexe}</p>
              </div>
              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Age: </p>
                <p className="text-sm">{patient.age} ans</p>
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
              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Centre: </p>
                <p className="text-sm">{patient.centre}</p>
              </div>
              <div className="flex space-x-1 ">
                <p className="text-sm font-medium">Date:</p>
                <p className="text-sm">{patient.activite_date}</p>
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
              {patient.hta && (
                <div className="flex space-x-1 items-center">
                  <p className="text-sm font-semibold">HTA</p>
                  <CheckCircle2 size={16} className="text-green-500" />
                </div>
              )}
              {patient.diabete && (
                <div className="flex space-x-1 items-center">
                  <p className="text-sm font-semibold">Diabéte</p>
                  <CheckCircle2 size={16} className="text-green-500" />
                </div>
              )}
              {patient?.drepanocytose && (
                <div className="flex space-x-1 items-center">
                  <p className="text-sm font-semibold">Drépanocytose</p>
                  <CheckCircle2 size={16} className="text-green-500" />
                </div>
              )}
              {patient.atopie && (
                <div className="flex space-x-1 items-center">
                  <p className="text-sm font-semibold">Atopie</p>
                  <CheckCircle2 size={16} className="text-green-500" />
                </div>
              )}
              {patient.addiction && (
                <div className=" flex flex-col space-y-2">
                  <div className="flex space-x-1 items-center">
                    <p className="text-sm font-semibold">Addiction</p>
                    <CheckCircle2 size={16} className="text-green-500" />
                  </div>
                  <p className="text-sm leading-5 px-1 py-1 bg-gray-100 ">
                    {patient.type_addiction || ""}
                  </p>
                </div>
              )}
              <div className="flex space-x-1 items-center">
                {patient.pathologie_ophtalmologique ? (
                  <>
                    <p className="text-sm font-semibold">
                      Pathologie opthalmologique:{" "}
                    </p>
                    <span className="text-sm">
                      {patient.pathologie_ophtalmologique}
                    </span>
                  </>
                ) : null}
              </div>
              <div className="flex space-x-1 items-center">
                {patient.traitement ? (
                  <>
                    <p className="text-sm font-semibold">Traitement </p>
                    <span className="text-sm">{patient.traitement}</span>
                  </>
                ) : null}
              </div>
            </div>
            <h2 className="text-base font-semibold underline underline-offset-2 my-4">
              Familiaux
            </h2>
            <div className="grid grid-cols-4 gap-y-4">
              {patient.cecite && (
                <div className="flex space-x-1 items-center">
                  <p className="text-sm font-semibold">Cécité</p>
                  <CheckCircle2 size={16} className="text-green-500" />
                </div>
              )}
              {patient.gpao && (
                <div className="flex space-x-1 items-center">
                  <p className="text-sm font-semibold">GPAO</p>
                  <CheckCircle2 size={16} className="text-green-500" />
                </div>
              )}
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
                    <th className="px-4 py-2 border-r"></th>
                    <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700 border-r">
                      OD
                    </th>
                    <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700 border-r">
                      OG
                    </th>
                    <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                      ODG
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm font-semibold border-r">
                      Sans correction
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.od || ""}
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.og || ""}
                    </td>
                    <td className="px-4 py-2 text-sm text-center">
                      {patient.odg || ""}
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm font-semibold border-r">
                      Avec sa correction
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.od_avec_correction || ""}
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.og_avec_correction || ""}
                    </td>
                    <td className="px-4 py-2 text-sm text-center">
                      {patient.odg_avec_correction || ""}
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm font-semibold border-r">
                      Avec correction
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.od_correction || ""}
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.og_correction || ""}
                    </td>
                    <td className="px-4 py-2 text-sm text-center">
                      {patient.odg_correction || ""}
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Regraction automatisee */}
              <p className="text-base font-bold">Réfraction automatisée</p>
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 border-r"></th>
                    <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700 border-r">
                      OD
                    </th>
                    <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">
                      OG
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm font-semibold border-r">
                      A
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.refraction_automatisee_a_d || ""}°
                    </td>
                    <td className="px-4 py-2 text-sm text-center">
                      {patient.refraction_automatisee_a || ""}°
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm font-semibold border-r">
                      S
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.refraction_automatisee_s_d || ""}
                    </td>
                    <td className="px-4 py-2 text-sm text-center">
                      {patient.refraction_automatisee_s || ""}
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm font-semibold border-r">
                      C
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.refraction_automatisee_c_d || ""}
                    </td>
                    <td className="px-4 py-2 text-sm text-center">
                      {patient.refraction_automatisee_c || ""}
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm font-semibold border-r">
                      DP
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.refraction_automatisee_dp_d || ""} mm
                    </td>
                    <td className="px-4 py-2 text-sm text-center">
                      {patient.refraction_automatisee_dp || ""} mm
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm font-semibold border-r">
                      Tonus oculaire
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.tonus_oculaire_d || ""} mmHg
                    </td>
                    <td className="px-4 py-2 text-sm text-center">
                      {patient.tonus_oculaire || ""} mmHg
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm font-semibold border-r">
                      Pachymétrie
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.pachymetrie_d || ""} µm
                    </td>
                    <td className="px-4 py-2 text-sm text-center">
                      {patient.pachymetrie || ""} µm
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm font-semibold border-r">
                      C/D
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.cd_d || ""} mmHg
                    </td>
                    <td className="px-4 py-2 text-sm text-center">
                      {patient.cd || ""} mmHg
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="px-4 py-2 text-sm font-semibold border-r">
                      Traitement hypotonisant oculaire
                    </td>
                    <td className="px-4 py-2 text-sm text-center border-r">
                      {patient.traitement_hypotonisant_oculaire_d || ""}
                    </td>
                    <td className="px-4 py-2 text-sm text-center">
                      {patient.traitement_hypotonisant_oculaire || ""}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="flex space-x-2 flex-wrap gap-y-2 my-2 flex-end">
                {patient.observation ? (
                  <div className="grid grid-cols-1 gap-y-4">
                    <div className="flex space-x-1 items-center">
                      {patient.pas_glaucome_reevaluation ? (
                        <p className="text-sm font-semibold">
                          Pas atteint de glaucome, réévaluation dans 2 ans
                        </p>
                      ) : (
                        <span></span>
                      )}
                    </div>
                    <div className="flex space-x-1 items-center">
                      {patient.risque_glaucome_examens ? (
                        <p className="text-sm font-semibold">
                          Risque de développer un glaucome, faire examens
                          suivants : OCT papille et macula, et champ visuel.
                        </p>
                      ) : (
                        <span></span>
                      )}
                    </div>
                    <div className="flex space-x-1 items-center">
                      {patient.gpao ? (
                        <p className="text-sm font-semibold">
                           GPAO : traitement pour préserver votre vue
                        </p>
                      ) : (
                        <span></span>
                      )}
                    </div>
                    <div className="flex space-x-1 items-center">
                      {patient.observation ? (
                        <p className="text-sm font-semibold text-red-500">
                          {patient.observation}
                        </p>
                      ) : (
                        <span></span>
                      )}
                    </div>
                  </div>
                ) : (
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8 grid grid-cols-2 gap-x-5 gap-y-2"
                      id="observations-form"
                    >
                      <FormField
                        control={form.control}
                        name="observation"
                        render={({ field }) => (
                          <FormItem className="col-span-2">
                            <FormLabel>Observation</FormLabel>
                            <FormControl>
                              <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="pas_glaucome_reevaluation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pas de glaucome reevaluation</FormLabel>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="risque_glaucome_examens"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Risque de glaucome examens</FormLabel>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="gpao"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              GPAO : traitement pour préserver votre vue
                            </FormLabel>
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        variant="outline"
                        size="lg"
                        className="bg-green-400 text-white"
                      >
                        Valider
                      </Button>
                      {/* <Button variant="destructive" size="lg">
                        Modifier
                      </Button> */}
                    </form>
                  </Form>
                )}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default page;
