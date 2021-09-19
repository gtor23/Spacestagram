import React, {useState} from 'react'

import {ImageCard} from './index'

const ImagesList = ({imagesData}) => {

    console.log(imagesData)
    
    return (
     <>
         {imagesData.map((image, idx) => {
            return <ImageCard image = {image} key = {idx} id = {idx} />
         })}      
    </>
    )
    
    
}

export default ImagesList