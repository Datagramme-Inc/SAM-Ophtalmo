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
  console.log(patient);
  const user = await getUser();
  if (!user) throw new Error("Unauthorized not found");
  console.log(user);
  const phone = user.email ? user.email.split("@")[0] : null;
  const aux = await supabase
    .from("auxiliaire")
    .select("*")
    .eq("telephone", phone);
  if (!aux.data?.length) throw new Error("Non connecte");
  console.log(patient);
  const db_patient = { ...patient, auxiliaire_id: aux.data[0].id };
  console.log("saving...", db_patient);
  const { error } = await supabase.from("patients").insert([db_patient]);

  if (error) {
    throw new Error(error.message);
  }

  console.log("saved");
  return null;
}

export async function getPatients() {
  const user = await getUser();
  if (!user) throw new Error("Unauthorized not found");

  const { data, error } = await supabase
    .from("patients")
    .select("*, auxiliaire (id_medecin)")
    .eq("auxiliaire.id_medecin", user.id);

  if (error) {
    console.log(error);
    return [];
  }

  console.log(data);
  return data;
}
