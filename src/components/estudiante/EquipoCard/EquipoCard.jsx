
const EquipoCard = ({ equipo, resultado, esLocal = false }) => {
    return (
        <div className="border shadow-md gap-2 p-4 flex-col flex items-center rounded-md">
            <img className="w-12 aspect-square rounded-full" src={import.meta.env.VITE_URL + equipo.avatar_url} alt="" />
            <h2 className="font-bold text-[#747474]">{equipo.nombre}</h2>
            {
                (resultado && resultado.confirmado)  && (
                    <p className="text-center font-bold text-xl">
                        {
                            esLocal
                            ? resultado.resultado_local
                            : resultado.resultado_visitante
                        }
                    </p>
                )
            }
        </div>
    )
}

export default EquipoCard