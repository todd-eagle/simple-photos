import React, {useState, useCallback} from 'react'
import UploadFile from '../UploadFile/UploadFile'
import genericBackground from '../../../assets/images/default-profiles/bailey-zindel-NRQV-hBF10M-unsplash.jpg'
import {ProfileBackgroundImage} from '../../../styles/Pages/Profile'

const Background = (props) => {
    const [formValue, setForm] = useState()
    const [files, setFiles] = useState('')
    let previewImage = files.preview

    const ACCEPTED_FILES = "image/jpeg, image/jpg, image/png"

    const onDrop = useCallback(acceptedFiles => {
        const selectedFile = acceptedFiles[0]
        console.log("acceptedFiles ", selectedFile)       
        const formData = new FormData()
        
        formData.append('image', selectedFile)
        console.log("formData", formData)
        setForm(formData)
        setFiles(Object.assign(selectedFile, {
            preview: URL.createObjectURL(selectedFile)
          })
        )
      }, [])

    return(
        <UploadFile onDrop={onDrop} preview={previewImage} 
                genericImage={genericBackground} accept={ACCEPTED_FILES}>
                    <ProfileBackgroundImage src={genericBackground} alt="My profile pic"/>
        </UploadFile>
    )
}

export default Background