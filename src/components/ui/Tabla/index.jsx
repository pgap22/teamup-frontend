import React from 'react'
import TablaContainer from './TablaContainer';
import TablaHeaderContainer from './TablaHeaderContainer';
import TablaHeader from './TablaHeader';
import TablaBotonAdd from './TablaBotonAdd';
import TablaRowHeader from './TablaRowHeader';
import TablaListaDeFilas from './TablaListaDeFilas';

const Tabla = ({ titulo, cantidadTexto, listaDatos = [{}], botonTexto }) => {
    const filas = [...Object.keys(listaDatos[0]), "Acciones"];
  
    return (
      <TablaContainer>
        <TablaHeaderContainer>
          <TablaHeader titulo={titulo} cantidadTexto={cantidadTexto} />
  
          <TablaBotonAdd>{botonTexto}</TablaBotonAdd>
        </TablaHeaderContainer>
  
        <TablaRowHeader filas={filas} />
  
        <TablaListaDeFilas filas={filas} listaDatos={listaDatos} />
      </TablaContainer>
    );
  };


export default Tabla