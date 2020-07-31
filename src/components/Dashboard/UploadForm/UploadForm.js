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

    const handleChange = (e) => {
        e.preventDefault()
    }

    const handleSubmit = (e) => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    }


    const onDrop = useCallback(async(acceptedFiles, fileRejections) => {
        console.log("acceptedFiles are here ",  acceptedFiles[0]);
        console.log("fileRejections are here ", fileRejections);

        const config = { headers: { 'Content-Type': 'multipart/form-data' } }

        let formData = new FormData()

        formData.append('image', acceptedFiles[0])

        try{
        const data = await axios.post('/api/upload', formData, config)
        console.log("data is ", data)
        }catch(err){console.log(err)}

    }, [])

    return (
        <>
            <DragNDropArea onDrop={onDrop} multiple={MULTIPLE_FILES} maxSize={MAX_SIZE} accept={ACCEPTED_FILES} />

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