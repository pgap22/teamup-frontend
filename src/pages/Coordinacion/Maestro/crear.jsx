import CoordinacionLayout from "src/components/layout/CoordinacionLayout"
import CoordinacionForm from "src/components/layout/CoordinacionForm"
import Input from "src/components/form/Input"
import { AiOutlineEyeInvisible } from "react-icons/ai"
import { useIconPassword } from "src/hooks/useIconPassword"
import Select from "src/components/form/Select"
import { crearCuentaMaestro, obtenerNivelesAcademicos } from "src/api"
import { useFetch } from "src/hooks/useFetch"
import { tipoNivelesAcademicos } from "src/helper/transformarDatos"
import Button from "src/components/form/Button"
import { useFormulario } from "src/hooks/useFormulario"
import Exito from "src/components/coordinacion/Exito"
import Skeleton from "src/components/ui/Skeleton"
import Loader from "src/components/ui/Loader"
import { useTranlate } from "src/hooks/useTranslation"

export default function Crear() {
    const {t} = useTranlate();
    const { register, setValue, handleSubmit, registroExitoso, isLoading } = useFormulario(crearCuentaMaestro);
    const { tipoNivelAcademico } = useFetch("tipoNivelAcademico", obtenerNivelesAcademicos, tipoNivelesAcademicos);
    const { mostrarPassword, mostrarOcultarPassword } = useIconPassword();
    const OjoPassword = function (props) {

        return <AiOutlineEyeInvisible {...props} onClick={mostrarOcultarPassword} className="cursor-pointer" />
    }


    if (registroExitoso) {
        return (
          <Exito
            titulo={t('maestroCreate.title')}
            subtitulo={t('maestroCreate.successMessage')}
            linkText={t('maestroCreate.returnToMaestros')}
            url="/coordinacion/maestros"
          />
        );
      }
      
      return (
        <CoordinacionLayout titulo={t('maestroCreateForm.layoutTitle')}>
          <CoordinacionForm
            handleSubmit={handleSubmit}
            imagenUrl="/Docente.jpg"
            titulo={t('maestroCreateForm.generalData')}
          >
            <Input
              register={register("nombre", { required: true })}
              label={t('maestroCreateForm.nameLabel')}
              placeholder={t('maestroCreateForm.namePlaceholder')}
            />
            <Input
              register={register("apellido", { required: true })}
              label={t('maestroCreateForm.lastNameLabel')}
              placeholder={t('maestroCreateForm.lastNamePlaceholder')}
            />
            <Select
              setValue={setValue}
              valueLabel={"id_nivelAcademico"}
              opciones={tipoNivelAcademico}
              label={t('maestroCreateForm.teacherLevelLabel')}
              placeholder={t('maestroCreateForm.teacherLevelPlaceholder')}
            />
            <Input
              register={register("email", { required: true })}
              label={t('maestroCreateForm.emailLabel')}
              type="email"
              placeholder={t('maestroCreateForm.emailPlaceholder')}
            />
            <Input
              register={register("password", { required: true })}
              Icon={OjoPassword}
              label={t('maestroCreateForm.passwordLabel')}
              type={mostrarPassword ? "text" : "password"}
              placeholder={t('maestroCreateForm.passwordPlaceholder')}
            />
            <Button disabled={isLoading}>
              <Skeleton loading={isLoading} fallback={<Loader />}>
                {t('maestroCreateForm.createAccountButton')}
              </Skeleton>
            </Button>
          </CoordinacionForm>
        </CoordinacionLayout>
      );
}


