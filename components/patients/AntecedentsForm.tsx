"use client";
import React from "react";
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
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  AntecedentsFormValues,
  antecedentsSchema,
} from "@/types/antecedents.types";

type AntecedentsFormProps = {
  nextFn: () => void;
  setFn: (data: AntecedentsFormValues) => void;
};

const AntecedentsForm: React.FC<AntecedentsFormProps> = ({ nextFn, setFn }) => {
  const form = useForm<AntecedentsFormValues>({
    resolver: zodResolver(antecedentsSchema),
  });

  const onSubmit = (data: AntecedentsFormValues) => {
    setFn(data);
    nextFn();
  };

  return (
    <Form {...form}>
      {/* Antecedents Personnels */}
      <h2 className="text-lg font-medium">Antécédents Personnels</h2>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 "
        id="antecedents-form"
      >
        <div className="flex gap-4 flex-wrap">
          <FormField
            control={form.control}
            name="personnels.HTA"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-baseline">
                <FormLabel>HTA</FormLabel>
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
            name="personnels.diabete"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-baseline">
                <FormLabel>Diabète</FormLabel>
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
            name="personnels.atopie"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-baseline">
                <FormLabel>Atopie</FormLabel>
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
            name="personnels.addiction"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-baseline">
                <FormLabel>Addiction</FormLabel>
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
            name="personnels.drepanocytose"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-baseline">
                <FormLabel>Drépanocytose</FormLabel>
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
        </div>

        {/* Champ conditionnel pour l'addiction */}
        {form.watch("personnels.addiction") && (
          <FormField
            control={form.control}
            name="personnels.type_addiction"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type d'addiction</FormLabel>
                <FormControl>
                  <Input {...field} value={field.value ?? ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <FormField
          control={form.control}
          name="personnels.autres"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Autres</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="personnels.pathologie_ophtalmologique"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pathologie ophtalmologique</FormLabel>
              <FormControl>
                <Input {...field} value={field.value ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="personnels.traitement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Traitement</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Antecedents Familiaux */}
        <hr />
        <h2 className="text-lg font-medium">Antécédents Familiaux</h2>

        <div className="flex flex-wrap gap-4">
          <FormField
            control={form.control}
            name="familiaux.cecite"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-baseline">
                <FormLabel>Cécité</FormLabel>
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
            name="familiaux.GPAO"
            render={({ field }) => (
              <FormItem className="flex gap-2 items-baseline">
                <FormLabel>GPAO</FormLabel>
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
        </div>

        <FormField
          control={form.control}
          name="familiaux.autres"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Autres</FormLabel>
              <FormControl>
                <Textarea {...field} value={field.value ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default AntecedentsForm;
