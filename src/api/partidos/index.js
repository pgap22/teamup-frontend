import { clienteAxios } from "src/config/axios";
import { obtenerRegistros, obtenerUnRegistro } from "../helpers";
import { headers } from "src/helper";
import axios from "axios";

export const obtenerMisPartidos = obtenerRegistros('/partidos');

export const obtenerUnPartido = id => obtenerUnRegistro('/partidos', id)();

export const obtenerPartidosPendientes = obtenerRegistros("/partidos/pendientes");

export const obtenerPartidosCoordinacionPendientes = obtenerRegistros("/partidos/coordinacion/pendientes");

export const aceptarPartidoMaestro = id => obtenerUnRegistro("/partidos/maestro/aceptar", id)();

export const rechazarPartido = id => obtenerUnRegistro("/partidos/coordinacion/rechazar",id)();

export const obtenerZonaJuegosPorPartido = id => obtenerUnRegistro("/partidos/zonadejuegos",id)();

export const posponerPartido = async (id,partidoData) =>{
    try {
        const {data} = await clienteAxios.post("/partidos/coordinacion/posponer/"+id, partidoData, headers())
        return data;
    } catch (error) {
        throw error;
    }
}

export const aceptarPartidoCoordinacion = async (id,datos) =>{
    try {
        const partidoAceptado = await clienteAxios.post("/partidos/coordinacion/aceptar/"+id, datos, headers())

        return partidoAceptado;
    } catch (error) {
        throw error
    }
}
export const obtenerPartidosCuidarMaestro = obtenerRegistros("/partidos/maestro/cuidar");

export const colocarAsistenciaMaestro = id => obtenerUnRegistro("/partidos/maestro/asistencia",id)()
export const cancelarPartidoMaestro = id => obtenerUnRegistro("/partidos/maestro/cancelar",id)()

export const enviarResultadosPartido = async (id,datos) => {
    try {
        const resultados = await clienteAxios.post("/partidos/enviar-resultado/"+id, datos, headers())
        return resultados
    } catch (error) {
        throw error
    }
}