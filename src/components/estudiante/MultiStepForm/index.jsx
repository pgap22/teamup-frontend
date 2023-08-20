import { useEffect } from "react";
import { useMultiStepForm } from "./useMultiStepForm";

import { motion, AnimatePresence } from "framer-motion";

import ProgresiverIndicator from "./Components/ProgresiveIndicator";
import EstudianteFormLayout from "../form";

import { crearPartido } from "src/api/partidos";
const object_default = {
  valid: false,
  values: {},
};

const formatedFormData = ({ FormsData }) => {
  const result = {};
  const formIdentificator = [];

  FormsData?.forEach((formData) => {
    const { name, fields } = formData;
    const fieldValues = {};

    formIdentificator.push({ name });

    fields.forEach((field) => {
      fieldValues[field] = null;
    });

    result[name] = {
      ...object_default,
      values: { ...fieldValues },
    };
  });

  return { ...result, identificadores: [...formIdentificator] };
};

const MultiStepForm = ({
  FormsData = [],
  sender,
  Exito,
  mappedFunction,
  keyName,
}) => {
  const { form, setForm, setError } = useMultiStepForm();

  const succesSubmit = async ({ form }) => {
    try {
      const { datos } = mappedFunction({ form });
      const key_id = datos[keyName];
      const { data } = await sender(datos, key_id);

      const formCpy = { ...form };
      formCpy.id_partido = data.id;
      formCpy.envioCompletado = true;

      setForm({ ...formCpy });
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  useEffect(() => {
    const lastIndex = FormsData.length;
    const data = formatedFormData({ FormsData });
    const new_form = {
      ...form,
      ...data,
      succesSubmit: succesSubmit,
      lastIndex: lastIndex - 1,
    };
    setForm(new_form);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center w-full gap-5">
      {form.identificadores && !form.envioCompletado && (
        <Forms FormComponents={FormsData} />
      )}
      {form.identificadores && !form.envioCompletado && (
        <ProgresiverIndicator FormsData={FormsData} />
      )}
      {form.envioCompletado && <Exito idPartido={form.id_partido} />}
    </div>
  );
};

const Forms = ({ FormComponents }) => {
  const {
    form: { currentFormIndex, previousIndex },
  } = useMultiStepForm();

  const { name, title, Componet, props } = FormComponents[currentFormIndex];

  const initialAnimation = { opacity: 0 };
  const animateAnimation = { opacity: 1 };
  const exitAnimation = { opacity: 0 };
  const transitionProps = { duration: 0.5 };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentFormIndex}
        initial={initialAnimation}
        animate={animateAnimation}
        exit={exitAnimation}
        transition={transitionProps}
        style={{ width: "100%" }}
      >
        <EstudianteFormLayout title={title}>
          <Componet {...props} formName={name} />
        </EstudianteFormLayout>
      </motion.div>
    </AnimatePresence>
  );
};

export default MultiStepForm;
