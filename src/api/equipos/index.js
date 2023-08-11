import { clienteAxios } from "src/config/axios";
import { headers, throwError } from "src/helper";

export const buscarEquipo = async (nombre) => {
  try {
    const { data: { data } } = await clienteAxios.post("/equipo/buscar", nombre, headers());

    return data;
  } catch (error) {
    throwError(error);
  }
};


export const obtenerMiembros = async (id) => {
  try {
    const { data: { data } } = await clienteAxios.get(`/equipo/miembros/${id}`, headers())
    return data
  } catch (error) {
    throwError(error)
  }
}