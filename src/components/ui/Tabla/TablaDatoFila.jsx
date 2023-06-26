import clsx from "clsx";

const TablaDatoFila = ({ datos, filas }) => {
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${datos.length}, 1fr)`,
      }}
      className={clsx(
        "last:rounded-b-md",
        "even:bg-gray-200",
        "grid px-4 py-5 w-full"
      )}
    >
      {datos.map((fila, i) => (
        <div className="text-lg" style={{ minWidth: `${filas[i].length}ch` }} key={fila + "-dato"}>
          {fila}
        </div>
      ))}
    </div>
  );
};

export default TablaDatoFila;
