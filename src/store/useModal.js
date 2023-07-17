import { create } from "zustand";

const useModal = create((set) => ({
  modalState: false,
  toggleModal: (value) => set({ modalState: value }),
}));

export { useModal };
