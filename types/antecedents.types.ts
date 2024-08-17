import { z } from "zod";

// Définir le schéma de validation avec Zod
const antecetendsPersonnelsSchema = z.object({
  hta: z.boolean(),
  diabete: z.boolean(),
  drepanocytose: z.boolean(),
  atopie: z.boolean(),
  addiction: z.boolean(),
  type_addiction: z.string().optional().nullable().default("N/A"),
  autres: z.string().optional().nullable().default("N/A"),
  pathologie_ophtalmologique: z.string().optional().nullable().default("N/A"),
  traitement: z.string().optional().nullable().default("N/A"),
});
const antecedentsFamiliauxSchema = z.object({
  cecite: z.boolean(),
  gpao: z.boolean(),
  autres: z.string().optional().nullable().default("N/A"),
});

export const antecedentsSchema = z.object({
  personnels: antecetendsPersonnelsSchema,
  familiaux: antecedentsFamiliauxSchema,
});

export type AntecedentsFormValues = z.infer<typeof antecedentsSchema>;

type AntecentPersonnelsFormValues = z.infer<typeof antecetendsPersonnelsSchema>;
type AntecedentsFamiliauxFormValues = z.infer<
  typeof antecedentsFamiliauxSchema
>;

export type AntecedentsCompletFormValues = AntecentPersonnelsFormValues &
  AntecedentsFamiliauxFormValues;
