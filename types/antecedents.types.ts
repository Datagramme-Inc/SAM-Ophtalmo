import { z } from "zod";

// Définir le schéma de validation avec Zod
export const antecedentsSchema = z.object({
  personnels: z.object({
    HTA: z.boolean().default(false),
    diabete: z.boolean().default(false),
    drepanocytose: z.boolean().default(false),
    atopie: z.boolean().default(false),
    addiction: z.boolean().default(false),
    type_addiction: z.string().optional().nullable().default(""),
    autres: z.string().optional().nullable().default(""),
    pathologie_ophtalmologique: z.string().optional().nullable().default(""),
    traitement: z.string().optional().nullable().default(""),
  }),
  familiaux: z.object({
    cecite: z.boolean().default(false),
    GPAO: z.boolean().default(false),
    autres: z.string().optional().nullable().default(""),
  }),
});

export type AntecedentsFormValues = z.infer<typeof antecedentsSchema>;
