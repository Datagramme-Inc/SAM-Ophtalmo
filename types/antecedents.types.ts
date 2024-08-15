import { z } from "zod";

// Définir le schéma de validation avec Zod
const antecetendsPersonnelsSchema = z.object({
  hta: z.boolean().default(false),
  diabete: z.boolean().default(false),
  drepanocytose: z.boolean().default(false),
  atopie: z.boolean().default(false),
  addiction: z.boolean().default(false),
  type_addiction: z.string().optional().nullable().default(""),
  autres: z.string().optional().nullable().default(""),
  pathologie_ophtalmologique: z.string().optional().nullable().default(""),
  traitement: z.string().optional().nullable().default(""),
});
const antecedentsFamiliauxSchema = z.object({
  cecite: z.boolean().default(false),
  gpao: z.boolean().default(false),
  autres: z.string().optional().nullable().default(""),
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
