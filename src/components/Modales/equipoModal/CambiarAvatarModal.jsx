import { useEffect, useRef, useState } from "react";
import { useModal } from "../../../store/useModal";
import { useSingleImage } from "src/store/useSingleImage";
import { useNavigate } from "react-router-dom";

import AvatarEditor from "react-avatar-editor";
import { motion } from "framer-motion";

import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";

import Range from "src/components/form/Range/Range";
import Button from "src/components/form/Button";

import SingleImageDrop from "src/components/estudiante/SingleImageDrop/SingleDropImage";
import TemplateModal from "../ModalTemplate";

import { convertArrayToFileList } from "src/helper";

import { actualizarAvatar } from "src/api";
import Skeleton from "src/components/ui/Skeleton";
import Loader from "src/components/ui/Loader";

const ContentModal = ({ id, toggleModal, name }) => {
  const { data, setImagen, setData } = useSingleImage();

  const [imageURL, setImageURL] = useState(null);
  const [cropedImage, setCropedImage] = useState(null);
  const [zoom, setZoom] = useState(2.5);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const zoomMinmax = [1, 5];

  const resetForm = () => {
    setImageURL(null);
    setImagen([]);
    setData([]);
  };

  const succesSubmitAvatar = async (imageBlob) => {
    try {
      setLoading(true)
      const formData = new FormData();
      formData.append(
        "avatar",
        imageBlob,
        `avatar_${name.split(" ").join("")}.png`
      );

      const avatar = convertArrayToFileList(formData.getAll("avatar"));
      const mappeData = { avatar: { ...avatar }[0], id: id };

      const status = await actualizarAvatar(mappeData);

      if (status) {
        resetForm();
        toggleModal(false);
        navigate("/estudiante/exito", {
          state: {
            titulo: "Actualizacion de avatar",
            subtitulo: "Cambiaste el avatar correctamente",
            descripcion: "Has cambiado el avatar de tu equipo correctamente",
            url: `/estudiante/equipos/datos/${id}`,
            linkText: "Volver a tu equipo",
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data.length !== 0) {
      const imageUrl = URL.createObjectURL(data[0]);
      setImageURL(imageUrl);
    }
  }, [data]);

  useEffect(() => {
    if (zoom >= zoomMinmax[1]) {
      setZoom(5);
      return;
    }

    if (zoom <= zoomMinmax[0]) {
      setZoom(1);
      return;
    }
  }, [zoom]);

  return (
    <div className="flex flex-col gap-5 p-4">
      <h2 className="font-bold">
        {!imageURL ? "Sube el avatar que vas usar" : "Ajusta bien tu imagen"}
      </h2>

      {!imageURL && <ImageDrop />}

      {imageURL && (
        <AjustarImagen
          minmax={zoomMinmax}
          step={0.1}
          setValue={setZoom}
          value={zoom}
          image={imageURL}
          handleClickReset={resetForm}
          setCropedImage={setCropedImage}
          cropedImage={cropedImage}
          isLoading={isLoading}
          succesSubmitAvatar={succesSubmitAvatar}
        />
      )}
    </div>
  );
};

const ImageDrop = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <SingleImageDrop label={"Avatar"} />
    </motion.div>
  );
};

const AjustarImagen = ({
  image,
  minmax,
  step,
  setValue,
  value,
  handleClickReset,
  setCropedImage,
  succesSubmitAvatar,
  isLoading
}) => {
  const editor = useRef();
  const handleClickGuardar = () => {
    if (editor) {
      const canvas = editor.current.getImage();
      canvas.toBlob((blob) => {
        succesSubmitAvatar(blob);
        // setCropedImage(URL.createObjectURL(blob));
      });
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col items-center justify-center gap-3"
    >
      <AvatarEditor
        ref={editor}
        image={image}
        width={200}
        height={200}
        scale={value}
        borderRadius={100}
      />
      <Zoom minmax={minmax} step={step} setValue={setValue} value={value} />
      <div className="grid grid-cols-2 gap-4">
        <Button disabled={isLoading} onClick={handleClickGuardar} color={"verde"}>
          <Skeleton loading={isLoading} fallback={<Loader />}>
              Guardar
          </Skeleton>
        </Button>
        <Button onClick={handleClickReset} color={"blanco"}>
          Cancelar
        </Button>
      </div>
    </motion.div>
  );
};

const Zoom = ({ minmax, step, setValue, value }) => {
  const handleClickPlus = () => {
    if (value + 0.25 >= minmax[1]) {
      setValue(5);
      return;
    }
    setValue(value + 0.25);
  };
  const handleClickMinus = () => {
    if (value - 0.25 <= minmax[0]) {
      setValue(1);
      return;
    }
    setValue(value + 0.25);
    setValue(value - 0.25);
  };
  return (
    <div className="flex items-center justify-center w-full gap-3">
      <AiOutlineMinus
        onClick={handleClickMinus}
        className="cursor-pointer"
        size={25}
      />
      <Range
        color="#000"
        minmax={minmax}
        step={step}
        setValue={setValue}
        value={value}
      />
      <AiOutlinePlus
        onClick={handleClickPlus}
        className="cursor-pointer"
        size={25}
      />
    </div>
  );
};

const CambiarAvatarModal = ({ id, name }) => {
  const { toggleModal } = useModal();

  return (
    <TemplateModal
      identificator={"CambiarAvatar"}
      desktopTitle={"Cambiar avatar del equipo"}
    >
      <ContentModal id={id} toggleModal={toggleModal} name={name} />
    </TemplateModal>
  );
};

export default CambiarAvatarModal;
