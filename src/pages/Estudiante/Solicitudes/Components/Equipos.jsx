import EquipoItem from "./TeamItem";

const EquiposContainer = ({
  equipos,
  selectedEquipo,
  setSelectedEquipo,
  handleClickItem,
}) => {
  return (
    <div className="grid items-center w-full grid-cols-1 gap-5 sm:px-16 md:grid-cols-2 lg:grid-cols-3 ">
      {equipos.length !== 0
        ? equipos?.map((equipo) => {
            return (
              <EquipoItem
                handleClickItem={handleClickItem}
                setSelectedEquipo={setSelectedEquipo}
                isSelected={selectedEquipo === equipo.id}
                equipo={equipo}
                key={equipo.id}
              />
            );
          })
        : "No hay equipos"}
    </div>
  );
};

export default EquiposContainer;
