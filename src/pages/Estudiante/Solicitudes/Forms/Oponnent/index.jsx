import { useFetch } from "src/hooks/useFetch";
import { useState } from "react";

import { equiposRivalesUsuario } from "src/api";

import EstudianteFormLayout from "src/components/estudiante/form";
import EquiposContainer from "../../Components/Equipos";

const OponnentForm = () => {
  const { equiposRivales, isLoading } = useFetch(
    "equiposRivales",
    equiposRivalesUsuario
  );
  const [selectedEquipo, setSelectedEquipo] = useState(null);
  if (isLoading) return <p>Cargando . . .</p>;

  const handleClick = (value) => {
    setSelectedEquipo(value === selectedEquipo ? null : value);
  };
  return (
    <EstudianteFormLayout
      title={"Seleciona a tu rival"}
      handleClickCancelar={() => {}}
      handleClickContinuar={() => {}}
    >
      <EquiposContainer
        handleClickItem={handleClick}
        setSelectedEquipo={setSelectedEquipo}
        selectedEquipo={selectedEquipo}
        equipos={equiposRivales}
      />
    </EstudianteFormLayout>
  );
};

export default OponnentForm;
