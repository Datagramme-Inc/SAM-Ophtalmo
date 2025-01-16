import { ExamenFormValues } from "@/components/patients/ExamenForm";
import { AntecedentsCompletFormValues } from "./antecedents.types";
import { ConstantesTraitementFormValues } from "./constantes-traitement.types";
import { ObservationsFormValues } from "./observations.types";
import { PatientFormValues } from "./patient-identity.types";
import { RetinographieFormValues } from "./retinographie.types";

// Enum type for Acuité Visuelle Oeil
export enum AcuiteVisuelleOeil {
  Zero = "0",
  ZeroPointTwentyFive = "0.25",
  ZeroPointFive = "0.5",
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
  Six = "6",
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Ten = "10",
}

// Grades
export enum Grade {
  DR = "Dr",
  PR = "Pr",
}

// Admin Principal
export interface AdminPrincipal {
  id: number;
  nom: string;
  prenom: string;
  role: Grade;
  date_creation: Date;
  date_modification: Date;
}

// Medecin
export interface Medecin {
  id: number;
  role: Grade;
  prenom: string;
  nom: string;
  service: string;
  telephone: string;
  date_creation: Date;
  date_modification: Date;
}

// Auxiliaire
export interface Auxiliaire {
  id: number;
  admin_principal_id: number;
  prenom: string;
  nom: string;
  service: string;
  code: string;
  telephone: string;
  confirmer_telephone: string;
  date_creation: Date;
  date_modification: Date;
}

// Sexe
export enum Sexe {
  M = "M",
  F = "F",
}

// Patient
export interface Patient {
  id: number;
  no_fiche: string;
  nom: string;
  prenom: string;
  sexe: Sexe;
  age: Date;
  adresse: string;
  profession: string;
  telephone: string;
  confirmer_telephone: string;
  gpao: boolean;
  date_creation: Date;
  date_modification: Date;
}

export interface Observations {
  observation: string;
  pas_glaucome_reevaluation: boolean;
  risque_glaucome_examens: boolean;
}

// Antecedents Personnels
export interface AntecedentsPersonnels {
  id: number;
  patient_id: number;
  hta: boolean;
  diabete: boolean;
  drepanocytose: boolean;
  atopie: boolean;
  addiction: boolean;
  type_addiction: string;
  autres: string;
  pathologie_ophtalmologique: string;
  traitement: string;
}

// Antecedents Familiaux
export interface AntecedentsFamiliaux {
  id: number;
  patient_id: number;
  cecite: boolean;
  gpao: boolean;
  autres: string;
}

// Retinographie
export interface Retinographie {
  id: number;
  patient_id: number;
  segment_anterieur_retinographie: string;
  fichier_joint: string;
}

// Constantes Traitement
export interface ConstantesTraitement {
  id: number;
  patient_id: number;
  acuite_visuelle_correction: boolean;
  od: AcuiteVisuelleOeil;
  og: AcuiteVisuelleOeil;
  odg: AcuiteVisuelleOeil;
  refraction_automatisee_a: number;
  refraction_automatisee_s: number;
  refraction_automatisee_c: number;
  refraction_automatisee_dp: number;
  tonus_oculaire: number;
  pachymetrie: number;
  cd: number;
  traitement_hypotonisant_oculaire: string;
}

// Examen
export interface ExamenAnnexes {
  id?: number;
  patient_id?: number;
  om_od: string;
  om_og: string;
  palpebral_od: string;
  palpebral_og: string;
  conjonctives_od: string;
  conjonctives_og: string;
  autres_od: string;
  autres_og: string;
}

export interface ExamenSA {
  cornee_od: string;
  cornee_og: string;
  chambre_anterieur_od: string;
  chambre_anterieur_og: string;
  rpm_od: "+" | "lent" | "-";
  rpm_og: "+" | "lent" | "-";
}

export interface ExamenTOCristallin {
  to_od: string;
  to_og: string;
  cristallin_od: "Clair" | "Cataracte" | "Ectopie" | "Aphakie" | "Pseudophakie";
  cristallin_og: "Clair" | "Cataracte" | "Ectopie" | "Aphakie" | "Pseudophakie";
}

export interface ExamenSP {
  id?: number;
  patient_id?: number;
  champs_retiniens_od: string;
  champs_retiniens_og: string;
  vaisseaux_od: string;
  vaisseaux_og: string;
  papille_od: string;
  papille_og: string;
  macula_od: string;
  macula_og: string;
  vitre_od: string;
  vitre_og: string;
}

export type Examen = {
  annexes: ExamenAnnexes;
  sa: ExamenSA;
  toCristallin: ExamenTOCristallin;
  sp: ExamenSP;
};
export type PatientComplet = {} & Patient &
  AntecedentsPersonnels &
  AntecedentsFamiliaux &
  Retinographie &
  ConstantesTraitement; //&
// Observations;

export type PatientCompletFormValues = PatientFormValues &
  AntecedentsCompletFormValues &
  RetinographieFormValues &
  ConstantesTraitementFormValues &
  ObservationsFormValues &
  ExamenFormValues;
