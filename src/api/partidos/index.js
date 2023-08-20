import { clienteAxios } from "src/config/axios";
import { obtenerRegistros, obtenerUnRegistro } from "../helpers";
import { headers } from "src/helper";

export const obtenerMisPartidos = obtenerRegistros("/partidos");

export const obtenerUnPartido = (id) => obtenerUnRegistro("/partidos", id)();

export const obtenerPartidosPendientes = obtenerRegistros(
  "/partidos/pendientes"
);

export const obtenerPartidosCoordinacionPendientes = obtenerRegistros(
  "/partidos/coordinacion/pendientes"
);

export const aceptarPartidoMaestro = (id) =>
  obtenerUnRegistro("/partidos/maestro/aceptar", id)();

export const rechazarPartido = (id) =>
  obtenerUnRegistro("/partidos/coordinacion/rechazar", id)();

export const obtenerZonaJuegosPorPartido = (id) =>
  obtenerUnRegistro("/partidos/zonadejuegos", id)();

export const posponerPartido = async (id, partidoData) => {
  try {
    const { data } = await clienteAxios.post(
      "/partidos/coordinacion/posponer/" + id,
      partidoData,
      headers()
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const aceptarPartidoCoordinacion = async (id, datos) => {
  try {
    const partidoAceptado = await clienteAxios.post(
      "/partidos/coordinacion/aceptar/" + id,
      datos,
      headers()
    );

    return partidoAceptado;
  } catch (error) {
    throw error;
  }
};
export const obtenerPartidosCuidarMaestro = obtenerRegistros(
  "/partidos/maestro/cuidar"
);

export const colocarAsistencia = (id) =>
  obtenerUnRegistro("/partidos/asistencia", id)();
export const cancelarPartido = (id) =>
  obtenerUnRegistro("/partidos/cancelar", id)();

export const aceptarResultados = (id) =>
  obtenerUnRegistro("/partidos/estudiante/aceptar-resultado", id)();
  
export const cancelarResultados = (id) =>
  obtenerUnRegistro("/partidos/estudiante/cancelar-resultado", id)();

export const crearPartido = async (datos, id) => {
  try {
    console.log(datos);
    const { data } = await clienteAxios.post(
      `/partidos/${id}`,
      datos,
      headers()
    );
    return data;
  } catch (error) {
    throwError(error);
  }
};

export const cancelarPartidoEstudiante = (id) =>
  obtenerUnRegistro("/partidos/estudiante/cancelar", id)();

export const obtenerMiembrosPartido = (id) =>
  obtenerUnRegistro("/partidos/miembros", id)();

export const aceptarSolictudRival = async (datos, id) => {
  try {
    const partidoAceptado = await clienteAxios.post(
      "/partidos/estudiante/rival/aceptar/" + id,
      datos,
      headers()
    );

    return partidoAceptado;
  } catch (error) {
    throw error;
  }
};

export const enviarResultadosPartido = async (id, datos) => {
  try {
    const resultados = await clienteAxios.post(
      "/partidos/enviar-resultado/" + id,
      datos,
      headers()
    );
    return resultados;
  } catch (error) {
    throw error;
  }
};
