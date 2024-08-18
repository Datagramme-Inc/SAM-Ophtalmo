"use client";
import {
  ObservationsFormValues,
  observationsSchema,
} from "@/types/observations.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Checkbox } from "../ui/checkbox";

type ObservationProps = {
  nextFn: () => void;
  setFn: (of: ObservationsFormValues) => void;
  initValues: ObservationsFormValues;
};

const ObservationsForm: React.FC<ObservationProps> = ({
  nextFn,
  setFn,
  initValues,
}) => {
  const form = useForm<ObservationsFormValues>({
    resolver: zodResolver(observationsSchema),
  });

  useEffect(() => {
    form.reset(initValues);
  }, []);

  const onSubmit = (data: ObservationsFormValues) => {
    nextFn();
    setFn(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 grid grid-cols-2 gap-x-5 gap-y-2"
        id="observations-form"
      >
        <FormField
          control={form.control}
          name="observation"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Observation</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pas_glaucome_reevaluation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pas de glaucome reevaluation</FormLabel>
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
          name="risque_glaucome_examens"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Risque de glaucome examens</FormLabel>
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
      </form>
    </Form>
  );
};

export default ObservationsForm;
