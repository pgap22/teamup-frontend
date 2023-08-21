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
  const { form, setForm, setError, error } = useMultiStepForm();

  const succesSubmit = async ({ form }) => {
    try {
      setError(false);
      const { datos } = mappedFunction({ form });
      const key_id = datos[keyName];
      const { data } = await sender(datos, key_id);

      const formCpy = { ...form };
      formCpy.id_partido = data.id;
      formCpy.envioCompletado = true;

      setForm({ ...formCpy });
    } catch (error) {
      setError(error.response.data.error)
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
      {error && typeof error == 'string' && <AlertaImprovisada message={error}/>}
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

const AlertaImprovisada = ({message}) => {
  return (
    <div role="alert" class="rounded border-s-4 border-red-500 bg-red-50 p-4">
      <div class="flex items-center gap-2 text-red-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
            clip-rule="evenodd"
          />
        </svg>

        <strong class="block font-medium"> Ha ocurrido un error </strong>
      </div>

      <p class="mt-2 text-sm text-red-700">
        {message}
      </p>
    </div>
  )
}

export default MultiStepForm;
