"use server";
import { PatientCompletFormValues } from "@/types/entities.types";
import { createClient } from "@/utils/supabase/server";

const supabase = createClient();

async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

export async function createPatient(patient: PatientCompletFormValues) {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized not found");
  console.log("saving...", patient);
  const { error } = await supabase.from("patients").insert([patient]);

  if (error) {
    throw new Error(error.message);
  }

  console.log("saved");
  return null;
}

export async function getPatients() {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized not found");
  const { data, error } = await supabase.from("patients").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}
