import axios from 'axios'
require('dotenv').config();
const NASA_KEY = process.env.REACT_APP_API_KEY;

const BASE = 'https://api.nasa.gov/planetary/apod';

export async function getImages() {
    try {
        const response = await axios.get(`${BASE}/?api_key=${NASA_KEY}&count=10`)
        // console.log('iiii', data)
        return response
    } catch (error) {
               
        throw error
        
    }
}






