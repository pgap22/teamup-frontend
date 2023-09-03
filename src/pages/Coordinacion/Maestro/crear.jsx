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

export default function Crear() {
    const { register, setValue, handleSubmit, registroExitoso, isLoading } = useFormulario(crearCuentaMaestro);
    const { tipoNivelAcademico } = useFetch("tipoNivelAcademico", obtenerNivelesAcademicos, tipoNivelesAcademicos);
    const { mostrarPassword, mostrarOcultarPassword } = useIconPassword();
    const OjoPassword = function (props) {

        return <AiOutlineEyeInvisible {...props} onClick={mostrarOcultarPassword} className="cursor-pointer" />
    }

    
    if (registroExitoso) return(
        <Exito
            titulo={"Perfil Creado"}
            subtitulo={"El perfil del maestro se ha creado exitosamente"}
            linkText={"Volver a maestros"}
            url={"/coordinacion/maestros"}
      />
    )

    return (
        <CoordinacionLayout titulo={"Crear Maestros"}>
            <CoordinacionForm handleSubmit={handleSubmit} imagenUrl={"/Docente.jpg"} titulo={"Datos Generales"}>
                <Input register={register("nombre")} label={"Nombre"} placeholder={"Nombre maestro"} />
                <Select setValue={setValue} valueLabel={"id_nivelAcademico"} opciones={tipoNivelAcademico} label={"Nivel del docente"} placeholder={"Nivel academico del docente"} />
                <Input register={register("email")} label={"Email"} type="email" placeholder={"Email"} />
                <Input register={register("password")} Icon={OjoPassword} label={"Password"} type={mostrarPassword ? "text" : "password"} placeholder={"Password"} />
                <Button disabled={isLoading}><Skeleton loading={isLoading} fallback={<Loader />}>Crear Cuenta Maestro</Skeleton></Button>
            </CoordinacionForm>
        </CoordinacionLayout>
    )
}


