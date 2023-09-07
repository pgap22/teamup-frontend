import clsx from "clsx";

const TablaDatoFila = ({ datos, filas }) => {
  return (
    <tr className={clsx("last:rounded-b-md", "even:bg-gray-200", "w-full")}>
      {datos.map((fila, i) => (
        <td
          title={fila}
          className="px-4 py-5 text-lg truncate"
          style={{ maxWidth: `${filas[i].length + 5}ch` }}
          key={i + "-dato"}
        >
          {fila}
        </td>
      ))}
    </tr>
  );
};

export default TablaDatoFila;
