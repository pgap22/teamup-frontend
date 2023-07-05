import Select from "../../../components/form/Select";
import Button from "../../../components/form/Button";
import Input from "../../../components/form/Input";
import CoordinacionLayout from "../../../components/layout/CoordinacionLayout";

const DeporteCrear = () => {
  return (
    <CoordinacionLayout titulo={"Crear Deporte"} center={true}>
      <div className="grid gap-6 lg:grid-cols-[0.6fr_1fr] ">
        <div className="bg-white p-4 rounded-lg">
          <h2 className="font-bold text-2xl mb-6">Datos Generales</h2>

          <form>
            <div className="flex flex-col gap-6">
              <Input label={"Nombre del deporte"} placeholder={"Ej: Futbol"} />
              <Input label={"Limite de jugadores"} placeholder={"Ej: 7"} />
              <Input label={"Limite de cambio"} placeholder={"Ej: 2"} />
              <Select
                label={"Tipo de Deporte"}
                placeholder={"Ej: Cancha"}
                opciones={[
                  {
                    label: "Cancha",
                    value: "cancha",
                  },
                ]}
              />

              <Button>Añadir Deporte</Button>
            </div>
          </form>
        </div>

        <div style={{backgroundImage: "url('/deporte.jpg')"}} className="rounded-lg bg-cover bg-no-repeat"></div>
      </div>
    </CoordinacionLayout>
  );
};

export default DeporteCrear;
