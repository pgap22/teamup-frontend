import Imagenes from "src/pages/Coordinacion/ZonaDeJuego/components/Imagenes";

export const deportesTransformar = (data) => {
  const datos = data?.data.map((deporte) => ({
    ID: deporte.id,
    Nombre: deporte.nombre,
    Descripcion: deporte.descripcion,
    "Limite Jugadores": deporte.limiteJugadores,
    "Limite Jugadores Cambio": deporte.limiteJugadoresCambio,
    "Tipo Deporte": deporte.tipoDeporte.nombre,
  }));

  return datos;
};

export const docentesTransformarTabla = ({ data }) => {
  return data.map((docente) => ({
    ID: docente.id,
    Nombre: docente.nombre,
    Email: docente.email,
    "Nivel Academico": docente.nivelAcademico.nivel,
  }));
};

export const tipoDeporteTransformar = ({ data }) => {
  return data.map((tipoDeporte) => ({
    value: tipoDeporte.id,
    label: tipoDeporte.nombre,
  }));
};

export const tipoNivelesAcademicos = ({ data }) => {
  return data.map((nivelAcademico) => ({
    value: nivelAcademico.id,
    label: nivelAcademico.nivel,
  }));
};

export const deportesSelect = ({ data }) => {
  return data.map((deporte) => ({
    value: deporte.id,
    label: deporte.nombre,
  }));
};

export const zonaJuegoTabla = function ({ data }) {
  return data.map((zonadejuego) => ({
    ID: zonadejuego.id,
    nombre: zonadejuego.nombre,
    deporte: zonadejuego.deporte.nombre,
    imagenes: <Imagenes imagenes={zonadejuego.imagenes} />,
  }));
};

export const miembrosEquipo = ({ data: equipo }) => {
  const { usuarios } = equipo;
  const { lider } = equipo;
  lider.rango = "lider";

  const DatosUsuarios = usuarios?.map((jugador) => {
    const { usuarios } = jugador;
    return { id: usuarios.id, nombre: usuarios.nombre, rango: "miembro" };
  });

  DatosUsuarios.push(lider);

  const sortedUsuarios = DatosUsuarios.sort((a, b) =>
    a.rango === "lider" && b.rango !== "lider" ? -1 : 1
  );

  return { ...equipo, jugadores: sortedUsuarios };
};

export const solicitudesTabla = ({data})=>{
  return data.map(solicitud => ({
    ID: solicitud.id,
    solicitante: solicitud.equipo_local.lider.nombre,
    deporte: solicitud.deporte.nombre,
    fecha: solicitud.fecha,
  }))
}
export const solicitudesTablaCoordinacion = ({data})=>{
  return data.map(solicitud => ({
    ID: solicitud.id,
    solicitante: solicitud.equipo_local.lider.nombre,
    maestro:  solicitud.usuarioMaestro.nombre,
    fecha: solicitud.fecha,
    deporte: solicitud.deporte.nombre
  }))
}

export const zonaJuegosSelect = ({data})=>{
  return data.map((zonaDeJuego) => ({
    value: zonaDeJuego.id,
    label: zonaDeJuego.nombre,
  }));
}

export const jugadoresSeleccionados = ({ data, stateMiembrosValues }) => {
  const { titular, reserva } = stateMiembrosValues;

  if (data.length === 0) return { headLinesPlayers: [], reservePlayers: [] };

  const headLinesPlayers = data.filter((miembro) => {
    return miembro.estado === titular;
  });

  const reservePlayers = data.filter((miembro) => {
    return miembro.estado === reserva;
  });

  return { headLinesPlayers, reservePlayers };
};