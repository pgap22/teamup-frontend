import { Suspense, createContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const getCurrentLanguajes = () => {
  const languaje = window.localStorage.getItem("teamup-languaje");
  return languaje ? languaje : "es";
};

function getCurrentPage(pathname = "") {
  if (pathname === "/") return "paginaPrincipal";

  const partes = pathname.split("/");
  const nombrePagina = partes[1];
  return nombrePagina;
}

const TranslationContext = createContext();

const TranaslationProvider = ({ children }) => {
  const location = useLocation();
  const [languaje, setLanguaje] = useState(() => {
    return getCurrentLanguajes();
  });
  const [currentPage, setCurrenPage] = useState(() => {
    return getCurrentPage(location.pathname);
  });

  const { t, i18n } = useTranslation([currentPage, "default", "errors"]);

  const languajes = {
    en: { value: "en", name: "ingles" },
    es: { value: "es", name: "español" },
  };

  const cambiarPaginaDiccionario = ()=>{
    setCurrenPage(getCurrentPage(location.pathname));
  }

  const handleTranslation = (value) => {
    i18n.changeLanguage(value);
    setLanguaje(value);
    window.localStorage.setItem("teamup-languaje", value);
  };

  return (
    <TranslationContext.Provider
      value={{
        t,
        handleTranslation,
        cambiarPaginaDiccionario,
        languaje,
        languajes,
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
};

export { TranslationContext, TranaslationProvider };
