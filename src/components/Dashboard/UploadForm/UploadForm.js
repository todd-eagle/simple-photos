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

    const handleChange = (e) => {
        e.preventDefault()
    }

    const handleSubmit = (e) => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    }

    const onDrop = useCallback(async(acceptedFiles, fileRejections) => {
       
        const selectedFile = acceptedFiles[0]
        
        const config = { headers: { 'Content-Type': 'multipart/form-data' } }

        let formData = new FormData()

        formData.append('image', selectedFile)

        setFiles(Object.assign(selectedFile, {
            preview: URL.createObjectURL(selectedFile)
          })
        )
        
        // try{
        // const data = await axios.post('/api/upload', formData, config)
        // console.log("data is ", data)
        // }catch(err){console.log(err)}

    }, [])

    const handleDelete = () => {
        delete files.preview
    }
    

    return (
        <>
            <DragNDropArea onDrop={onDrop} multiple={MULTIPLE_FILES} maxSize={MAX_SIZE} 
                           accept={ACCEPTED_FILES} preview={previewImage} 
                           handleDeleteFn={handleDelete} />
            <InfoForm 
                inputData={
                    [{type: 'text', property: 'title', value: values.title}, 
                    {type: 'text', property: 'tags',  value: values.tags},
                    {type: 'text', property: 'link',  value: values.link}]
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