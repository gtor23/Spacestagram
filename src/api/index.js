import axios from 'axios'
require('dotenv').config();
const NASA_KEY = process.env.REACT_APP_API_KEY;

const BASE = 'https://api.nasa.gov/planetary/apod';

export async function getImages() {
    try {
        const response = await axios.get(`${BASE}/?api_key=${NASA_KEY}&count=12`)
        return response
    } catch (error) {
               
        throw error
        
    }
}






