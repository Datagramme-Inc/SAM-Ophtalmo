import { AntecedentsFormValues } from "@/types/antecedents.types";
import { ConstantesTraitementFormValues } from "@/types/constantes-traitement.types";
import { PatientFormValues } from "@/types/patient-identity.types";
import { RetinographieFormValues } from "@/types/retinographie.types";
import { create } from "zustand";

export type PatientStore = {
  antecedents: AntecedentsFormValues;
  constantes_traitement: ConstantesTraitementFormValues;
  identite_patient: PatientFormValues;
  retinographie: RetinographieFormValues;
  setAntecedents: (antecedents: AntecedentsFormValues) => void;
  setConstantesTraitement: (
    constantes_traitement: ConstantesTraitementFormValues
  ) => void;
  setIdentitePatient: (identite_patient: PatientFormValues) => void;
  setRetinographie: (retinographie: RetinographieFormValues) => void;
};

// default values
export const defaultPatient: PatientStore = {
  antecedents: {
    familiaux: {
      autres: "",
      cecite: false,
      GPAO: false,
    },
    personnels: {
      traitement: "",
      addiction: false,
      type_addiction: "",
      autres: "",
      pathologie_ophtalmologique: "",
      atopie: false,
      diabete: false,
      drepanocytose: false,
      HTA: false,
    },
  },

  constantes_traitement: {
    acuite_visuelle_correction: false,
    cd: 0,
    od: 0,
    og: 0,
    odg: 0,
    pachymetrie: 0,
    refraction_automatisee_A: 0,
    refraction_automatisee_C: 0,
    refraction_automatisee_S: 0,
    refraction_automatisee_DP: 0,
    tonus_oculaire: 0,
    traitement_hypotonisant_oculaire: false,
    produits: "",
  },
  identite_patient: {
    age: null,
    adresse: "",
    confirmer_telephone: "",
    date_enregistrement: new Date(),
    no_fiche: "",
    nom: "",
    prenom: "",
    profession: "",
    sexe: "M",
    telephone: "",
  },
  retinographie: {
    fichier_joint: "",
    segment_anterieur_retinographie: "",
  },
  setAntecedents: () => {},
  setConstantesTraitement: () => {},
  setIdentitePatient: () => {},
  setRetinographie: () => {},
};

export const usePatientStore = create<PatientStore>((set) => ({
  ...defaultPatient,
  setAntecedents: (antecedents) => set({ antecedents }),
  setConstantesTraitement: (constantes_traitement) =>
    set({ constantes_traitement }),
  setIdentitePatient: (identite_patient) => set({ identite_patient }),
  setRetinographie: (retinographie) => set({ retinographie }),
}));
