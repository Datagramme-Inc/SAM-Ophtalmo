"use server";
import { PatientCompletFormValues } from "@/types/entities.types";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();
export async function createPatient(patient: PatientCompletFormValues) {
  console.log("saving...", patient);
  const { error } = await supabase.from("patients").insert([patient]);

  if (error) {
    throw new Error(error.message);
  }

  console.log("saved");
  return null;
}

export async function getPatients() {
  const { data, error } = await supabase.from("patients").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
