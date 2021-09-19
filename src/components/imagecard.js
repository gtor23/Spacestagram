import React, {useState} from 'react'

const ImageCard = ({image, id}) => {


    return (
        <div id = {id}>
            <h1>{image.title} </h1>
            {
                image.media_type == "video" ? (<iframe width="420" height="345" src ={image.url}/>) : <img width="420" height="345" src = {image.url} alt = {'alt'}/>
            }
            <h2>{image.date}</h2>
            <h3>{image.explanation}</h3>
        </div>
    )
}

export default ImageCard