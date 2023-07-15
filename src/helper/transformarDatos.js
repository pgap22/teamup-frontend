const deportesTransformar = (data) => {
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

const tipoDeporteTransformar = (data) => {
  return data?.data.map((tipoDeporte) => ({
    value: tipoDeporte.id,
    label: tipoDeporte.nombre,
  }));
};

export { deportesTransformar,tipoDeporteTransformar };
