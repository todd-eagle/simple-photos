import React, {useState, useCallback} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import UploadFile from '../UploadFile/UploadFile'
import {ProfileImage} from '../../../styles/Pages/Profile'
import genericImage from '../../../assets/images/default-profiles/edgar-nKC772R_qog-unsplash.jpg'


const Avatar = (props) => {

    const [imageData, setImageData] = useState()
    const [files, setFiles] = useState('')
    const [fileInfo, setFileInfo] = useState({})
    let previewImage = files.preview

    const ACCEPTED_FILES = "image/jpeg, image/jpg, image/png"

    const onDrop = useCallback(acceptedFiles => {
        const selectedFile = acceptedFiles[0]
        // console.log("acceptedFiles ", selectedFile)       
        const formData = new FormData()
        
        formData.append('image', selectedFile)
        // console.log("formData", formData)
        setImageData(formData)
        setFileInfo(selectedFile)
        console.log("fileInfo, ", selectedFile.name)
        setFiles(Object.assign(selectedFile, {
            preview: URL.createObjectURL(selectedFile)
          })
        )
      }, [])

    const handleSubmit = async() => {
      const config = { headers: {'Content-Type': 'multipart/form-data' }}
      const body = {
        user_id: props.user.id,
        avatar_link: `${props.user.folder_id}/profile/${fileInfo.name}`,
      }
      try {
        await axios.post(`/api/profile/`, body)
      } catch (error) {
            try {
                const update = axios.put(`/api/profile/`, body)
                console.log("update: ", update)
            } catch (error) {console.log(error)}
      }
      
      // const uploadedImage = await axios.post(`/api/profile/`, imageData, config)
      // console.log("uploadedImage", uploadedImage)
      }
      
    return(
        <UploadFile onDrop={onDrop} preview={previewImage} handleSubmitFn={handleSubmit}
                genericImage={genericImage} accept={ACCEPTED_FILES}>
                    <ProfileImage src={genericImage} alt="My profile pic"/>
        </UploadFile>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(Avatar)