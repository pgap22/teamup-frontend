import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LogoBlack from "../../../components/Logo/LogoBlack";
import Input from "../../../components/form/Input";
import Button from "../../../components/form/Button";
import { LuEye } from "react-icons/lu";
import { useMediaQuery } from "@uidotdev/usehooks";
import Select from "../../../components/form/Select";
import clsx from "clsx";

const Form = () => {
  
  const { t } = useTranslation(["signup"]);

  const noMobile = useMediaQuery("(min-width: 768px)");

  const nivelesAcademicos = [
    {
      value: 'bach',
      label: 'Bachillerato'
    },
    {
      value: 'ter_c',
      label: 'Tercer Ciclo'
    }
  ]

  return (
    <main className={clsx(
      "md:self-center md:m-0",
      "flex bg-white m-4 rounded-md flex-col items-center p-6 gap-4"
    )}>
      <div className="flex flex-col items-center md:items-start gap-6">
        <Link to={"/"}>
          <LogoBlack width={noMobile ? 260 : 170} />
        </Link>

        <div className="space-y-2">
          <h1 className="font-semibold text-3xl text-center md:text-start">
            {t("titulo")}
          </h1>
          <p className="text-[#676767] font-semibold text-center md:text-start">
            {t("subtitulo")}
          </p>
        </div>

        <form className="w-full max-w-md flex flex-col gap-6">
          <Input label={"Nombre"} placeholder={"Ingrese su nombre"} />
          <Input label={"Apellido"} placeholder={"Ingrese su apellido"} />
          <Select 
            label={"Nivel Academico"} 
            placeholder={"Nivel academico"}
            opciones={nivelesAcademicos}
            />
          <Input
            type="email"
            label={"Correo Institucional"}
            placeholder={"Ingrese su correo institucional"}
          />
          <Input
            type="password"
            Icon={(props) => <LuEye {...props} />}
            label={"Contraseña"}
            placeholder={"Ingrese su contraseña"}
          />

          <div className="text-center flex flex-col gap-3">
            <Button color={"azul"}>Registrarse</Button>
            <Link to={"/login"} className="text-primary">
              ¿ Ya tienes cuenta ?
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Form;
