
import { MdEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

import Button from "../../form/Button";
import { useModal } from "src/hooks/useModal";

const TablaAcciones = ({
  dato,
  editarUrl,
  borrarElemento = () => { },
  eliminar,
  editar,
}) => {
  const [ Modal, modalState ] = useModal();

  const mostrarModal = () => {
    modalState.toggleModal(true);
  };
  const esconderModal = () => {
    modalState.toggleModal(false);
  };

  return (
    <div className="flex gap-4">
      {editar && (
        <Link to={editarUrl + "/" + dato.ID}>
          <MdEdit size={24} />
        </Link>
      )}

      {
        eliminar && (
          <MdDelete className="cursor-pointer" onClick={mostrarModal} size={24} />
        )
      }


      <Modal
        desktopTitle="Deseas eliminar este item?"
        {...modalState}
      >
        <div className="p-4 flex flex-col gap-4">
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
      </Modal>
    </div>
  );
};

export default TablaAcciones;
