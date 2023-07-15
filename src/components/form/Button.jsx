import React from 'react'

const Button = ({children, color, border, textColor, onClick = ()=>{}}) => {

  let colorBoton = 'bg-primary ';
  let borderBoton = 'border-transparent'
  let color_text = '';
  
  if(color == 'rojo'){
    colorBoton = 'bg-red-700 hover:bg-red-800'
  }
  if(color == 'verde'){
    colorBoton = 'bg-green-700 hover:bg-green-800'
  }
  if(color == 'blanco'){
    colorBoton = 'bg-white !text-black'
  }

  if(border == 'negro'){
    borderBoton = 'border-black'
  }
  if(border == 'blanco'){
    borderBoton = 'border-white'
  }

  if(textColor == 'blanco'){
    color_text = '!text-white'
  }
  if(textColor == 'azul'){
    color_text = '!text-primary'
  }
  
  return (
    <button onClick={onClick} className={`text-white shadow-md w-full flex justify-center items-center gap-4 hover:scale-[1.02] transition-all rounded-lg p-2 font-bold border ${colorBoton} ${borderBoton} ${color_text}`}>{children}</button>
  )
}

export default Button