import React, {useState, useEffect} from 'react'
import UploadForm from './UploadForm/UploadForm'
import ImageContainer from './ImageContainer/ImageContainer'
import ProfileHead from './ProfileHead/ProfileHead'
import axios from 'axios'
import {connect} from 'react-redux'

const Dashboard = (props) => {
    
    const [imgData, setData] = useState([])

    useEffect(() => {
        getImages(props.auth.user.id)
    },[props.auth.user.id])

    const getImages = (id) => {
        axios.get(`/api/photos/${id}`) 
        .then(res=>{
           setData(res.data)
        }).catch(error =>{console.log(error)})
    }

    return (
    <>
       
        <ProfileHead />
        <UploadForm imgData={imgData} getImagesFn={getImages} />
        <ImageContainer imgData={imgData} getImagesFn={getImages} />
    </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(Dashboard)