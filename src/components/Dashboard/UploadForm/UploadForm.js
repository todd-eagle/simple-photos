import React, {useState, useCallback} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import DragNDropArea from './DragNDropArea/DragNDropArea'
import {UploadBarWrapper, UploadBar, PhotoCount} from '../../../styles/Pages/DashboardComponents'
import Button from '../../Button/Button'

const UploadForm = (props) => {

    const MAX_FILE_SIZE = 34485760
    const ACCEPTED_FILES = "image/jpeg, image/jpg, image/png"
    const MULTIPLE_FILES = false
    
    const [values, setValues] = useState({})
    const [files, setFiles] = useState('')
    const [formValue, setForm] = useState()
    const [isDragNDropOpen, setIsDragNDropOpen] = useState(false)
    let previewImage = files.preview

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        // console.log("props for uploadform", props)
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }
        try{
            const imageInfo = await axios.post(`/api/photos/${props.auth.user.id}`, values)
            try{
               await axios.post(`/api/upload/${imageInfo.data.id}/${props.auth.user.folder_id}`, formValue, config)
            }catch(err){console.log(err)}
        }catch(err){console.log(err)}
        await props.getImagesFn(props.auth.user.id)
        deletePreviewFile()
        setValues(values => ({}))
        deletePreviewFile()
        dragNDropToggle()
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

    const deletePreviewFile = () => {
        setFiles(delete files.preview)
    }

    const dragNDropToggle = () => {
        setIsDragNDropOpen(!isDragNDropOpen)
        deletePreviewFile()
    }

    return (
        <>
            <UploadBarWrapper>
                <UploadBar>
                    <PhotoCount>Photos({props.imgData.length})</PhotoCount>
                    <Button onClick={()=>dragNDropToggle()}>Add Photo</Button>
                </UploadBar>  
            </UploadBarWrapper>      
            {isDragNDropOpen ? 
            <DragNDropArea onDrop={onDrop} multiple={MULTIPLE_FILES} maxSize={MAX_FILE_SIZE} 
                           accept={ACCEPTED_FILES} preview={previewImage}
                           deletePreviewFileFn={deletePreviewFile} handleChangeFn={handleChange}
                           handleSubmitFn={handleSubmit} values={values} 
                           dragNDropToggleFn={dragNDropToggle} />
            : null }               
        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(UploadForm)