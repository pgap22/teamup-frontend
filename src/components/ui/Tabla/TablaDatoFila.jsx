import clsx from "clsx";

const TablaDatoFila = ({ datos, filas }) => {
  return (
    <tr
      className={clsx(
        "last:rounded-b-md",
        "even:bg-gray-200",
        "w-full"
      )}
    >
      {datos.map((fila, i) => (
        <td className="text-lg whitespace-normal px-4 py-5" style={{ minWidth: `${filas[i].length}ch` }} key={i + "-dato"}>
          {fila}
        </td>
      ))}
    </tr>
  );
};

export default TablaDatoFila;
