"use server";
import { createClient } from "@/utils/supabase/server";
// import {Medecin} from'@/types/entities.types';

export const Currentuser = async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  // console.log("je suis la")
  // console.log(user)
  // je fetch le role
  return user;
};

export const Medecin_Profile = async (user_id: string) => {
  const supabase = createClient();

  const profile = await supabase.from("medecin").select("*").eq("id", user_id);
  return profile;
};

export const createMedecin = async () => {
  const supabase = createClient();
  // je crée d'abord le mail du medecin a partir de son téléphone
  // let mail=medecin.telephone+"@gmail.com"
  let mail = "778074123@gmail.com";
  try {
    // j'inscris le user d'abord ensuite je crée son profil
    const { data: user } = await supabase.auth.signUp({
      email: mail,
      password: "passer123",
      options: {
        data: {
          role: "medecin",
        },
      },
    });
    // console.log(user)

    return user;
  } catch (error) {
    throw error;
  }
};
