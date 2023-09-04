import { useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { buscarEquipo } from "src/api/equipos"
import Button from "src/components/form/Button"
import Input from "src/components/form/Input"
import MaestroLayout from "src/components/layout/MaestroLayout"
import Caja from "src/components/ui/Cajas/Caja"
import Loader from "src/components/ui/Loader"
import Skeleton from "src/components/ui/Skeleton"
import { useTranlate } from "src/hooks/useTranslation"
import { useEquipo } from "src/store/useEquipo"


const BuscarEquipo = () => {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm();
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState('');
    const { setEquipo } = useEquipo();
    const {t} = useTranlate();

    const buscarEquipoForm = async (data) => {
        try {
            const equipo = await buscarEquipo(data);
            setEquipo(equipo);
            navigate("/maestro/equipo/" + equipo.nombre);
        } catch (error) {
            setMensaje(error)
            setEquipo({});
        }
    }

    return (
        <MaestroLayout
            titulo={t('buscarEquipo.pageTitle')}
        >
            <Caja titulo={t('buscarEquipo.searchBoxTitle')}>
                <p className="text-[#767676] my-4">{t('buscarEquipo.searchBoxDescription')}</p>
                {mensaje && <p className="text-red-500">{t('buscarEquipo.errorMessage')}</p>}
                <form onSubmit={handleSubmit(buscarEquipoForm)} className="md:max-w-md space-y-4">
                    <Input register={register("nombre")} placeholder={t('buscarEquipo.inputPlaceholder')} />
                    <Button disabled={isSubmitting}>
                        <Skeleton loading={isSubmitting} fallback={<Loader />}>
                            {t('buscarEquipo.searchButton')}
                        </Skeleton>
                    </Button>
                </form>
            </Caja>
        </MaestroLayout>

    )
}

export default BuscarEquipo