import { create } from "zustand";

const initialData = {
  personal: {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    age: undefined,
    placeOfBirth: "",
    dateOfBirth: "",
    dobEC: "",
    sex: undefined,
    nationality: "",
    maritalStatus: undefined,
  },
  objective: "",
  education: [],
  experience: [],
  skills: { technical: [], soft: [] },
  languages: [],
  references: [],
};

const steps = [
  "personal",
  "objective",
  "education",
  "experience",
  "skills",
  "languages",
  "references",
];

export const useCvStore = create((set, get) => ({
  templateKey: "classic",
  language: "en",
  currentStep: 0,
  data: initialData,

  // --- template & language ---
  setTemplate: (key) => set({ templateKey: key }),
  setLanguage: (lang) => set({ language: lang }),

  // --- step navigation ---
  steps,
  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, steps.length - 1),
    })),
  prevStep: () =>
    set((state) => ({ currentStep: Math.max(state.currentStep - 1, 0) })),
  goToStep: (index) => set({ currentStep: index }),

  // --- personal info (single object, partial updates) ---
  updatePersonal: (partial) =>
    set((state) => ({
      data: { ...state.data, personal: { ...state.data.personal, ...partial } },
    })),

  // --- objective (plain string) ---
  setObjective: (text) =>
    set((state) => ({ data: { ...state.data, objective: text } })),

  // --- skills (technical/soft arrays) ---
  updateSkills: (partial) =>
    set((state) => ({
      data: { ...state.data, skills: { ...state.data.skills, ...partial } },
    })),

  // --- generic array helpers, reused for education/experience/languages/references ---
  addEntry: (field, entry) =>
    set((state) => ({
      data: { ...state.data, [field]: [...state.data[field], entry] },
    })),

  updateEntry: (field, index, partial) =>
    set((state) => ({
      data: {
        ...state.data,
        [field]: state.data[field].map((item, i) =>
          i === index ? { ...item, ...partial } : item,
        ),
      },
    })),

  removeEntry: (field, index) =>
    set((state) => ({
      data: {
        ...state.data,
        [field]: state.data[field].filter((_, i) => i !== index),
      },
    })),

  // --- full payload, ready for cvSchema.parse() before PDF/payment ---
  getFullData: () => ({
    templateKey: get().templateKey,
    language: get().language,
    ...get().data,
  }),

  reset: () =>
    set({
      templateKey: "classic",
      language: "en",
      currentStep: 0,
      data: initialData,
    }),
}));

export default useCvStore;
