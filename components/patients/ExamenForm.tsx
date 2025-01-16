"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const examenSchema = z.object({
  annexes: z.object({
    om_od: z.string(),
    om_og: z.string(),
    palpebral_od: z.string(),
    palpebral_og: z.string(),
    conjonctives_od: z.string(),
    conjonctives_og: z.string(),
    autres_od: z.string(),
    autres_og: z.string(),
  }),
  sa: z.object({
    cornee_od: z.string(),
    cornee_og: z.string(),
    chambre_anterieur_od: z.string(),
    chambre_anterieur_og: z.string(),
    rpm_od: z.enum(["+", "lent", "-"]),
    rpm_og: z.enum(["+", "lent", "-"]),
  }),
  toCristallin: z.object({
    to_od: z
      .number()
      .min(1, { message: "doit être positif" })
      .max(61, { message: "doit être inferieur ou égal à 60" })
      .optional(),
    to_og: z
      .number()
      .min(1, { message: "doit être positif" })
      .max(61, { message: "doit être inferieur ou égal à 60" })
      .optional(),
    cristallin_od: z.enum([
      "Clair",
      "Cataracte",
      "Ectopie",
      "Aphakie",
      "Pseudophakie",
    ]),
    cristallin_og: z.enum([
      "Clair",
      "Cataracte",
      "Ectopie",
      "Aphakie",
      "Pseudophakie",
    ]),
  }),
  sp: z.object({
    champs_retiniens_od: z.string(),
    champs_retiniens_og: z.string(),
    vaisseaux_od: z.string(),
    vaisseaux_og: z.string(),
    papille_od: z.string(),
    papille_og: z.string(),
    macula_od: z.string(),
    macula_og: z.string(),
    vitre_od: z.string(),
    vitre_og: z.string(),
  }),
});

interface ExamenFormProps {
  nextFn: () => void;
  setFn: (data: ExamenFormValues) => void;
  initValues?: any;
}

export type ExamenFormValues = z.infer<typeof examenSchema>;

export default function ExamenForm({
  nextFn,
  setFn,
  initValues,
}: ExamenFormProps) {
  const form = useForm<ExamenFormValues>({
    resolver: zodResolver(examenSchema),
    defaultValues: initValues || {
      annexes: {
        om_od: "",
        om_og: "",
        palpebral_od: "",
        palpebral_og: "",
        conjonctives_od: "",
        conjonctives_og: "",
        autres_od: "",
        autres_og: "",
      },
      sa: {
        cornee_od: "",
        cornee_og: "",
        chambre_anterieur_od: "",
        chambre_anterieur_og: "",
        rpm_od: undefined,
        rpm_og: undefined,
      },
      toCristallin: {
        to_od: undefined,
        to_og: undefined,
        cristallin_od: undefined,
        cristallin_og: undefined,
      },
      sp: {
        champs_retiniens_od: "",
        champs_retiniens_og: "",
        vaisseaux_od: "",
        vaisseaux_og: "",
        papille_od: "",
        papille_og: "",
        macula_od: "",
        macula_og: "",
        vitre_od: "",
        vitre_og: "",
      },
    },
  });

  function onSubmit(data: ExamenFormValues) {
    setFn(data);
    nextFn();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        id="examen-form"
      >
        {/* Annexes */}
        <Card>
          <CardHeader>
            <CardTitle>Annexes</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <h3 className="font-semibold">OD (Œil Droit)</h3>
              <FormField
                control={form.control}
                name="annexes.om_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OM</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="annexes.palpebral_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Palpébral</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="annexes.conjonctives_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conjonctives</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="annexes.autres_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Autres</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">OG (Œil Gauche)</h3>
              <FormField
                control={form.control}
                name="annexes.om_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>OM</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="annexes.palpebral_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Palpébral</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="annexes.conjonctives_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conjonctives</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="annexes.autres_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Autres</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Segment Antérieur */}
        <Card>
          <CardHeader>
            <CardTitle>Segment Antérieur</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <h3 className="font-semibold">OD (Œil Droit)</h3>
              <FormField
                control={form.control}
                name="sa.cornee_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cornée</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sa.chambre_anterieur_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chambre antérieur</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sa.rpm_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>RPM</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="+" />
                          </FormControl>
                          <FormLabel className="font-normal">+</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="lent" />
                          </FormControl>
                          <FormLabel className="font-normal">Lent</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="-" />
                          </FormControl>
                          <FormLabel className="font-normal">-</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">OG (Œil Gauche)</h3>
              <FormField
                control={form.control}
                name="sa.cornee_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cornée</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sa.chambre_anterieur_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Chambre antérieur</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sa.rpm_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>RPM</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-row space-x-4"
                      >
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="+" />
                          </FormControl>
                          <FormLabel className="font-normal">+</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="lent" />
                          </FormControl>
                          <FormLabel className="font-normal">Lent</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <RadioGroupItem value="-" />
                          </FormControl>
                          <FormLabel className="font-normal">-</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* TO et Cristallin */}
        <Card>
          <CardHeader>
            <CardTitle>TO et Cristallin</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <h3 className="font-semibold">OD (Œil Droit)</h3>
              <FormField
                control={form.control}
                name="toCristallin.to_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>TO</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        id="to_d"
                        min="1"
                        max="60"
                        value={
                          field.value !== undefined ? String(field.value) : ""
                        }
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className={cn(
                          "p-3 border border-gray-300 rounded-md text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="toCristallin.cristallin_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cristallin</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Clair">Clair</SelectItem>
                        <SelectItem value="Cataracte">Cataracte</SelectItem>
                        <SelectItem value="Ectopie">Ectopie</SelectItem>
                        <SelectItem value="Aphakie">Aphakie</SelectItem>
                        <SelectItem value="Pseudophakie">
                          Pseudophakie
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">OG (Œil Gauche)</h3>
              <FormField
                control={form.control}
                name="toCristallin.to_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>TO</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        id="to_g"
                        min="1"
                        max="60"
                        value={
                          field.value !== undefined ? String(field.value) : ""
                        }
                        onChange={(e) => field.onChange(Number(e.target.value))}
                        className={cn(
                          "p-3 border border-gray-300 rounded-md text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="toCristallin.cristallin_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cristallin</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez une option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Clair">Clair</SelectItem>
                        <SelectItem value="Cataracte">Cataracte</SelectItem>
                        <SelectItem value="Ectopie">Ectopie</SelectItem>
                        <SelectItem value="Aphakie">Aphakie</SelectItem>
                        <SelectItem value="Pseudophakie">
                          Pseudophakie
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        {/* Segment Postérieur */}
        <Card>
          <CardHeader>
            <CardTitle>Segment Postérieur</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <h3 className="font-semibold">OD (Œil Droit)</h3>
              <FormField
                control={form.control}
                name="sp.champs_retiniens_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Champs rétiniens</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sp.vaisseaux_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vaisseaux</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sp.papille_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Papille</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sp.macula_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Macula</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sp.vitre_od"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vitré</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">OG (Œil Gauche)</h3>
              <FormField
                control={form.control}
                name="sp.champs_retiniens_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Champs rétiniens</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sp.vaisseaux_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vaisseaux</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sp.papille_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Papille</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sp.macula_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Macula</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="sp.vitre_og"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vitré</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}
