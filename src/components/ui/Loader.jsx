import {HashLoader} from 'react-spinners'

const Loader = ({size = 28, color = 'white'}) => {
  return (
    <HashLoader size={size} color={color} />
  )
}

export default Loader