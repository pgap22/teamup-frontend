import { create } from "zustand";

const useSingleImage = create((set) => ({
  imagen: [],
  data: [],
  setImagen: (value) => set({ imagen: value }),
  setData: (value) => set({ data: value }),
}));

export { useSingleImage };
