import { useEffect } from 'react'

const FondoColor = ({ children, color }) => {
  return <>
    <style dangerouslySetInnerHTML={{
      __html: `
    body{
      background-color: ${color}
    }
    `}} />
    {children}
  </>
}

export default FondoColor