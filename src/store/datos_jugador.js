import { create } from "zustand";

const datosJugador = create((set) => ({
  id_equipo: null,
  id_usuarios: null,
  nombre: null,
  toggleIdEquipo: (value) =>
    set(({ id_equipo }) => ({
      id_equipo: typeof value === "undefined" ? !id_equipo : value,
    })),
  toggleIdUsuarios: (value) =>
    set(({ id_usuarios }) => ({
      id_usuarios: typeof value === "undefined" ? !id_usuarios : value,
    })),
  toggleNombre: (value) =>
    set(({ nombre }) => ({
      nombre: typeof value === "undefined" ? !nombre : value,
    })),
}));

export { datosJugador };
