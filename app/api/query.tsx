"use server";
import { AuxiliaireFormValues } from "@/components/auxiliaireModal";
import { MedecinFormValues } from "@/components/medecinmodal";
import { ObservationsFormValues } from "@/types/observations.types";
import { MAIN_ADMIN } from "@/utils/constants";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
// import {Medecin} from'@/types/entities.types';

export const Currentuser = async () => {
  const supabase = createClient();
  
  const {
    data: { user },
  } = await supabase.auth.getUser();
   console.log("je suis la")
   console.log(user)
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
  medecin_id: string | undefined;
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
  //const user=await Currentuser()
  let mail = `${data.phone}@gmail.com`;
  // je crée son profil

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
    console.log(user);
    const db_Data: MedecinInDB = {
      titre: data.title,
      prenom: data.firstName,
      nom: data.lastName,
      service: data.service,
      telephone: data.phone,
      confirmer_telephone: data.repeatPhone,
      admin_principal_id: MAIN_ADMIN,
      medecin_id: user?.user?.id,
    };

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

export type Auxiliaire = {
  prenom: string;
  nom: string;
  service: string;
  telephone: string;
  confirmer_telephone: string;
  admin_principal_id: string;
};

export const createAuxiliaire = async (data: AuxiliaireFormValues) => {
  if (data.phone !== data.repeatPhone)
    throw new Error("Les numéros de téléphone ne correspondent pas");
  const supabase = createClient();
  const medecin = await Currentuser();
  // je crée d'abord le mail du medecin a partir de son téléphone
  // let mail=medecin.telephone+"@gmail.com"
  let mail = `${data.phone}@gmail.com`;
  // je crée son profil
  const db_Data: Auxiliaire = {
    prenom: data.firstName,
    nom: data.lastName,
    service: data.service,
    telephone: data.phone,
    confirmer_telephone: data.repeatPhone,
    // admin_principal_id: MAIN_ADMIN,
    admin_principal_id: medecin?.id || "NA",
  };
  console.log(db_Data);

  try {
    // j'inscris le user d'abord ensuite je crée son profil
    const { data: user } = await supabase.auth.signUp({
      email: mail,
      password: data.password,
      options: {
        data: {
          role: "auxiliaire",
        },
      },
    });

    const { error } = await supabase.from("auxiliaire").insert([db_Data]);
    if (error) {
      throw error;
    }

    return user;
  } catch (error) {
    throw error;
  }
};
type ObservationInDB={
observation:string | undefined;
pas_glaucome_reevaluation:boolean;
risque_glaucome_examens:boolean;
gpao_observation:boolean
}

export const UpdateObservation=async (Observation_type:ObservationsFormValues,patient_id:any)=>{
  const supabase = createClient();
  //  j'update les champs d'observations
  const db_Data: ObservationInDB = {
    observation:Observation_type.observation,
    pas_glaucome_reevaluation:Observation_type.pas_glaucome_reevaluation,
    risque_glaucome_examens:Observation_type.risque_glaucome_examens,
    gpao_observation:Observation_type.gpao
  };
  const { data, error } = await supabase.from('patients').update([db_Data]).eq('id',patient_id)
  
  if (error) {
    throw error;
  }
  console.log(data)
  return data as any

}
