import { useEffect } from "react";
import { useMultiStepForm } from "./useMultiStepForm";

import { motion, AnimatePresence } from "framer-motion";

import ProgresiverIndicator from "./Components/ProgresiveIndicator";
import EstudianteFormLayout from "../form";

const object_default = {
  valid: false,
  values: {},
};

const formatedFormData = ({ FormsData }) => {
  const result = {};
  const formIdentificator = [];

  FormsData?.forEach((formData, i) => {
    const { name, fields } = formData;
    const fieldValues = {};

    formIdentificator.push({ name });

    fields.forEach((field) => {
      fieldValues[field] = "";
    });

    result[name] = {
      ...object_default,
      values: { ...fieldValues },
    };
  });

  return { ...result, identificadores: [...formIdentificator] };
};

const MultiStepForm = ({ FormsData = [] }) => {
  const { form, setForm } = useMultiStepForm();

  useEffect(() => {
    const data = formatedFormData({ FormsData });
    const new_form = { ...form, ...data };
    setForm(new_form);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      {form.identificadores && <Forms FormComponents={FormsData} />}
      {form.identificadores && <ProgresiverIndicator FormsData={FormsData} />}
    </div>
  );
};

const Forms = ({ FormComponents }) => {
  const {
    form: { currentFormIndex, previousIndex },
  } = useMultiStepForm();

  const { name, title, Componet } = FormComponents[currentFormIndex];

  const initialAnimation = { opacity: 0 };
  const animateAnimation = {
    opacity: 1,
    transition: { delay: previousIndex === null ? 0 : 0.5 },
  };
  const exitAnimation = { opacity: 0 };
  const transitionProps = { duration: 0.5 };

  return (
    <AnimatePresence>
      <motion.div
        key={currentFormIndex}
        initial={initialAnimation}
        animate={animateAnimation}
        exit={exitAnimation}
        transition={transitionProps}
      >
        <EstudianteFormLayout title={title}>
          <Componet formName={name} />
        </EstudianteFormLayout>
      </motion.div>
    </AnimatePresence>
  );
};

export default MultiStepForm;
