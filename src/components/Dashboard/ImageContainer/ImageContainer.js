import React, {useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ImageList from './ImageList/ImageList'


const ImageContainer = (props) => {

    const imageData = () => {
        try {
            return axios.get(`/api/photos/${props.user.id}`)
        }catch(error){
            console.log(error)
        }
    }

    const deleteImage = (id) => {
        try {
            axios.delete(`/api/photos/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    const editImage = () => {
        try {
            axios.put(`/api/photos/${id}`) 
        } catch (error) {
            console.log(error)            
        }
    }


    return (
        <>
            <ImageList imageDataFn={imageData} deleteImageFn={deleteImage} editImage={editImage} />
        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(ImageContainer)
