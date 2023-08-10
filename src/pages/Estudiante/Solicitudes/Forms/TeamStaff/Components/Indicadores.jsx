const HeadLines = () => {
    return <div className="h-full w-full flex flex-col gap-2">
        <h1 className="text-lg font-bold">Titulares (1/5)</h1>
        <div className="flex flex-col max-w-[300px] overflow-auto">
            <JugadorInfo esTitular />
        </div>
    </div>
}
const Reservers = () => {
    return <div className="h-full w-full flex flex-col gap-2">
        <h1 className="text-lg font-bold">Reservas (1/5)</h1>
        <div className="flex flex-col max-w-[300px] overflow-auto">
            <JugadorInfo esTitular={false} />
        </div>
    </div>
}

const Indicadores = () => {
    return <div className=" rounded-md w-full border border-[#D8D8D8] gap-10  grid grid-rows-2 py-5 px-8  items-start ">
        <HeadLines />
        <Reservers />
    </div>
}


const JugadorInfo = ({ esTitular }) => {
    const stylesJugador = esTitular ? "text-primary" : "text-[#04902B]"
    const stylesCircle = esTitular ? "bg-primary" : "bg-[#04902B]"
    return <div className="flex gap-3 w-full items-center ">
        <div className={`w-4 h-4 rounded-full ${stylesCircle}`} />
        <p className={`text-base font-bold ${stylesJugador}`}>Juanito Juanito Juanito Juanito</p>
    </div>


}

export default Indicadores