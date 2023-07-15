import { useState } from "react";
import { useForm } from "react-hook-form";

const useFormulario = (apiFunction, defaultValues={}) => {
    const { register, handleSubmit, setValue, formState } = useForm({});
    const [mensajeError, setMensajeError] = useState("");
    const [registroExitoso, setRegistroExitoso] = useState(false);
    const [data, setData] = useState()
  
    const realizarAccion = async (data) => {
      try {
        const d = await apiFunction(data);
        setData(d);
        setRegistroExitoso(true);
      } catch (error) {
        setMensajeError(error);
      }
    };
  

  
    return {
      register,
      handleSubmit: handleSubmit(realizarAccion),
      setValue,
      mensajeError,
      registroExitoso,
      formState,
      data
    };
  };
  
  export { useFormulario };
  
  
  
  
  
  
  