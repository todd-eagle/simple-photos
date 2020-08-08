import React, {useState, useEffect} from 'react'
import UploadForm from './UploadForm/UploadForm'
import ImageContainer from './ImageContainer/ImageContainer'

import axios from 'axios'
import {connect} from 'react-redux'

const Dashboard = (props) => {
    
    const [imgData, setData] = useState([])
    useEffect(() => {
        getImages(props.user.id)
    },[props.user.id])

    const getImages = (id) => {
        // console.log("getImages called!")
        axios.get(`/api/photos/${id}`) 
        .then(res=>{
        //    console.log(res.data)
           setData(res.data)
        }).catch(error =>{console.log(error)})
    }

    return (
    <>
        <p>This is the dashboard</p>
        <UploadForm getImagesFn={getImages} />
        <ImageContainer imgData={imgData} getImagesFn={getImages} />
    </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(Dashboard)