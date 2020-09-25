import React, {useState, useCallback} from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateProfile} from '../../../redux/reducers/DataReducer'
import UploadFile from '../UploadFile/UploadFile'
import {ProfileImage} from '../../../styles/Pages/Profile'
// import genericImage from '../../../assets/images/default-profiles/edgar-nKC772R_qog-unsplash.jpg'

const Avatar = (props) => {

    const [imageData, setImageData] = useState()
    const [files, setFiles] = useState('')
    const [fileInfo, setFileInfo] = useState({})
    const [toggle, setToggle] = useState(false)
    let previewImage = files.preview

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
      const body = {}
      const path = `/assets/images/${props.auth.user.folder_id}/${fileInfo.name}`
      props.profileImages === 'avatar' ? body.avatar_link = path : body.background_link = path
      const config = { headers: {'Content-Type': 'multipart/form-data' }}
      body.user_id = props.auth.user.id
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

    const {avatar_link, background_link} = props.profile.profileInfo
    
    let image = null
    props.profileImages === 'avatar' ? image=avatar_link : image=background_link   
    console.log("Profile Handler Props: ", props)
    return(
        <UploadFile onDrop={onDrop} preview={previewImage} handleSubmitFn={handleSubmit}
                    currentImage={image} resetDragNDropFn={resetDragNDrop} toggle={toggle}
                    accept={props.accept} imageType={props.profileImages}>
                    <ProfileImage imageType={props.profileImages} src={image} alt="My profile avatar"/>
        </UploadFile>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps,{updateProfile})(Avatar)