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
import {
  RetinographieFormValues,
  retinographieSchema,
} from "@/types/retinographie.types";

type RetinographieFormProps = {
  nextFn: () => void;
  setFn: (data: RetinographieFormValues) => void;
  initValues: RetinographieFormValues;
};

export const RetinographieForm: React.FC<RetinographieFormProps> = ({
  nextFn,
  setFn,
  initValues,
}) => {
  const form = useForm<RetinographieFormValues>({
    resolver: zodResolver(retinographieSchema),
  });

  const onSubmit = (data: RetinographieFormValues) => {
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
                <Input
                  type="file"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      field.onChange(e.target.files[0]); // Store the file in the form state
                    }
                  }}
                  name={field.name}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  // Note: We do not set a value prop here, since input type="file" handles it internally
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
