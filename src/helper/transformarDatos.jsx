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
  return data.map((solicitud) => ({
    ID: solicitud.id,
    solicitante: solicitud.equipo_local.lider.nombre,
    "Zona de juego": solicitud.ZonaDejuego.nombre,
    deporte: solicitud.deporte.nombre,
    fecha: solicitud.fecha,
  }));
};

export const solicitudesTablaCoordinacion = ({ data }) => {
  return data.map((solicitud) => ({
    ID: solicitud.id,
    solicitante: solicitud.equipo_local.lider.nombre,
    "Zona de juego": solicitud.ZonaDejuego.nombre,
    maestro: solicitud.usuarioMaestro.nombre,
    fecha: solicitud.fecha,
    deporte: solicitud.deporte.nombre,
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

export const mappedDataSolicitud = ({ data }) => {
  const { identificadores } = data
  let result = {}

  identificadores.forEach(form => {
    const { name } = form
    const { values } = data[name]

    if (name === "Deportes") {
      delete values.deporte
    }
    if (name === "EquipoLocal") {
      delete values.previous_id_equipo
    }
    if (name === "Plantilla") {
      delete values.id_equipo_actual
    }
    result[name] = {
      ...values
    }

  });

  return { data: result }

}

// {
//   "currentFormIndex": 4,
//     "previousIndex": 4,
//       "Deportes": {
//     "valid": true,
//       "values": {
//       "id_deporte": 2,
//         "deporte": {
//         "0": {
//           "id": 2,
//             "nombre": "Ajedrez",
//               "descripcion": "sexo",
//                 "limiteJugadores": 1,
//                   "limiteJugadoresCambio": 0,
//                     "id_tipoDeporte": 2,
//                       "tipoDeporte": {
//             "id": 2,
//               "nombre": "No Regulado",
//                 "descripcion": "No hay personas que supervisen los partidos de estos deportes y las solicitudes no pasan por coordinacion ni por los maestros, pero los usuarios pueden tener un maestro si lo desean",
//                   "skipMaestro": false,
//                     "skipCoordinacion": false,
//                       "skipAsistencia": false,
//                         "opcionalMaestro": true
//           }
//         }
//       }
//     }
//   },
//   "EquipoLocal": {
//     "valid": true,
//       "values": {
//       "id_equipo_local": 1,
//         "previous_id_equipo": null
//     }
//   },
//   "Plantilla": {
//     "valid": true,
//       "values": {
//       "jugadores": [
//         {
//           "id": 2,
//           "nombre": "FJ HM",
//           "rango": "lider",
//           "estado": "titular"
//         },
//         {
//           "id": 3,
//           "nombre": "aaaa aaaa",
//           "rango": "miembro",
//           "estado": null
//         }
//       ],
//         "id_equipo_actual": 1
//     }
//   },
//   "EquipoVisitante": {
//     "valid": true,
//       "values": {
//       "id_equipo_visitante": 3
//     }
//   },
//   "InformacionGeneral": {
//     "valid": true,
//       "values": {
//       "descripcion": "Sexo hitler",
//         "hora": "2023-08-11T16:48:03.521Z",
//           "fecha": "2023-08-11T16:48:03.521Z",
//             "maestro_intermediario": false
//     }
//   },
//   "identificadores": [
//     {
//       "name": "Deportes"
//     },
//     {
//       "name": "EquipoLocal"
//     },
//     {
//       "name": "Plantilla"
//     },
//     {
//       "name": "EquipoVisitante"
//     },
//     {
//       "name": "InformacionGeneral"
//     }
//   ],
//     "lastIndex": 4
// }