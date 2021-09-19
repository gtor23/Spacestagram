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

            // console.log('the data',data)
            setImagesData(data)
           
            setLoading(!loading)

            // setIsLoading(false)


        }catch (error){
            setIsError(error.message)
            // setIsLoading(true)
            console.error(error)
        }
    }


    useEffect(() => {getAllImages() 
        
    }, [])

    // console.log('is error', isError)
   
    return (
        
        <>
            {loading ? null : <h1 className = 'main-title'>Spacestagram</h1>}

            { 

            //  isError ? <h1>{isError}. <span>Please refresh and try again.</span></h1> : (isLoading ? (<h1>Loading..... one second....</h1>) : ( <ImagesList imagesData = {imagesData}/>))
             isError ? <h1 className = 'error'>{isError}. <span>Please refresh and try again.</span></h1> : (loading ? (<div className = 'loader'> <h1 className = 'loading'>Loading...</h1> <BarLoader loading = {loading} />  </div>) : ( <div className = 'content'><ImagesList imagesData = {imagesData}/></div>))
                
            }

        </>
        
    )

}

export default Images