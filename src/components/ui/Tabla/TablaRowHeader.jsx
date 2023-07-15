const TablaRowHeader = ({ filas = [] }) => {
  return (
    <tr

      className="w-full font-bold text-gray-600 border-t border-b"
    >
      {filas.map((fila) => (
        <td
          key={fila + "-row"}
          className="capitalize px-4 py-2 "
        >
          {fila}
        </td>
      ))}
    </tr>
  );
};

export default TablaRowHeader