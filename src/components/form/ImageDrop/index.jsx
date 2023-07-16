import React from 'react'
import { ImageProvider } from './ImageContext'
import ImageUI from './ImageUI'

const ImageDrop = (props) => {
    return (
        <ImageProvider>
            <ImageUI {...props} />
        </ImageProvider>
    )
}


export default ImageDrop