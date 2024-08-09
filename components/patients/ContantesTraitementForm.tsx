"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const constantesTraitementSchema = z.object({
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

type ConstantesTraitementFormValues = z.infer<
  typeof constantesTraitementSchema
>;

type ConstantesTraitementFormProps = {
  nextFn: () => void;
};

export const ConstantesTraitementForm: React.FC<
  ConstantesTraitementFormProps
> = ({ nextFn }) => {
  const form = useForm<ConstantesTraitementFormValues>({
    resolver: zodResolver(constantesTraitementSchema),
  });

  const onSubmit = (data: ConstantesTraitementFormValues) => {
    console.log(data);
    nextFn();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 grid grid-cols-3 content-around gap-4"
        id="constantes-traitement"
      >
        <FormField
          control={form.control}
          name="acuite_visuelle_correction"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Acuité Visuelle (Correction)</FormLabel>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="traitement_hypotonisant_oculaire"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Traitement Hypotonisant Oculaire</FormLabel>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="od"
          render={({ field }) => (
            <FormItem>
              <FormLabel>OD</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="og"
          render={({ field }) => (
            <FormItem>
              <FormLabel>OG</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="odg"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ODG</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="refraction_automatisee_A"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Réfraction Automatisée A (0 - 180°)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="refraction_automatisee_S"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Réfraction Automatisée S (-20 - 20)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="refraction_automatisee_C"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Réfraction Automatisée C (-10 - 10)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="refraction_automatisee_DP"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Réfraction Automatisée DP (0 - 100)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tonus_oculaire"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tonus Oculaire</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pachymetrie"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pachymétrie</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cd"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CD</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="produits"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Produits</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
