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
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  AntecedentsFormValues,
  antecedentsSchema,
} from "@/types/antecedents.types";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

type AntecedentsFormProps = {
  nextFn: () => void;
  setFn: (data: AntecedentsFormValues) => void;
  initValues: AntecedentsFormValues;
};

const AntecedentsForm: React.FC<AntecedentsFormProps> = ({
  nextFn,
  setFn,
  initValues,
}) => {
  const form = useForm<AntecedentsFormValues>({
    resolver: zodResolver(antecedentsSchema),
  });

  const onSubmit = (data: AntecedentsFormValues) => {
    setFn(data);
    nextFn();
  };

  useEffect(() => {
    form.reset(initValues);
  }, []);

  return (
    <Form {...form}>
      {/* Antecedents Personnels */}
      <h2 className="text-lg font-medium mb-2">Antécédents Personnels</h2>

      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 "
        id="antecedents-form"
      >
        <div className="flex gap-4 flex-wrap w-full justify-between">
          <FormField
            control={form.control}
            name="personnels.hta"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>HTA</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue="false"
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">Oui</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="font-normal">Non</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="personnels.diabete"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Diabète</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue="false"
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">Oui</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="font-normal">Non</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="personnels.atopie"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Atopie</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue="false"
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">Oui</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="font-normal">Non</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="personnels.addiction"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Addiction</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue="false"
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">Oui</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="font-normal">Non</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="personnels.drepanocytose"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Drépanocytose</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue="false"
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">Oui</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="font-normal">Non</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Champ conditionnel pour l'addiction */}
        {String(form.watch("personnels.addiction")) === "true" && (
          <div className="space-y-3">
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
          </div>
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
              <FormItem className="space-y-3">
                <FormLabel>Cécité</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue="false"
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">Oui</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="font-normal">Non</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="familiaux.gpao"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>GPAO</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue="false"
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="true" />
                      </FormControl>
                      <FormLabel className="font-normal">Oui</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="false" />
                      </FormControl>
                      <FormLabel className="font-normal">Non</FormLabel>
                    </FormItem>
                  </RadioGroup>
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
