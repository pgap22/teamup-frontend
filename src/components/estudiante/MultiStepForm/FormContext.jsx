import { createContext, useState } from "react";

const FORM_STATE = {
  currentFormIndex: 0,
  previousIndex: null,
  id_partido: null,
  envioCompletado: false,
};

export const MultiStepFormContext = createContext();

export const MultiStepFormProvider = ({ children }) => {
  const [form, setForm] = useState(FORM_STATE);
  const [error, setError] = useState(FORM_STATE);
  return (
    <MultiStepFormContext.Provider
      value={{
        form,
        setForm,
        error,
        setError,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};
