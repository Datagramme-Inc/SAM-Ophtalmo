import { z } from "zod";

// Définir le schéma de validation avec Zod
const antecetendsPersonnelsSchema = z.object({
  hta: z.string(),
  diabete: z.string(),
  drepanocytose: z.string(),
  atopie: z.string(),
  addiction: z.string(),
  type_addiction: z.string().optional().nullable().default("N/A"),
  autres: z.string().optional().nullable().default("N/A"),
  pathologie_ophtalmologique: z.string().optional().nullable().default("N/A"),
  traitement: z.string().optional().nullable().default("N/A"),
});
const antecedentsFamiliauxSchema = z.object({
  cecite: z.string(),
  gpao: z.string(),
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
