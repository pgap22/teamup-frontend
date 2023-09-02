import { createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const getCurrentLanguajes = () => {
  const languaje = window.localStorage.getItem("teamup-languaje");
  return languaje ? languaje : "es";
};

const languajes = {
  en: { value: "en", name: "Ingles" },
  es: { value: "es", name: "Español" },
};

const TranslationContext = createContext();

const TranaslationProvider = ({ children }) => {
  const [languaje, setLanguaje] = useState(() => {
    return getCurrentLanguajes();
  });
  const [currentPage, setCurrenPage] = useState();
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLanguaje = getCurrentLanguajes();
    i18n.changeLanguage(currentLanguaje);
    setLanguaje(currentLanguaje);
  }, []);

  const handleTranslation = (value) => {
    i18n.changeLanguage(value);
    setLanguaje(value);
    window.localStorage.setItem("teamup-languaje", value);
  };

  return (
    <TranslationContext.Provider
      value={{
        handleTranslation,
        languaje,
        languajes,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export { TranslationContext, TranaslationProvider };
