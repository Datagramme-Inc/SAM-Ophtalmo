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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { REGIONS_SENEGAL } from "@/utils/constants";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { fr } from "date-fns/locale";

// Define schema and types
const patientSchema = z
  .object({
    date_enregistrement: z.date({
      message: "La date d'enregistrement est requise",
    }),
    no_fiche: z
      .string({ message: "Le numéro de fiche est requis" })
      .length(6, { message: "Le numéro de fiche doit être de 6 caractères" }),
    nom: z
      .string({ message: "Le nom est requis" })
      .min(1, { message: "Le nom est requis" }),
    prenom: z
      .string({ message: "Le prénom est requis" })
      .min(1, { message: "Le prénom est requis" }),
    sexe: z.enum(["M", "F"], { message: "Le sexe doit être M ou F" }),
    age: z.date({ message: "L'âge est requis" }),
    adresse: z
      .string({ message: "L'adresse est requise" })
      .min(1, { message: "L'adresse est requise" }),
    profession: z.string(),
    telephone: z
      .string({ message: "Le numéro de téléphone est requis" })
      .length(9, { message: "Le numéro de téléphone doit être de 9 chiffres" }),
    confirmer_telephone: z
      .string({ message: "Le numéro de téléphone est requis" })
      .length(9, { message: "Le numéro de téléphone doit être de 9 chiffres" }),
  })
  .refine(
    (schema) => {
      return schema.telephone === schema.confirmer_telephone;
    },
    { message: "Les numéros de téléphone ne correspondent pas" }
  );

export type PatientFormValues = z.infer<typeof patientSchema>;

type PatientIdentityProps = {
  nextFn: () => void;
};

const PatientIdentity: React.FC<PatientIdentityProps> = ({ nextFn }) => {
  const form = useForm<PatientFormValues>({
    resolver: zodResolver(patientSchema),
  });

  const onSubmit = (data: PatientFormValues) => {
    console.log(data);
    nextFn();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 grid grid-cols-2 gap-x-5 gap-y-2"
        id="identite-patient"
      >
        <FormField
          control={form.control}
          name="date_enregistrement"
          render={({ field }) => (
            <FormItem className="flex flex-col col-span-2">
              <FormLabel>Date d&apos;enregistrement</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", { locale: fr })
                      ) : (
                        <span>Choisir une date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    locale={fr}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="no_fiche"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>No Fiche</FormLabel>
              <FormControl>
                <Input {...field} maxLength={6} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="prenom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Prénom</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="sexe"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sexe</FormLabel>
              <FormControl>
                <RadioGroup {...field} className="flex flex-auto">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="M" id="M" />
                    <Label htmlFor="M">M</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="F" id="F" />
                    <Label htmlFor="F">F</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Age</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP", { locale: fr })
                      ) : (
                        <span>Choisir une date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    locale={fr}
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="adresse"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adresse</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez région" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {REGIONS_SENEGAL.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profession</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Téléphone</FormLabel>
              <FormControl>
                <Input {...field} maxLength={9} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmer_telephone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirmer téléphone</FormLabel>
              <FormControl>
                <Input {...field} maxLength={9} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default PatientIdentity;
