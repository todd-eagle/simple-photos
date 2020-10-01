import React, {useState} from 'react'
import {Modal} from '../../styles/Components/Modals'
import {ImagePlate, Image, ImageInfo, TagText} from '../../styles/Components/Images'
import {saveAs} from 'file-saver'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const ModalImage = (props) => {

    const {imageValues, handleSelectImageFn} = props

    const [redirect, setRedirect] = useState(false)
    const [imagesById, setImagesById] = useState(null)

    
    const download = async() => {
        const file = await axios.post('/api/download', {filePath: imageValues.el.link}, {responseType: 'blob'})
        let fileName = imageValues.el.link.substr(imageValues.el.link.lastIndexOf("/") + 1)
        saveAs(new Blob([file.data], {type:'image/*'}), fileName);
    }

    const goToProfile = () => {
        setRedirect(true)
    }

    return(
        <>
        <Modal>
            <ImagePlate>
            <ImageInfo>
                    <div onClick={()=> handleSelectImageFn(imageValues)}>X</div>
                    <div onClick={()=>goToProfile()}>{imageValues.el.email}</div>
                    <TagText> Title: {imageValues.el.title}</TagText>
                </ImageInfo>
                <Image src={imageValues.el.link} />
                <ImageInfo>
                   <TagText> Tags: {imageValues.el.tags}</TagText>
                   <div onClick={()=> download()}>DOWNLOAD</div>
                </ImageInfo>   
            </ImagePlate>
        </Modal>
        {redirect ? 
            <Redirect to={{
                pathname: '/profiles',  
                user_id: imageValues.el.user_id,
                email: imageValues.el.email,
                avatar:  imageValues.el.avatar_link,
                background: imageValues.el.background_link,
                profile_id: imageValues.el.id
            }
                } />
        : null}
        </>
    )
}

export default ModalImage