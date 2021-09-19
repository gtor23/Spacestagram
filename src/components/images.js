import React, {useState, useEffect} from 'react'
import {getImages} from '../api'
import {ImagesList} from './index'
import BarLoader from 'react-spinners/BarLoader'

const Images = () => {

    const [imagesData, setImagesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isError, setIsError] = useState(null);
        
    const getAllImages = async () => {
        try {        
            const {data} = await getImages();

            setImagesData(data)
           
            setLoading(!loading)

        }catch (error){
            setIsError(error.message)
            console.error(error)
        }
    }


    useEffect(() => {
        getAllImages()
    }, [])

   
    return (
        
        <>
            {loading ? null : <h1 className = 'main-title'>Space<span id = 'end'>stagram</span></h1>}

            { 

             isError ? <h1 className = 'error'>{isError}. <span>Please refresh and try again.</span></h1> : 

             (loading ? (<div className = 'loader'> <h1 className = 'loading'>Loading...</h1> <BarLoader className = 'load-anm' loading = {loading} color ={'#e92667'}/>  </div>) : 
             ( <div className = 'content'><ImagesList imagesData = {imagesData}/></div>))
                
            }

        </>
        
    )

}

export default Images