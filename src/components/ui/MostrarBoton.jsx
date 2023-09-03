export const MostrarBoton = ({ condicion, children }) => {
    return (
      <>
        {condicion ? children : ''}
      </>
    )
  }