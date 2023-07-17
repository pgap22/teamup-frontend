import { useModal } from "../../../store/useModal";

import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import Button from "../../form/Button";
import TemplateModal from "../../Modales/ModalTemplate";

const TablaAcciones = ({ dato, editarUrl, borrarElemento = () => {} }) => {
  const { modalState, toggleModal } = useModal();

  const mostrarModal = () => {
    toggleModal(true);
  };
  const esconderModal = () => {
    toggleModal(false);
  };

  return (
    <div className="flex gap-4">
      <Link to={editarUrl + "/" + dato.ID}>
        <MdEdit size={24} />
      </Link>

      <MdDelete className="cursor-pointer" onClick={mostrarModal} size={24} />

      <TemplateModal
        desktopTitle="Deseas eliminar este item?"
        modalState={modalState}
        toggleModal={toggleModal}
      >
        <div className="flex flex-col gap-4 p-4">
          <h2>Seguro que quieres eliminar este item ?</h2>

          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => {
                borrarElemento(dato.ID);
                esconderModal();
              }}
              color={"rojo"}
            >
              Eliminar
            </Button>
            <Button onClick={esconderModal} color={"blanco"}>
              Cancelar
            </Button>
          </div>
        </div>
      </TemplateModal>
    </div>
  );
};

export default TablaAcciones;
