const TablaRowHeader = ({ filas = [] }) => {
    return (
      <div
        style={{
          gridTemplateColumns: `repeat(${filas.length-1}, 1fr) 0.3fr`,
        }}
        className="grid items-center w-full px-4 py-2 font-bold text-gray-600 border-t border-b"
      >
        {filas.map((fila) => (
          <h2
            style={{ minWidth: `${fila.length}ch` }}
            key={fila + "-row"}
            className="capitalize"
          >
            {fila}
          </h2>
        ))}
      </div>
    );
  };

export default TablaRowHeader