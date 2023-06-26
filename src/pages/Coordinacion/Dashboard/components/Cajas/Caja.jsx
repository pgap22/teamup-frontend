const Caja = ({ titulo, children }) => {
  return (
    <section className="bg-white p-4 rounded-lg">
      <h2 className="font-bold text-xl mb-4">{titulo}</h2>
      {children}
    </section>
  );
};

export default Caja;
