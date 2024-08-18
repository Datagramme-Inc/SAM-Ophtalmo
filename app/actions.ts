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

  const phone = user.email ? user.email.split("@")[0] : null;
  const aux = await supabase
    .from("auxiliaire")
    .select("*")
    .eq("telephone", phone);

  const db_patient = {
    ...patient,
    auxiliaire_id: aux.data?.length ? aux.data[0].id : null,
    id_medecin: "",
  };
  if (user.user_metadata.role === "medecin") {
    db_patient.id_medecin = user.id;
  }
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

  if (user.user_metadata.role === "auxiliaire") return [];

  const { data, error } = await supabase
    .from("patients")
    .select("*, auxiliaire (id_medecin)")
    .eq("auxiliaire.id_medecin", user.id);

  const { data: otherData, error: otherError } = await supabase
    .from("patients")
    .select("*")
    .eq("id_medecin", user.id);

  if (error || otherError) {
    console.error(error);
    console.error(otherError);
    return [];
  }

  return [...data, ...otherData];
}
