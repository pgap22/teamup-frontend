import { useMultiStepForm } from "./useMultiStepForm";

export const useConstantes = () => {
  const { form } = useMultiStepForm();
  const currentIndex = form.currentFormIndex;
  const currentFormName = form.identificadores[currentIndex].name;
  const currentFormState = form[currentFormName];
  const currentFormValid = currentFormState.valid;

  return {
    form,
    currentIndex,
    currentFormName,
    currentFormState,
    currentFormValid,
  };
};
