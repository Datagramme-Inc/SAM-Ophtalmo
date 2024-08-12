"use server";
import { PatientFormValues } from "@/types/patient-identity.types";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();
export async function createPatient(patient: PatientFormValues) {
  console.log("saving...", patient);
  const { error, ...rest } = await supabase.from("patients").insert([patient]);

  console.log(rest);
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
