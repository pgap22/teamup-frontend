import { useContext } from "react";
import { MultiStepFormContext } from "./FormContext";

const useMultiStepForm = () => {
  return useContext(MultiStepFormContext);
};
export { useMultiStepForm };
