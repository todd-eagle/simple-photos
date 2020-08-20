import React, {useState, useEffect} from 'react'
import axios from 'axios'
import LandingPage from './LandingPage/LandingPage.js'
import {connect} from 'react-redux'


const Landing = (props) => {
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
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(Landing)
