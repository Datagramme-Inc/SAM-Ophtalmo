import { z } from "zod";

export const observationsSchema = z.object({
  observation: z.string().optional(),
  pas_glaucome_reevaluation: z.boolean().default(false),
  risque_glaucome_examens: z.boolean().default(false),
});

export type ObservationsFormValues = z.infer<typeof observationsSchema>;
