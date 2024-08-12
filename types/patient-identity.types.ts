import { z } from "zod";
// Define schema and types
export const patientSchema = z
  .object({
    date_enregistrement: z.date({
      message: "La date d'enregistrement est requise",
    }),
    no_fiche: z
      .string({ message: "Le numéro de fiche est requis" })
      .length(6, { message: "Le numéro de fiche doit être de 6 caractères" }),
    nom: z
      .string({ message: "Le nom est requis" })
      .min(1, { message: "Le nom est requis" }),
    prenom: z
      .string({ message: "Le prénom est requis" })
      .min(1, { message: "Le prénom est requis" }),
    sexe: z.enum(["M", "F"], { message: "Le sexe doit être M ou F" }),
    age: z.date({ message: "L'âge est requis" }),
    adresse: z
      .string({ message: "L'adresse est requise" })
      .min(1, { message: "L'adresse est requise" }),
    profession: z.string(),
    telephone: z
      .string({ message: "Le numéro de téléphone est requis" })
      .length(9, { message: "Le numéro de téléphone doit être de 9 chiffres" }),
    confirmer_telephone: z
      .string({ message: "Le numéro de téléphone est requis" })
      .length(9, { message: "Le numéro de téléphone doit être de 9 chiffres" }),
  })
  .refine(
    (schema) => {
      return schema.telephone === schema.confirmer_telephone;
    },
    { message: "Les numéros de téléphone ne correspondent pas" }
  );

export type PatientFormValues = z.infer<typeof patientSchema>;
