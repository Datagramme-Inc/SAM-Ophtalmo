"use server";
import { MedecinFormValues } from "@/components/medecinmodal";
import { MAIN_ADMIN } from "@/utils/constants";
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

type MedecinInDB = {
  titre: string;
  prenom: string;
  nom: string;
  service: string;
  telephone: string;
  admin_principal_id: string;
  confirmer_telephone: string;
};

export const getMedecins = async () => {
  const supabase = createClient();
  const { data, error } = await supabase.from("medecin").select("*");
  if (error) {
    throw error;
  }
  return data;
};

export const createMedecin = async (data: MedecinFormValues) => {
  if (data.phone !== data.repeatPhone)
    throw new Error("Les numéros de téléphone ne correspondent pas");
  const supabase = createClient();
  // je crée d'abord le mail du medecin a partir de son téléphone
  // let mail=medecin.telephone+"@gmail.com"
  let mail = `${data.phone}@gmail.com`;
  // je crée son profil
  const db_Data: MedecinInDB = {
    titre: data.title,
    prenom: data.firstName,
    nom: data.lastName,
    service: data.service,
    telephone: data.phone,
    confirmer_telephone: data.repeatPhone,
    admin_principal_id: MAIN_ADMIN,
  };

  try {
    // j'inscris le user d'abord ensuite je crée son profil
    const { data: user } = await supabase.auth.signUp({
      email: mail,
      password: data.password,
      options: {
        data: {
          role: "medecin",
        },
      },
    });

    const { error } = await supabase.from("medecin").insert([db_Data]);
    if (error) {
      throw error;
    }

    return user;
  } catch (error) {
    throw error;
  }
};

export const uploadfile = async (retinofile: any) => {
  const supabase = createClient();

  const { data, error } = await supabase.storage
    .from("samophtalmo")
    .upload("public/avatar1.png", retinofile);

  if (error) {
    console.error("Error uploading file:", error);
    return { error };
  }

  console.log("File uploaded successfully:", data);
  return { data };
};
