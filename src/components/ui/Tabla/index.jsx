import React from 'react'
import TablaHeader from './TablaHeader';
import TablaBotonAdd from './TablaBotonAdd';
import TablaRowHeader from './TablaRowHeader';
import TablaListaDeFilas from './TablaListaDeFilas';

const Tabla = ({ titulo, cantidadTexto, listaDatos = [], botonTexto, botonUrl, editarUrl, borrarElemento }) => {

  const filas = listaDatos.length ? [...Object.keys(listaDatos[0]), "Acciones"] : [];
  return (
    <div className='overflow-auto'>
      <table className='w-full bg-white min-w-[680px] rounded-md'>
        <thead>
          <tr>
            <td colSpan={7}>
              <div className='flex justify-between p-4'>
                <TablaHeader titulo={titulo} cantidadTexto={cantidadTexto} />
                <TablaBotonAdd url={botonUrl}>{botonTexto}</TablaBotonAdd>
              </div>
            </td>
          </tr>
        </thead>
        <tbody>
          {
            listaDatos.length ? <TablaRowHeader filas={filas}/> : ""
          }
          {
            listaDatos.length
            ? <TablaListaDeFilas filas={filas} listaDatos={listaDatos} editarUrl={editarUrl} borrarElemento={borrarElemento} />
            : <p className='p-4'>No hay ningun item...</p>
          }
        </tbody>
      </table>
    </div>
  );
};


export default Tabla