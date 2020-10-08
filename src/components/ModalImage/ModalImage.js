import React, {useState, useEffect} from 'react'
import {Modal} from '../../styles/Components/Modals'
import {ImagePlate, Image, ImageInfo, TagText} from '../../styles/Components/Images'
import {saveAs} from 'file-saver'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const ModalImage = (props) => {

    const {imageValues, handleSelectImageFn} = props
    const [redirect, setRedirect] = useState(false)
    const [imageData, setData] = useState(null)


    useEffect(() => {
        getProfileImages(imageValues.el.user_id)
    },[imageValues.el.user_id])
    
    const download = async() => {
        const file = await axios.post('/api/download', {filePath: imageValues.el.link}, {responseType: 'blob'})
        let fileName = imageValues.el.link.substr(imageValues.el.link.lastIndexOf("/") + 1)
        saveAs(new Blob([file.data], {type:'image/*'}), fileName);
    }

    const getProfileImages = (id) => {
        axios.get(`/api/photos/${id}`) 
        .then(res=>{
           setData(res.data)
           localStorage.setItem('data', JSON.stringify(res.data))
        //  console.log("res data in profile page: ",res.data);
        }).catch(error =>{console.log(error)})
    }

    const goToProfile = () => {
        localStorage.setItem('imgValues', JSON.stringify(imageValues))
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
                avatar_link:  imageValues.el.avatar_link,
                background_link: imageValues.el.background_link,
                profile_id: imageValues.el.id,
                imageData: imageData
            }
                } />
        : null}
        </>
    )
}

export default ModalImage