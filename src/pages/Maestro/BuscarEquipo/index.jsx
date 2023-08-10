import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { buscarEquipo } from "src/api/equipos"
import Button from "src/components/form/Button"
import Input from "src/components/form/Input"
import MaestroLayout from "src/components/layout/MaestroLayout"
import Caja from "src/components/ui/Cajas/Caja"
import { useEquipo } from "src/store/useEquipo"


const BuscarEquipo = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState('');
    const { setEquipo } = useEquipo();

    const buscarEquipoForm = async (data) => {
        try {
            const equipo = await buscarEquipo(data);
            setEquipo(equipo);
            navigate("/maestro/equipo/"+equipo.nombre);
        } catch (error) {
            setMensaje(error)
            setEquipo({});
        }
    }

    return (
        <MaestroLayout
            titulo={"Buscar Equipo"}
        >
            <Caja titulo="Buscar Equipo">
                <p className="text-[#767676] my-4">¡Escribe el nombre del equipo y verifique si tienen un partido!</p>
                {mensaje && <p className="text-red-500">{mensaje}</p>}
                <form onSubmit={handleSubmit(buscarEquipoForm)} className="md:max-w-md space-y-4">

                    <Input register={register("nombre")} placeholder={"Nombre Del Equipo"} />

                    <Button>Buscar</Button>

                </form>

            </Caja>
        </MaestroLayout>
    )
}

export default BuscarEquipo