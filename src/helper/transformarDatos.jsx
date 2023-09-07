import Imagenes from "src/pages/Coordinacion/ZonaDeJuego/components/Imagenes";

export const deportesTransformar = (data, t = () => '') => {
  const datos = data?.data.map((deporte) => ({
    [t('sportsKeys.ID')]: deporte.id,
    [t('sportsKeys.Nombre')]: deporte.nombre,
    [t('sportsKeys.Descripcion')]: deporte.descripcion,
    [t('sportsKeys.limiteJugadores')]: deporte.limiteJugadores,
    [t('sportsKeys.limiteJugadoresCambio')]: deporte.limiteJugadoresCambio,
    [t('sportsKeys.tipoDeporte')]: deporte.tipoDeporte.nombre,
  }));
  return datos;
};

export const docentesTransformarTabla = ({ data }, t = () => '') => {
  return data.map((docente) => ({
    [t('keyMaestro.ID')]: docente.id,
    [t('keyMaestro.Nombre')]: docente.nombre,
    [t('keyMaestro.Email')]: docente.email,
    [t('keyMaestro.NivelAcademico')]: docente.nivelAcademico.nivel,
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

export const zonaJuegoTabla = function ({ data }, t = () => '') {
  return data.map((zonadejuego) => ({
    [t('tableKeys.ID')]: zonadejuego.id,
    [t('tableKeys.nombre')]: zonadejuego.nombre,
    [t('tableKeys.deporte')]: zonadejuego.deporte.nombre,
    [t('tableKeys.imagenes')]: <Imagenes imagenes={zonadejuego.imagenes} />,
  }));
};


export const miembrosEquipo = ({ data }) => {
  const { usuarios } = data;
  const { lider } = data;

  if (!lider) return false;

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
    token: data.invitaciones_token
  };
  return { ...formatedData, jugadores: [...sortedUsuarios] };

};

export const solicitudesTabla = ({data}, t = ()=> '') => {
  return data.map((solicitud) => {
    let nombre = t('solicitud.Pending');
    if (solicitud.ZonaDejuego) {
      nombre = solicitud.ZonaDejuego.nombre;
    }
    alert(JSON.stringify(new Date(solicitud.fecha))) 
    return {
      [t('solicitud.ID')]: solicitud.id,
      [t('solicitud.Requester')]: solicitud.equipo_local.lider.nombre,
      [t('solicitud.Playground')]: nombre,
      [t('solicitud.Sport')]: solicitud.deporte.nombre,
      [t('solicitud.Date')]: new Date(solicitud.fecha).toLocaleDateString(localStorage.getItem("teamup-languaje"),{weekday: 'long', hour: '2-digit', hour12: true, month: 'long'}),
    };
  });
};

export const solicitudesTablaCoordinacion = ({ data }, t = () => '') => {

  return data.map((solicitud) => {
    let nombre = "Pendiente";
    if (solicitud.ZonaDejuego) {
      nombre = solicitud.ZonaDejuego.nombre;
    }

    return {
      [t('solicitudesTable.ID')]: solicitud.id,
      [t('solicitudesTable.solicitante')]: solicitud.equipo_local.lider.nombre,
      [t('solicitudesTable.Zonadejuego')]: nombre,
      [t('solicitudesTable.maestro')]: solicitud.usuarioMaestro.nombre,
      [t('solicitudesTable.fecha')]: solicitud.fecha,
      [t('solicitudesTable.deporte')]: solicitud.deporte.nombre,
    };
  });
};

export const zonaJuegosSelect = ({ data }) => {
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




      let hora = values.hora.$d
      let dia = values.fecha.$d

      dia.setHours(hora.getHours(), hora.getMinutes());

      result["fecha"] = new Date(dia.toISOString());

      const { maestro_intermediario } = values;
      result["maestro_intermediario"] = maestro_intermediario;
    }
  });

  return { datos: result };
};
