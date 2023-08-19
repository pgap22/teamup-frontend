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

export const miembrosEquipo = ({ data }) => {
  const { usuarios } = data;
  const { lider } = data;

  lider.rango = "lider";

  const DatosUsuarios = usuarios?.map((jugador) => {
    const { usuarios } = jugador;
    return { id: usuarios.id, nombre: usuarios.nombre, rango: "miembro" };
  });

  DatosUsuarios.push(lider);

  const sortedUsuarios = DatosUsuarios.sort((a, b) =>
    a.rango === "lider" && b.rango !== "lider" ? -1 : 1
  );

  const formatedData = {
    id: data.id,
    nombre: data.nombre,
    avatar_url: data.avatar_url,
    lider: data.lider,
    rango: data.rango,
  };
  return { ...formatedData, jugadores: [...sortedUsuarios] };
};

export const solicitudesTabla = ({ data }) => {
  return data.map((solicitud) => {
    let nombre = "Pendiente";
    if (solicitud.ZonaDejuego) {
      nombre = solicitud.ZonaDejuego.nombre;
    }

    return {
      ID: solicitud.id,
      solicitante: solicitud.equipo_local.lider.nombre,
      "Zona de juego": nombre,
      deporte: solicitud.deporte.nombre,
      fecha: solicitud.fecha,
    };
  });
};

export const solicitudesTablaCoordinacion = ({ data }) => {
  return data.map((solicitud) => {
    let nombre = "Pendiente";
    if (solicitud.ZonaDejuego) {
      nombre = solicitud.ZonaDejuego.nombre;
    }

    return {
      ID: solicitud.id,
      solicitante: solicitud.equipo_local.lider.nombre,
      "Zona de juego": nombre,
      maestro: solicitud.usuarioMaestro.nombre,
      fecha: solicitud.fecha,
      deporte: solicitud.deporte.nombre,
    };
  });
};

export const zonaJuegosSelect = ({ data }) => {
  return data.map((zonaDeJuego) => ({
    value: zonaDeJuego.id,
    label: zonaDeJuego.nombre,
  }));
};

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

export const mappedDataSolicitud = ({ form }) => {
  const { identificadores } = form;
  let result = {};

  identificadores.forEach((names) => {
    const { name } = names;
    const { values } = form[name];

    if (name === "Deportes") {
      const { id_deporte } = values;
      result["id_deporte"] = id_deporte;
    }
    if (name === "EquipoLocal") {
      const { id_equipo_local } = values;
      result["id_equipo_local"] = id_equipo_local;
    }
    if (name === "Plantilla") {
      const { jugadores } = values;
      result["jugadores"] = jugadores;
    }
    if (name === "EquipoVisitante") {
      const { id_equipo_visitante } = values;
      result["id_equipo_visitante"] = id_equipo_visitante;
    }
    if (name === "EquipoVisitante") {
      const { id_equipo_visitante } = values;
      result["id_equipo_visitante"] = id_equipo_visitante;
    }
    if (name === "InformacionGeneral") {
      const { descripcion } = values;
      result["descripcion"] = descripcion;

      const { fecha } = values;
      result["fecha"] = new Date(fecha);

      const { maestro_intermediario } = values;
      result["maestro_intermediario"] = maestro_intermediario;
    }
  });

  return { datos: result };
};
