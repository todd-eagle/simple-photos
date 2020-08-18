import React, {useState, useEffect} from 'react'
import axios from 'axios'
import LandingPage from './LandingPage/LandingPage.js'

const Landing = () => {
    const [imageData, setImageData] = useState([])

    useEffect(() => {
        getAllImages()
    },[])
    
    const getAllImages = async() => {
        try {
            const info = await axios('/api/allphotos')
            setImageData(info.data)
        } catch (error) {console.log(error)}
    }
    return <LandingPage imageData={imageData}  />
}
export  default Landing
