import { AxiosError } from "axios";
import { clienteAxios } from "../config/axios";
const throwError = (error) => {
  if (error instanceof AxiosError) {
    throw error.response.data.data.error;
  }
};

const obtenerNivelesAcademicos = async () => {
  try {
    const { data } = await clienteAxios.get("/niveles-academicos");
    return data;
  } catch (error) {
    throwError(error);
  }
};

const obtenerPerfil = async (token)=>{
  try {
    const {data} = await clienteAxios.get("/usuario/perfil", {headers: {
      Authorization: "Bearer " + token
    }})

    return data
  } catch (error) {
    throwError(error)
  }
}

const crearCuentaEstudiante = async (data) => {
  try {
    await clienteAxios.post("/usuario", data);

    return true;
  } catch (error) {
    throwError(error);
  }
};

const iniciarSesion = async (d)=>{
  try {
    const { data } = await clienteAxios.post("/usuario/login", d);
    return data
  } catch (error) {
    throwError(error)
  }
}

export { obtenerNivelesAcademicos, crearCuentaEstudiante, obtenerPerfil, iniciarSesion};
