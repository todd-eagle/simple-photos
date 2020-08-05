import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ImageList from './ImageList/ImageList'

const ImageContainer = (props) => {

    const [dataValues, setValues] = useState([])
    
    useEffect(() => {
        const {imgData} = props
        setValues(props.imgData)
    },[props.imgData])

    const deleteImage = (id) => {
        try {
            axios.delete(`/api/photos/${id}`)
        } catch (error) {
            console.log(error)
        }
    }

    const editImage = (id) => {
        try {
            axios.put(`/api/photos/${id}`) 
        } catch (error) {
            console.log(error)            
        }
    }

    return (
        <>
            <ImageList dataValues={dataValues} editImageFn={editImage} deleteImagefn={deleteImage} />
        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(ImageContainer)
