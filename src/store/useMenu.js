import { create } from "zustand";

/*Hook que permite el menu de hamburguesa */
const useMenu = create((set)=>({
    menu: false,
    toggleMenu: (value) => set(({menu}) => ({menu: typeof value === 'undefined' ? !menu : value}))
}))

export {useMenu}