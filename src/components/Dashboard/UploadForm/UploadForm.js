import React, {useState, useCallback} from 'react'
import axios from 'axios'
import InfoForm from '../../Form/Form'
import Button from '../../Button/Button'
import DragNDropArea from './DragNDropArea/DragNDropArea'

const UploadForm = () => {

    const MAX_SIZE = 10485760
    const ACCEPTED_FILES = "image/jpeg, image/jpg, image/png"
    const MULTIPLE_FILES = false
  
    const [values, setValues] = useState({})
    const [files, setFiles] = useState('')
    const previewImage = files.preview
    const formData = new FormData()

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))

    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        const {title, tags} = values
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }

        try{
        const data = await axios.post('/api/upload', formData, config)
        console.log("data is ", data)
        }catch(err){console.log(err)}
    }

    const onDrop = useCallback(async(acceptedFiles) => {
        const selectedFile = acceptedFiles[0]       

        formData.append('image', selectedFile)

        setFiles(Object.assign(selectedFile, {
            preview: URL.createObjectURL(selectedFile)
          })
        )
    }, [formData])

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
        </>
    )
}

export default UploadForm