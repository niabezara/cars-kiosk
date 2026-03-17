import { EngineConfig, Grade } from "@/types/types";
import { create } from "zustand";

type CarState = {
  selectedEngine: EngineConfig | null;
  selectedGrade: Grade | null;

  setEngine: (engine: EngineConfig) => void;
  setGrade: (grade: Grade) => void;

  reset: () => void;
};

export const configStore = create<CarState>((set) => ({
  selectedEngine: null,
  selectedGrade: null,

  setEngine: (engine) => set({ selectedEngine: engine }),
  setGrade: (grade) => set({ selectedGrade: grade }),

  reset: () => set({ selectedEngine: null, selectedGrade: null }),
}));
