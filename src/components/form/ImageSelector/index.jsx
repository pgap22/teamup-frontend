import { ImageProvider } from "./ImageContext"
import ImageSelector from "./ImageSelector"

export default function index (props) {
    return (
        <ImageProvider>
            <ImageSelector {...props}/>
        </ImageProvider>
    )
}
