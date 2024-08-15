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
  reset: () => void;
};

// default values
export const defaultPatient: PatientStore = {
  antecedents: {
    familiaux: {
      autres: "",
      cecite: false,
      gpao: false,
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
      hta: false,
    },
  },

  constantes_traitement: {
    acuite_visuelle_correction: false,
    cd: 0.0,
    od: 0.0,
    og: 0.0,
    odg: 0.0,
    pachymetrie: 0,
    refraction_automatisee_a: 0,
    refraction_automatisee_c: 0,
    refraction_automatisee_s: 0,
    refraction_automatisee_dp: 0,
    tonus_oculaire: 0,
    traitement_hypotonisant_oculaire: "",
  },
  identite_patient: {
    age: null,
    adresse: "",
    confirmer_telephone: "",
    no_fiche: "",
    nom: "",
    prenom: "",
    profession: "",
    sexe: "M",
    telephone: "",
    pas_glaucome_reevaluation: false,
    risque_glaucome_examens: false,
    observation: "",
  },
  retinographie: {
    fichier_joint: "",
    segment_anterieur_retinographie: "",
  },
  setAntecedents: () => {},
  setConstantesTraitement: () => {},
  setIdentitePatient: () => {},
  setRetinographie: () => {},
  reset: () => {},
};

export const usePatientStore = create<PatientStore>((set) => ({
  ...defaultPatient,
  setAntecedents: (antecedents) => set({ antecedents }),
  setConstantesTraitement: (constantes_traitement) =>
    set({ constantes_traitement }),
  setIdentitePatient: (identite_patient) => set({ identite_patient }),
  setRetinographie: (retinographie) => set({ retinographie }),
  reset: () => set(defaultPatient),
}));
