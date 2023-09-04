import TablaHeader from './TablaHeader';
import TablaBotonAdd from './TablaBotonAdd';
import TablaRowHeader from './TablaRowHeader';
import TablaListaDeFilas from './TablaListaDeFilas';
import { useTranlate } from 'src/hooks/useTranslation';

const Tabla = ({
  titulo,
  cantidadTexto,
  listaDatos = [{}],
  boton = true,
  botonTexto,
  botonUrl,
  editarUrl,
  borrarElemento,
  acciones =
  true,
  AccionesCustomElement,
  accionesCustomLabel,
  eliminar = true,
  editar = true }) => {

  let filas = listaDatos.length ? [...Object.keys(listaDatos[0])] : [];
  const {t} = useTranlate();
  if (acciones) {
    filas = [...filas, t('acciones')]
  }

  if (!acciones && accionesCustomLabel) {
    filas = [...filas, accionesCustomLabel]
  }

  return (
    <div className='overflow-auto'>
      <table className='w-full bg-white min-w-[680px] rounded-md'>
        <thead>
          <tr>
            <td colSpan={7}>
              <div className='flex justify-between p-4'>
                <TablaHeader titulo={titulo} cantidadTexto={cantidadTexto} />
                {boton && <TablaBotonAdd url={botonUrl}>{botonTexto}</TablaBotonAdd>}
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {
            listaDatos.length ? <TablaRowHeader filas={filas} /> : ""
          }
          {
            listaDatos.length
              ? <TablaListaDeFilas
                filas={filas}
                listaDatos={listaDatos}
                editarUrl={editarUrl}
                borrarElemento={borrarElemento}
                acciones={acciones}
                AccionesCustomElement={AccionesCustomElement}
                editar={editar}
                eliminar={eliminar} />
              : <p className='p-4'>{t('no_item')}</p>
          }
        </tbody>
      </table>
    </div>
  );
};


export default Tabla