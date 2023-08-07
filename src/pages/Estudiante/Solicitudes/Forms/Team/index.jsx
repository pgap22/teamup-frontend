import { useFetch } from "src/hooks/useFetch";
import { useState } from "react";

import { equiposCreados } from "src/api";

import EstudianteFormLayout from "src/components/estudiante/form";
import EquiposContainer from "../../Components/Equipos";

const TeamForm = () => {
  const { equipos, isLoading } = useFetch("equipos", equiposCreados);
  const [selectedEquipo, setSelectedEquipo] = useState(null);
  if (isLoading) return <p>Cargando . . .</p>;

  const handleClick = (value) => {
    setSelectedEquipo(value === selectedEquipo ? null : value);
  };
  return (
    <EstudianteFormLayout
      title={"Seleciona tu equipo"}
      handleClickCancelar={() => {}}
      handleClickContinuar={() => {}}
    >
      <EquiposContainer
        handleClickItem={handleClick}
        setSelectedEquipo={setSelectedEquipo}
        selectedEquipo={selectedEquipo}
        equipos={equipos}
      />
    </EstudianteFormLayout>
  );
};

export default TeamForm;
