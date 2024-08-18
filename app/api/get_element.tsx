import { createClient } from "@/utils/supabase/client";
import { redirect } from "next/navigation";

export const revalidate = 0;

export const GetallAuxiliaire = async () => {
  const supabase = createClient();
  const { data: user } = await supabase.auth.getUser();
  if (!user || !user.user) throw new Error("Unauthorized not found");
  if (user.user.user_metadata?.role === "auxiliaire") return [];
  try {
    const { data } = await supabase
      .from("auxiliaire")
      .select("*")
      .eq("id_medecin", user.user?.id);
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw "No auxiliaire present";
  }
};

// export async function getPatients() {
//   console.log("triggered");
//   const supabase = createClient();
//   const { data: user } = await supabase.auth.getUser();
//   console.log(user);

//   const { data, error } = await supabase.from("patients").select("*");
//   if (error) {
//     throw new Error(error.message);
//   }
//   return data;
// }

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

export async function getMedecin(id_medecin: string) {
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
