import { useEffect } from 'react'

const FondoColor = ({children, color}) => {
  useEffect(()=>{
    document.body.style.backgroundColor = color
    return ()=>{
      document.body.style.backgroundColor = ''
    }
  },[color])


  return children
}

export default FondoColor