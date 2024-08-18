import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export const revalidate = 0;

export const GetallAuxiliaire = async (id_medecin: any) => {
  const supabase = createClient();
  try {
    const { data } = await supabase
      .from("auxiliaire")
      .select("*")
      .eq("admin_principal_id", id_medecin);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw "No auxiliaire present";
  }
};

export async function getPatients() {
  const supabase = createClient();
  const { data, error } = await supabase.from("patients").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function getPatient(id: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("patients")
    .select("*")
    .eq("id", id);
  if (error) {
    throw new Error(error.message);
  }
  return data.length > 0 ? data[0] : null;
}

export async function getMedecin(id_medecin:string) {
  const supabase = createClient();
  try {
    const { data } = await supabase
      .from("auxiliaire")
      .select("*")
      .eq("medecin_id", id_medecin);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw "No auxiliaire present";
  }
}

export const signOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect("/login");
};