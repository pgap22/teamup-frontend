import clsx from "clsx";

const MainContent = ({ children, titulo, center=false }) => {
  return (
    <section>
      <header className={clsx(
        "bg-white",
        center && "flex justify-center"
      )}>
        <div className={
          clsx(
            "p-6",
            center && "max-w-[calc(80rem--2rem)] w-full"
          )
        }>
          <h1 className="font-bold text-3xl ">{titulo}</h1>
        </div>
      </header>
      <main className={clsx(
        "p-6 mb-14 md:mb-0",
        center && "md:flex md:justify-center",
      )}>
        <div className={clsx(center && "w-full max-w-7xl")}>{children}</div>
      </main>
    </section>
  );
};
export default MainContent;
