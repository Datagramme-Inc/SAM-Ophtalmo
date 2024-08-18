"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// Définition du schéma de validation avec zod
const schema = z
  .object({
    // title: z.enum(["Dr", "Pr"], {
    //   required_error: "Vous devez choisir un titre",
    // }),
    firstName: z.string().min(1, { message: "Le prénom est requis" }),
    lastName: z.string().min(1, { message: "Le nom est requis" }),
    service: z.string().min(1, { message: "Le service est requis" }),
    phone: z
      .string()
      .min(9, {
        message: "Le numéro de téléphone doit comporter au moins 9 chiffres",
      })
      .regex(
        /^[0-9]+$/,
        "Le numéro de téléphone ne doit contenir que des chiffres"
      ),
    repeatPhone: z
      .string()
      .min(9, { message: "Répétez le numéro de téléphone" }),
    password: z
      .string()
      .min(4, { message: "Le mot de passe doit faire 4 caractères au moins" }),
  })
  .refine((data) => data.phone === data.repeatPhone, {
    message: "Les numéros de téléphone ne correspondent pas",
    path: ["repeatPhone"],
  });

export type AuxiliaireFormValues = z.infer<typeof schema>;

import { Plus } from "lucide-react";
import { createAuxiliaire } from "@/app/api/query";
import { useState } from "react";

export function AuxiliaireModal() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuxiliaireFormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: AuxiliaireFormValues) => {
    try {
      setError(null);
      setIsLoading(true);
      await createAuxiliaire(data);
      reset();
    } catch (error) {
      console.error(error);
      setError("Une erreur s'est produite lors de la création de l'auxiliaire");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#079b31] space-x-2 font-medium hover:bg-[#0f6a29]">
          <Plus size={20} color="#ffffff " strokeWidth={1.5} />
          <span>Ajouter un nouveau Auxiliaire</span>{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]   ">
        <DialogTitle>Ajouter un auxiliaire</DialogTitle>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" w-full p-6  rounded-lg shadow-md"
          id="aux-form"
        >
          {/* Prénom */}
          <div className="mb-4 flex space-x-1 w-full">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Prénom
              </label>
              <input
                type="text"
                {...register("firstName")}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.firstName &&
                typeof errors.firstName.message === "string" && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
            </div>
            {/* Nom */}
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Nom
              </label>
              <input
                type="text"
                {...register("lastName")}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.lastName &&
                typeof errors.lastName.message === "string" && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
            </div>
          </div>

          <div className="flex w-full ">
            {/* Téléphone */}
            <div className="mb-4 w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Téléphone
              </label>
              <input
                type="text"
                {...register("phone")}
                className="mt-1 p-2 block w/full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.phone && typeof errors.phone.message === "string" && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* Répéter téléphone */}
            <div className="mb-4 w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Répéter Téléphone
              </label>
              <input
                type="text"
                {...register("repeatPhone")}
                className="mt-1 p-2 block w/full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              {errors.repeatPhone &&
                typeof errors.repeatPhone.message === "string" && (
                  <p className="text-red-500 text-sm">
                    {errors.repeatPhone.message}
                  </p>
                )}
            </div>
          </div>

          {/* Service */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Service
            </label>
            <input
              type="text"
              {...register("service")}
              className="mt-1 p-2 block w/full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.service && typeof errors.service.message === "string" && (
              <p className="text-red-500 text-sm">{errors.service.message}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Mot de passe
            </label>
            <input
              type="password"
              {...register("password")}
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.password && typeof errors.password.message === "string" && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Bouton de soumission */}
          <div className="mt-6">
            <button
              disabled={isLoading}
              type="submit"
              form="aux-form"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Soumettre
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
