import { clienteAxios } from "../config/axios";
import { headers, headersForm, throwError } from "../helper";
import { eliminarUnRegistro, obtenerRegistros } from "./helpers";

const obtenerNivelesAcademicos = async () => {
  try {
    const { data } = await clienteAxios.get("/niveles-academicos");
    return data;
  } catch (error) {
    throwError(error);
  }
};
const obtenerTipoDeportes = async () => {
  try {
    const { data } = await clienteAxios.get("/tipos-deportes");
    return data;
  } catch (error) {
    throwError(error);
  }
};
const obtenerPerfil = async (token) => {
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


const crearCuentaEstudiante = async (data) => {
  try {
    await clienteAxios.post("/usuario", data);
    
    return true;
  } catch (error) {
    throwError(error);
  }
};


const crearDeporte = async (data) => {
  try {
    await clienteAxios.post("/deporte", data, headers());
    return true;
  } catch (error) {
    throwError(error);
  }
};
const obtenerDeportes = async()=>{
  try {
    const { data } = await clienteAxios.get("/deporte");
    return data;
  } catch (error) {
    throwError(error);
  }
}
const obtenerUnDeporte = async(id)=>{
  try {
    const { data } = await clienteAxios.get("/deporte/"+id);
    return data;
  } catch (error) {
    throwError(error);
  }
}

const editarDeporte = async(data)=>{
  try {
    await clienteAxios.put("/deporte/"+data.id, data, headers());
    return true;
  } catch (error) {
    throwError(error);
  }
}
const eliminarDeporte = async(id)=>{
  try {
    await clienteAxios.delete("/deporte/"+id, headers());
    return true;
  } catch (error) {
    throwError(error);
  }
}

const crearZonaDeJuego = async(data)=>{
  try {
    await clienteAxios.postForm("/zonaJuego", data, headersForm());
    return true;
  } catch (error) {
    throwError(error);
  }
}
const obtenerZonasDeJuegos = obtenerRegistros("/zonaJuego");
const eliminarZonaDeJuego = (id) => eliminarUnRegistro("/zonaJuego",id)()


const iniciarSesion = async (d) => {
  try {
    const { data } = await clienteAxios.post("/usuario/login", d);
    return data;
  } catch (error) {
    throwError(error);
  }
};

export {
  obtenerNivelesAcademicos,
  crearCuentaEstudiante,
  obtenerPerfil,
  iniciarSesion,
  obtenerTipoDeportes,
  crearDeporte,
  obtenerDeportes,
  obtenerUnDeporte,
  editarDeporte,
  eliminarDeporte,
  crearZonaDeJuego,
  obtenerZonasDeJuegos,
  eliminarZonaDeJuego,
};
