import { createContext, useState } from "react";

const SelectValueContext = createContext();

const SelectValueProvider = ({children}) => {
  const [value, setValue] = useState({
    label: '',
    value: undefined
  });
  const [menuOpciones, setMenuOpciones] = useState(false);


  return (
    <SelectValueContext.Provider value={{
        value,
        setValue,
        menuOpciones,
        setMenuOpciones,
    }}>
      {children}
    </SelectValueContext.Provider>
  );
};

export {SelectValueContext, SelectValueProvider}