import { create } from "zustand";

/*Hook que permite el menu de hamburguesa */
const useMenu = create((set) => ({
  menu: false,
  toggleMenu: (value) =>
    set(({ menu }) => ({ menu: typeof value === "undefined" ? !menu : value })),
}));

const useDropDown = create((set) => ({
  dropDown: false,
  toggleDropDown: (value) =>
    set(({ dropDown }) => ({
      dropDown: typeof value === "undefined" ? !dropDown : value,
    })),
}));

export { useMenu, useDropDown };
