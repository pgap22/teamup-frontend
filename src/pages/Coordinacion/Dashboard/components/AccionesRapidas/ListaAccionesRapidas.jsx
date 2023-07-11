import AccionRapidoBoton from "./AccionRapidoBoton";

const ListaAccionesRapidas = ({ acciones }) => {
  return (
    <div className="overflow-auto max-w-full">
      <div className="flex gap-4">
        {acciones.map((accion) => (
          <AccionRapidoBoton key={accion.nombre+"-accion"} url={accion.url}>{accion.nombre}</AccionRapidoBoton>
        ))}
      </div>
    </div>
  );
};

export default ListaAccionesRapidas;
