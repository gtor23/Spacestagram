import React, {useState} from 'react'
import {FaHeart} from 'react-icons/fa'

const ImageCard = ({image, id}) => {

    const [liked, setLiked] = useState(false)

    return (
        <div id = {id} className = 'card'>
            <h1 className = 'image-title'>{image.title} </h1>
            
            {image.media_type == "video" ? (<iframe width="420" height="345" src ={image.url}/>) : <img width="420" height="345" src = {image.url} alt = {'alt'}/>}

            <div className = 'under-image'>
                <FaHeart className = {`${ liked ? 'liked': 'heart'} pointer`} onClick = { () => {setLiked(!liked)}  } />
                <div className='date'><h2 className = 'image-date'>{image.date}</h2></div> 
            </div>

        </div>
    )
}

export default ImageCard