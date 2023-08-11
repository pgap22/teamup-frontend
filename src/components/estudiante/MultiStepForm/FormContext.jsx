import { createContext, useState } from "react";

const FORM_STATE = {
  currentFormIndex: 0,
  previousIndex: null,
};

export const MultiStepFormContext = createContext();

export const MultiStepFormProvider = ({ children }) => {
  const [form, setForm] = useState(FORM_STATE);

  return (
    <MultiStepFormContext.Provider
      value={{
        form,
        setForm,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
};
