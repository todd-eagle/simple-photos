import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import ImageList from './ImageList/ImageList'
import ConfirmWindow from '../../ConfirmWindow/ConfirmWindow'
import EditImageInfo from './EditImageInfo/EditImageInfo'

const ImageContainer = (props) => {

    const [values, setValues] = useState({})
    const [dataValues, setDataValues] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [isEditorOpen, setEditor] = useState(false)
    
    useEffect(() => {
        setDataValues(props.imgData)
    },[props.imgData])

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    }

    const editImage = async(id) => {
        try {
            await axios.put(`/api/photos/${id}`, values) 
            mutateSate(id, values)
            setValues(values => ({}))
        } catch (error) {
            console.log(error)            
        }
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

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const toggleEdit = () => {
        setEditor(!isEditorOpen)   
    }
    
    const setImageInfo = (imgInfoArray) => {
        const [id, link, title, tags] = imgInfoArray
        console.log("imgInfoArray ", imgInfoArray);
        setValues({id, link, title, tags})
    }

    const getValues = () =>{
        return values
    }

    const mutateSate = (id, newValues) => {
        const returnedIndex = dataValues.findIndex(function(state, index) {
            return id === state.id ? true : false
        })  
        dataValues[returnedIndex] = newValues
    }

    return (
        <>
            <ImageList dataValues={dataValues} 
                       deleteImageFn={deleteImage} toggleFn={toggle}
                       toggleEditFn={toggleEdit} setImageInfoFn={setImageInfo} 
                       getValuesFn={getValues} />
            {isOpen ?
                <ConfirmWindow deleteImageFn={deleteImage} toggleFn={toggle} 
                               values={values} /> 
            : null}
            {isEditorOpen ?
                <EditImageInfo editImageFn={editImage} toggleEditFn={toggleEdit}
                               handleChangeFn={handleChange} getValuesFn={getValues} />
            : null}   
        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(ImageContainer)
