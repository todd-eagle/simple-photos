import React, {useState, useCallback} from 'react'
import InfoForm from '../../Form/Form'
import Button from '../../Button/Button'
import DragNDropArea from './DragNDropArea/DragNDropArea'

const UploadForm = () => {
    
    const [values, setValues] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
    }

    const handleSubmit = (e) => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }))
    }
    
    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles);
    }, []);

    return (
        <>
            <DragNDropArea onDrop={onDrop} maxSize={10485760} accept={"image/jpeg, image/jpg, image/png"} />

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