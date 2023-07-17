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


export const docentesTransformarTabla = ({data}) => {
  return data.map((docente) => ({
    ID: docente.id,
    Nombre: docente.nombre,
    Email: docente.email,
    "Nivel Academico": docente.nivelAcademico.nivel,
  }));
};


export const tipoDeporteTransformar = ({data}) => {
  return data.map((tipoDeporte) => ({
    value: tipoDeporte.id,
    label: tipoDeporte.nombre,
  }));
};

export const tipoNivelesAcademicos = ({data}) => {
  return data.map((nivelAcademico) => ({
    value: nivelAcademico.id,
    label: nivelAcademico.nivel,
  }));
};