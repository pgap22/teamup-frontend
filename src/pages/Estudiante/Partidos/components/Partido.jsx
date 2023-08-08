import {GiTennisCourt} from "react-icons/gi"
import { Link } from "react-router-dom";
import Button from "src/components/form/Button";
import EstadoPartido from "./EstadoPartido";

export default function Partido() {
    return (
        <div className="border shadow-md p-4 rounded-lg">

            <div className="bg-[#D9D9D9] min-h-[100px] flex justify-center items-center rounded-lg">
                <GiTennisCourt size={52} strokeWidth={4} color="#8C8C8C" />
            </div>

            <div className="flex flex-col gap-4 mt-2">
                <h2><span className="font-bold">Deporte:</span> Futbol</h2>

                <EstadoPartido titulo={"Pendiente"} />

                <div>
                    <p className="max-w-[25ch] font-bold overflow-auto">Team Test 2</p>
                    <p className="max-w-[25ch] font-bold overflow-auto">Team Test 1</p>
                </div>

                <Link to={"1"}>
                    <Button>Ver mas informacion</Button>
                </Link>
            </div>

        </div>
    )
}
