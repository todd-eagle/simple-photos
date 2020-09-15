import React, {useState, useCallback} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateProfile} from '../../../redux/reducers/DataReducer'
import UploadFile from '../UploadFile/UploadFile'
import {ProfileImage} from '../../../styles/Pages/Profile'
import genericImage from '../../../assets/images/default-profiles/edgar-nKC772R_qog-unsplash.jpg'


const Avatar = (props) => {

    const [imageData, setImageData] = useState()
    const [files, setFiles] = useState('')
    const [fileInfo, setFileInfo] = useState({})
    const [toggle, setToggle] = useState(false)
    let previewImage = files.preview

    const ACCEPTED_FILES = "image/jpeg, image/jpg, image/png"

    const onDrop = useCallback(acceptedFiles => {
        const selectedFile = acceptedFiles[0]
        // console.log("acceptedFiles ", selectedFile)       
        const formData = new FormData()
        
        formData.append('image', selectedFile)
        // console.log("formData", formData)
        setToggle(true)
        setImageData(formData)
        setFileInfo(selectedFile)
        setFiles(Object.assign(selectedFile, {
            preview: URL.createObjectURL(selectedFile)
          })
        )
      }, [])

    const handleSubmit = async() => {
      const path =`/assets/images/${props.auth.user.folder_id}/${fileInfo.name}`
      const config = { headers: {'Content-Type': 'multipart/form-data' }}
      const body = {
        user_id: props.auth.user.id,
        avatar_link: `/assets/images/${props.auth.user.folder_id}/${fileInfo.name}`,
      }
      imageData.append('link', `/assets/images/${props.auth.user.folder_id}`)
      try {
        await axios.post(`/api/profileData/${props.auth.user.id}`, imageData, config)
        try {
          await axios.post(`/api/profile/`, body)
        } catch (error) {
              try {
                  const updatedData = await axios.put(`/api/profile/`, body)
                  console.log("updatedData ", updatedData.data[0])
                  props.updateProfile(updatedData.data[0])
              } catch (error) {console.log(error)}
        }
      } catch (error) {console.log(error)}
    }

    const resetDragNDrop = () => {
      setToggle(!toggle)
      // setFiles(delete files.preview)
    }

    const {avatar_link} = props.profile.profileInfo
    
    const avatar = avatar_link ? avatar_link : genericImage

    return(
        <UploadFile onDrop={onDrop} preview={previewImage} handleSubmitFn={handleSubmit}
                    currentImage={avatar} resetDragNDropFn={resetDragNDrop} toggle={toggle}
                    accept={ACCEPTED_FILES}>
                    <ProfileImage src={avatar} alt="My profile avatar"/>
        </UploadFile>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps,{updateProfile})(Avatar)