import { z } from "zod";

export const constantesTraitementSchema = z.object({
  acuite_visuelle_correction: z.boolean({ message: "" }),
  od: z.number().min(0).max(10),
  og: z.number().min(0).max(10),
  odg: z.number().min(0).max(10),
  refraction_automatisee_A: z.number().min(0).max(180),
  refraction_automatisee_S: z.number().min(-20).max(20),
  refraction_automatisee_C: z.number().min(-10).max(10),
  refraction_automatisee_DP: z.number().min(0).max(100),
  tonus_oculaire: z.number().min(0),
  pachymetrie: z.number().min(0),
  cd: z.number().min(0).max(100),
  traitement_hypotonisant_oculaire: z.boolean(),
  produits: z.string().optional(),
});

export type ConstantesTraitementFormValues = z.infer<
  typeof constantesTraitementSchema
>;
