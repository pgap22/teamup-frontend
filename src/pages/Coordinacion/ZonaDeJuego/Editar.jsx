import CoordinacionForm from "src/components/layout/CoordinacionForm";
import CoordinacionLayout from "src/components/layout/CoordinacionLayout";

import Input from "src/components/form/Input";
import Select from "src/components/form/Select";
import ImageDrop from "src/components/form/ImageDrop";

export default function Editar() {
    return (
        <CoordinacionLayout
            titulo={"Editar Zona De Juego"}
        >
            <CoordinacionForm handleSubmit={handleSubmit} titulo={"Datos Generales"} imagenUrl={"/cancha.jpg"}>

                <Input register={register("nombre")} label={"Nombre"} placeholder={"Nombre del deporte"} />

                <Select setValue={setValue} valueLabel={"id_deporte"} placeholder={"Selecciona un deporte"} label={"Deporte"} opciones={deportes} />

                <ImageDrop setValue={setValue} name="imagenes" label={"Imagenes"} />

                <Button>Crear Zona De Juego</Button>
            </CoordinacionForm>
        </CoordinacionLayout>
    )
}