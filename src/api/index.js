import { clienteAxios } from "../config/axios";
import { headers, headersForm, throwError } from "../helper";
import {
  editarUnRegistroForm,
  eliminarUnRegistro,
  obtenerRegistros,
  obtenerUnRegistro,
} from "./helpers";

export const actualizarAvatar = async (data) =>
  editarUnRegistroForm("/equipo/actualizarAvatar", data)();
export const HacerLider = async (idEquipo, datos) => {
  try {
    await clienteAxios.patch(
      `/equipo/cambiarLider/${idEquipo}`,
      datos,
      headers()
    );
    return true;
  } catch (error) {
    throwError(error);
  }
};

export const eliminarMiembro = async (idEquipo, datos) => {
  try {
    await clienteAxios.patch(
      `/equipo/eliminarMiembro/${idEquipo}`,
      datos,
      headers()
    );
    return true;
  } catch (error) {
    throwError(error);
  }
};

export const abandonarEquipo = (id) =>
  eliminarUnRegistro("/equipo/abandonarEquipo", id)();

export const eliminarEquipo = (id) => eliminarUnRegistro("/equipo", id)();

export const actualizarDatos = async (datos) => {
  try {
    const { data } = await clienteAxios.patch(
      `/equipo/actualizarDatos/${datos.id}`,
      datos,
      headers()
    );
    return data;
  } catch (error) {
    throwError(error);
  }
};
export const unirseEquipo = async (datos) => {
  try {
    const { data } = await clienteAxios.post(
      `/equipo/unirseEquipo`,
      datos,
      headers()
    );
    return data;
  } catch (error) {
    throwError(error);
  }
};
export const obtenerUnEquipo = async (id) => {
  try {
    const { data } = await clienteAxios.get(`/equipo/${id}`, headers());
    return data;
  } catch (error) {
    throwError(error);
  }
};
export const obtenerEquiposDelUsuario = async () => {
  try {
    const { data } = await clienteAxios.get("/equipo", headers());
    return data;
  } catch (error) {
    throwError(error);
  }
};
export const crearEquipo = async (datos) => {
  try {
    const { data } = await clienteAxios.post("/equipo", datos, headers());
    return data;
  } catch (error) {
    throwError(error);
  }
};
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
export const obtenerDeportes = async () => {
  try {
    const { data } = await clienteAxios.get("/deporte");
    return data;
  } catch (error) {
    throwError(error);
  }
};
export const obtenerUnDeporte = async (id) => {
  try {
    const { data } = await clienteAxios.get("/deporte/" + id);
    return data;
  } catch (error) {
    throwError(error);
  }
};
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
export const editarDeporte = async (data) => {
  try {
    await clienteAxios.patch("/deporte/" + data.id, data, headers());
    return true;
  } catch (error) {
    throwError(error);
  }
};
export const eliminarDeporte = async (id) => {
  try {
    await clienteAxios.delete("/deporte/" + id, headers());
    return true;
  } catch (error) {
    throwError(error);
  }
};

export const crearZonaDeJuego = async (data) => {
  try {
    await clienteAxios.postForm("/zonaJuego", data, headersForm());
    return true;
  } catch (error) {
    throwError(error);
  }
};
export const obtenerZonasDeJuegos = obtenerRegistros("/zonaJuego");

export const eliminarZonaDeJuego = (id) =>
  eliminarUnRegistro("/zonaJuego", id)();
export const obtenerUnaZonaDeJuego = (id) =>
  obtenerUnRegistro("/zonaJuego", id)();
export const editarUnaZonaDeJuego = (data) =>
  editarUnRegistroForm("/zonaJuego", data)();

export const iniciarSesion = async (d) => {
  try {
    const { data } = await clienteAxios.post("/usuario/login", d);
    return data;
  } catch (error) {
    throwError(error);
  }
};
export const obtenerMaestros = async () => {
  try {
    const { data } = await clienteAxios.get("/usuario/maestro", headers());
    return data;
  } catch (error) {
    throwError(error);
  }
};
export const eliminarMaestro = async (id) => {
  try {
    await clienteAxios.delete("/usuario/" + id, headers());
    return true;
  } catch (error) {
    throwError(error);
  }
};
