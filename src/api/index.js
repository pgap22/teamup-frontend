import { clienteAxios } from "../config/axios";
import { headers, throwError } from "../helper";

export const obtenerNivelesAcademicos = async () => {
  try {
    const { data } = await clienteAxios.get("/niveles-academicos");
    return data;
  } catch (error) {
    throwError(error);
  }
};
export const obtenerTipoDeportes = async () => {
  try {
    const { data } = await clienteAxios.get("/tipos-deportes");
    return data;
  } catch (error) {
    throwError(error);
  }
};
export const obtenerDeportes = async()=>{
  try {
    const { data } = await clienteAxios.get("/deporte");
    return data;
  } catch (error) {
    throwError(error);
  }
}
export const obtenerUnDeporte = async(id)=>{
  try {
    const { data } = await clienteAxios.get("/deporte/"+id);
    return data;
  } catch (error) {
    throwError(error);
  }
}
export const obtenerPerfil = async (token) => {
  try {
    const { data } = await clienteAxios.get("/usuario/perfil", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return data;
  } catch (error) {
    throwError(error);
  }
};
export const crearCuentaEstudiante = async (data) => {
  try {
    await clienteAxios.post("/usuario", data);

    return true;
  } catch (error) {
    throwError(error);
  }
};
export const crearCuentaMaestro = async (data) => {
  try {
    await clienteAxios.post("/usuario/maestro", data, headers());

    return true;
  } catch (error) {
    throwError(error);
  }
};
export const crearDeporte = async (data) => {
  try {
    await clienteAxios.post("/deporte", data, headers());
    return true;
  } catch (error) {
    throwError(error);
  }
};
export const editarDeporte = async(data)=>{
  try {
    await clienteAxios.put("/deporte/"+data.id, data, headers());
    return true;
  } catch (error) {
    throwError(error);
  }
}
export const eliminarDeporte = async(id)=>{
  try {
    await clienteAxios.delete("/deporte/"+id, headers());
    return true;
  } catch (error) {
    throwError(error);
  }
}
export const eliminarUsuario = async(id)=>{
  try {
    await clienteAxios.delete("/usuario/"+id, headers());
    return true;
  } catch (error) {
    throwError(error);
  }
}
export const iniciarSesion = async (d) => {
  try {
    const { data } = await clienteAxios.post("/usuario/login", d);
    return data;
  } catch (error) {
    throwError(error);
  }
};
export const obtenerMaestros = async()=>{
  try {
    const { data } = await clienteAxios.get("/usuario/maestro",headers());
    return data;
  } catch (error) {
    throwError(error);
  }
}
export const eliminarMaestro = async(id)=>{
  try {
    await clienteAxios.delete("/usuario/"+id, headers());
    return true;
  } catch (error) {
    throwError(error);
  }
}