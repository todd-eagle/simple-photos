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
        setFiles(Object.assign(selectedFile, {
            preview: URL.createObjectURL(selectedFile)
          })
        )
      }, [])

    const handleSubmit = async() => {
      const config = { headers: {'Content-Type': 'multipart/form-data' }}
      const body = {
        user_id: props.user.id,
        avatar_link: `/assets/images/${props.user.folder_id}/${fileInfo.name}`,
      }
      imageData.append('link', `/assets/images/${props.user.folder_id}`)
     
      try {
        await axios.post(`/api/profileData/${props.user.id}`, imageData, config)
        try {
          await axios.post(`/api/profile/`, body)
        } catch (error) {
              try {
                  await axios.put(`/api/profile/`, body)
              } catch (error) {console.log(error)}
        }
      } catch (error) {console.log(error)}
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