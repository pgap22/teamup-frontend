import { useContext } from "react";
import { TranslationContext } from "src/context/Translate";
const useTranlate = () => {
  return useContext(TranslationContext);
};
export { useTranlate };
