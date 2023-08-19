import Input from "src/components/form/Input";

const EquipoCardResultado = ({ equipo, register }) => {

    return (
        <div className={"border space-y-2 items-center gap-2 transition-all shadow p-4 rounded-md"}>
            <div className="flex gap-2 items-center">
                <img className="w-12 aspect-square rounded-full" src={new URL(import.meta.env.VITE_URL + equipo.avatar_url).toString()} alt="" />
                <p className="font-bold">{equipo.nombre}</p>
            </div>
            <Input register={register} type="number" label={"Resultado"} />
        </div>
    )
}

export default EquipoCardResultado;