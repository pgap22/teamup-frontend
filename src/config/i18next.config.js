import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";
i18n
  .use(detector)
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    initImmediate: false,
    fallbackLng: "en",
    // debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
    },
  });
