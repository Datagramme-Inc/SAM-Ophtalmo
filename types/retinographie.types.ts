import { z } from "zod";

// Define schema and types
export const retinographieSchema = z.object({
  segment_anterieur_retinographie: z.string({
    message: "Le segment antérieur est requis",
  }),
  fichier_joint: z.string({ message: "Le fichier est requis" }).nonempty(),
});

export type RetinographieFormValues = z.infer<typeof retinographieSchema>;
