import { z } from "zod";

export const constantesTraitementSchema = z.object({
  acuite_visuelle_correction: z.boolean({ message: "" }),
  od: z.coerce.number().min(0).max(10),
  og: z.coerce.number().min(0).max(10),
  odg: z.coerce.number().min(0).max(10),
  refraction_automatisee_a: z.coerce.number().min(0).max(180),
  refraction_automatisee_s: z.coerce.number().min(-20).max(20),
  refraction_automatisee_c: z.coerce.number().min(-10).max(10),
  refraction_automatisee_dp: z.coerce.number().min(0).max(100),
  tonus_oculaire: z.coerce.number().min(0),
  pachymetrie: z.coerce.number().min(0),
  cd: z.coerce.number().min(0).max(100),
  traitement_hypotonisant_oculaire: z.string().optional(),
});

export type ConstantesTraitementFormValues = z.infer<
  typeof constantesTraitementSchema
>;
