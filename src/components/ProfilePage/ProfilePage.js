import React, {useState, useEffect} from 'react'
import ProfileHead from '../Dashboard/ProfileHead/ProfileHead'
import ImagesContainer from '../ImagesContainer/ImagesContainer'
// import TestContainer from '../ImagesContainer/TestContainer'
import ModalImage from '../ModalImage/ModalImage'



const ProfilePage = (props) => {
    const {avatar, background, imageData} = props.location
    const [isOpenImageWindow, setIsOpenImageWindow] = useState(false)
    const [imageValues, setImageValues] = useState(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    const handleSelectImage = (imgValues) => {
        console.log("imgValues ", imgValues)
        setImageValues(imgValues)
        setIsOpenImageWindow(!isOpenImageWindow)   
    }
    
    return   <>
        <ProfileHead avatar_link={avatar} background_link={background} onPublicPage={true} />
        <ImagesContainer imageData={imageData} handleSelectImageFn={handleSelectImage} />
        {/* <TestContainer imageData={imageData} handleSelectImageFn={handleSelectImage}/> */}
        {isOpenImageWindow ? <ModalImage imageValues={imageValues} handleSelectImageFn={handleSelectImage}/> : null}

        </>

}

export default ProfilePage