
const EquipoCard = ({equipo}) => {
    return (
        <div className="border shadow-md gap-2 p-4 flex-col flex items-center rounded-md">
            <img className="w-12 aspect-square rounded-full" src={import.meta.env.VITE_URL+equipo.avatar_url} alt="" />
            <h2 className="font-bold text-[#747474]">{equipo.nombre}</h2>
        </div>
    )
}

export default EquipoCard