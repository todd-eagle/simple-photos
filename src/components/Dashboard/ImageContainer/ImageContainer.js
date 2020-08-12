import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ImageList from './ImageList/ImageList'
import ConfirmWindow from '../../ConfirmWindow/ConfirmWindow'

const ImageContainer = (props) => {

    const [dataValues, setValues] = useState([])
    const [idLinkValues, setIdLink] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [isEditorOpen, setEditor] = useState(false)
    
    useEffect(() => {
        setValues(props.imgData)
    },[props.imgData])

    const deleteImage = async(id, link) => {
        try {
            await axios.delete(`/api/photos/${id}`)
            console.log('file data deleted')
            try {
               await axios.post('/api/files', {link})   
               try {
                    await props.getImagesFn(props.user.id)
               } catch (error) {console.log(error)}
            } catch (error) {console.log(error)}
        } catch (error) {console.log(error)}
    }

    const editImage = (id) => {
        try {
            axios.put(`/api/photos/${id}`) 
        } catch (error) {
            console.log(error)            
        }
    }

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleEdit = () => {

    }
    
    const idLinkData = async(id, link) => {
        await setIdLink([id, link])
    }

    return (
        <>
            <ImageList dataValues={dataValues} editImageFn={editImage} 
                       deleteImageFn={deleteImage} toggleFn={toggle}
                       idLinkDataFn = {idLinkData}/>
            {isOpen ?
            <ConfirmWindow deleteImageFn={deleteImage}  toggleFn={toggle} 
                           idLinkValues={idLinkValues} /> 
            : null}    
        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(ImageContainer)
