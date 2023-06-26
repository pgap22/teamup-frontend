const MainContent = ({ children, titulo }) => {
  return (
    <section>
      <header className="bg-white ">
        <div className="p-6">
          <h1 className="font-bold text-3xl ">{titulo}</h1>
        </div>
      </header>
      <main className="p-6 mb-14 md:mb-0">{children}</main>
    </section>
  );
};
export default MainContent;
