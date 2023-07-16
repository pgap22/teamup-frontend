import { clienteAxios } from "src/config/axios";
import { headers, throwError } from "src/helper";

export const obtenerRegistros = function (key) {
  return async () => {
    try {
      const { data } = await clienteAxios.get(key, headers());
      return data;
    } catch (error) {
      throwError(error);
    }
  };
};

export const obtenerUnRegistro = function (key, id) {
  return async () => {
    try {
      const { data } = await clienteAxios.get(key + "/" + id, headers());
      return data;
    } catch (error) {
      throwError(error);
    }
  };
};

export const eliminarUnRegistro = function (key, id) {
  return async () => {
    try {
      await clienteAxios.delete(key + "/" + id, headers());
      return true;
    } catch (error) {
      throwError(error);
    }
  };
};
