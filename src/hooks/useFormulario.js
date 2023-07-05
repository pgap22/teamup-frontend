import { useState } from "react";
import { useForm } from "react-hook-form";

const useFormulario = (apiFunction) => {
    const { register, handleSubmit, setValue } = useForm();
    const [mostrarPassword, setMostrarPassword] = useState(false);
    const [mensajeError, setMensajeError] = useState("");
    const [registroExitoso, setRegistroExitoso] = useState(false);
  
    const realizarAccion = async (data) => {
      try {
        await apiFunction(data);
        setRegistroExitoso(true);
      } catch (error) {
        setMensajeError(error);
      }
    };
  
    const mostrarOcultarPassword = () => {
      setMostrarPassword(!mostrarPassword);
    };
  
    return {
      register,
      handleSubmit: handleSubmit(realizarAccion),
      setValue,
      mostrarPassword,
      mostrarOcultarPassword,
      mensajeError,
      registroExitoso,
    };
  };
  
  export { useFormulario };
  
  
  
  
  
  
  