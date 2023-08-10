import { obtenerRegistros, obtenerUnRegistro } from "../helpers";

export const obtenerMisPartidos = obtenerRegistros('/partidos');

export const obtenerUnPartido = id => obtenerUnRegistro('/partidos', id)();

export const obtenerPartidosPendientes = obtenerRegistros("/partidos/pendientes");

export const obtenerPartidosCoordinacionPendientes = obtenerRegistros("/partidos/coordinacion/pendientes");

export const aceptarPartidoMaestro = id => obtenerUnRegistro("/partidos/maestro/aceptar", id)();