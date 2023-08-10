import { create } from "zustand";

export const useEquipo = create((set) => ({
  equipo: {},
  setEquipo: (value) => set({equipo: value})
}));