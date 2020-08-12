import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ImageList from './ImageList/ImageList'
import ConfirmWindow from '../../ConfirmWindow/ConfirmWindow'
import EditImageInfo from './EditImageInfo/EditImageInfo'

const ImageContainer = (props) => {

    const [formvalues, setFormValues] = useState({})
    const [dataValues, setValues] = useState([])
    const [imageValues, setImageValues] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [isEditorOpen, setEditor] = useState(false)
    
    useEffect(() => {
        setValues(props.imgData)
    },[props.imgData])

    const handleChange = (e) => {
        e.persist();
        setFormValues(formvalues => ({ ...formvalues, [e.target.name]: e.target.value }))
    }

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
        setEditor(!isEditorOpen)
        
    }
    
    const setImageInfo = async(imgInfoArray) => {
        await setImageValues(imgInfoArray)
    }

    return (
        <>
            <ImageList dataValues={dataValues} 
                       deleteImageFn={deleteImage} toggleFn={toggle}
                       toggleEditFn={toggleEdit} setImageInfoFn={setImageInfo} />
            {isOpen ?
                <ConfirmWindow deleteImageFn={deleteImage} toggleFn={toggle} 
                               imageValues={imageValues} /> 
            : null}
            {isEditorOpen ?
                <EditImageInfo editImageFn={editImage} toggleEditFn={toggleEdit}
                               handleChangeFn={handleChange} imageValues={imageValues} 
                               formvalues={formvalues} />
            : null}   
        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(ImageContainer)
