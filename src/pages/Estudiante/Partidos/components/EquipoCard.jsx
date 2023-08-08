
const EquipoCard = ({img, title = "Team Test 1"}) => {
    return (
        <div className="border shadow-md gap-2 p-4 flex-col flex items-center rounded-md">
            <img className="w-12 aspect-square rounded-full" src="http://localhost:4000/uploads/default/defaultAvatar.png" alt="" />
            <h2 className="font-bold text-[#747474]">{title}</h2>
        </div>
    )
}

export default EquipoCard