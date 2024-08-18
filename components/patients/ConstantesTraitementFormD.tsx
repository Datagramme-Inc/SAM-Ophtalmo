"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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
import {
  ConstantesTraitementFormValuesD,
  constantesTraitementSchemaD,
} from "@/types/constantes-traitement.types";
import DecimalInput from "../DecimalInput";

type ConstantesTraitementFormProps = {
  nextFn: () => void;
  setFn: (data: ConstantesTraitementFormValuesD) => void;
  initValues: ConstantesTraitementFormValuesD;
};

export const ConstantesTraitementFormD: React.FC<
  ConstantesTraitementFormProps
> = ({ nextFn, setFn, initValues }) => {
  const form = useForm<ConstantesTraitementFormValuesD>({
    resolver: zodResolver(constantesTraitementSchemaD),
  });

  const onSubmit = (data: ConstantesTraitementFormValuesD) => {
    setFn(data);
    nextFn();
  };

  useEffect(() => {
    form.reset(initValues);
  }, []);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 grid md:grid-cols-3 grid-cols-2 content-around gap-4"
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
          name="od"
          render={({ field }) => (
            <FormItem>
              <FormLabel>OD</FormLabel>
              <FormControl>
                <DecimalInput value={field.value} onChange={field.onChange} />
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
                <DecimalInput value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="refraction_automatisee_a"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Réfraction Automatisée A (0 - 180°)</FormLabel>
              <FormControl>
                <DecimalInput value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="refraction_automatisee_s"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Réfraction Automatisée S (-20 - 20)</FormLabel>
              <FormControl>
                <DecimalInput value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="refraction_automatisee_c"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Réfraction Automatisée C (-10 - 10)</FormLabel>
              <FormControl>
                <DecimalInput value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="refraction_automatisee_dp"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Réfraction Automatisée DP (0 - 100)</FormLabel>
              <FormControl>
                <DecimalInput value={field.value} onChange={field.onChange} />
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
                <DecimalInput value={field.value} onChange={field.onChange} />
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
                <DecimalInput value={field.value} onChange={field.onChange} />
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
                <DecimalInput value={field.value} onChange={field.onChange} />
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
              <FormLabel>Traitement Hypotonisant Musculaire</FormLabel>
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
