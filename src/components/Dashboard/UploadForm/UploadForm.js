import React, {useState, useCallback} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import InfoForm from '../../Form/Form'
import Button from '../../Button/Button'
import DragNDropArea from './DragNDropArea/DragNDropArea'

const UploadForm = (props) => {

    const MAX_SIZE = 10485760
    const ACCEPTED_FILES = "image/jpeg, image/jpg, image/png"
    const MULTIPLE_FILES = false
  
    const [values, setValues] = useState({})
    const [files, setFiles] = useState('')
    const [formValue, setForm] = useState()
    const previewImage = files.preview

    const {getImagesFn} = props
    
    const handleChange = (e) => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }
        try{
            const imageInfo = await axios.post(`/api/photos/${props.user.id}`, values)
            try{
               await axios.post(`/api/upload/${imageInfo.data.id}/${props.user.email}`, formValue, config)
            }catch(err){console.log(err)}
        }catch(err){console.log(err)}
        await props.getImagesFn(props.user.id)

    }

    const onDrop = useCallback(async(acceptedFiles) => {
        const selectedFile = acceptedFiles[0]       
        const formData = new FormData()
        
        formData.append('image', selectedFile)
        setForm(formData)
        setFiles(Object.assign(selectedFile, {
            preview: URL.createObjectURL(selectedFile)
          })
        )
    }, [])

    const handleDelete = () => {
        setFiles(delete files.preview)
    }

    return (
        <>
            <DragNDropArea onDrop={onDrop} multiple={MULTIPLE_FILES} maxSize={MAX_SIZE} 
                           accept={ACCEPTED_FILES} preview={previewImage} 
                           handleDeleteFn={handleDelete} />
            <InfoForm 
                inputData={
                    [{type: 'text', property: 'title', value: values.title}, 
                    {type: 'text', property: 'tags',  value: values.tags}]
                }
                onChange={handleChange}
                formStyle= "upload-box"
                heading=''
            />
            <Button  onClick={handleSubmit}>
                submit
            </Button>
            {/* <img src={require('../../../assets/images/city.png')} /> */}
        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(UploadForm)