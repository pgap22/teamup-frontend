import clsx from "clsx";

const TablaDatoFila = ({ datos, filas }) => {
  return (
    <tr className={clsx("last:rounded-b-md", "even:bg-gray-200", "w-full")}>
      {datos.map((fila, i) => (
        <td
          title={fila}
          className="px-4 py-5 text-lg truncate"
          style={{ maxWidth: `${i!=filas.length-1?filas[i].length + 5 : 'auto' }ch` }}
          key={i + "-dato"}
        >
          {fila}
        </td>
      ))}
    </tr>
  );
};

export default TablaDatoFila;
