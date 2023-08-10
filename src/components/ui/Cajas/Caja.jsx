const Caja = ({ titulo, children, className }) => {
  return (
    <section className={"bg-white p-4 rounded-lg "+className}>
      <h2 className="font-bold text-xl mb-4">{titulo}</h2>
      {children}
    </section>
  );
};

export default Caja;
