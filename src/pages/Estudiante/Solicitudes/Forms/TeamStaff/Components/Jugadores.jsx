const JugadorItem = ({ jugador }) => {
    const { id, nombre, rango } = jugador
    return <div className="w-full flex gap-2 p-3 border border-[#D8D8D8] rounded-md">
        <div className="w-6 rounded bg-primary"></div>
        <p className="truncate text-[#565656] text-lg font-bold">{nombre} {rango === "lider" && "(Tu)"}</p>
    </div>
}

export const Jugadores = ({ jugadores }) => {
    return <div className="flex flex-col gap-2 w-full max-h-96">
        {jugadores?.map((jugador, i) => <JugadorItem key={i} jugador={jugador} />)}
    </div>
}