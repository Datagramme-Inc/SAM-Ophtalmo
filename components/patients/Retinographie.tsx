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
import { Input } from "@/components/ui/input";
import {
  RetinographieFormValues,
  retinographieSchema,
} from "@/types/retinographie.types";

type RetinographieFormProps = {
  nextFn: () => void;
};

export const RetinographieForm: React.FC<RetinographieFormProps> = ({
  nextFn,
}) => {
  const form = useForm<RetinographieFormValues>({
    resolver: zodResolver(retinographieSchema),
  });

  const onSubmit = (data: RetinographieFormValues) => {
    console.log(data);
    nextFn();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8"
        id="retinographie"
      >
        <FormField
          control={form.control}
          name="segment_anterieur_retinographie"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Segment Antérieur</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Segment Antérieur" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="fichier_joint"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fichier Joint</FormLabel>
              <FormControl>
                <Input type={"file"} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
