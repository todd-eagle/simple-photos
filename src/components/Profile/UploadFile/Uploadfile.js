import React from 'react'
import {connect} from 'react-redux'
import {useDropzone} from 'react-dropzone'
import {Upload, ProfileImage, UploadWrapper} from '../../../styles/Pages/Profile'
import {SaveButton, SaveButtonContainer} from '../../../styles/Components/Buttons'

const UploadFile  = ({onDrop, accept, children, preview=null, handleSubmitFn, resetDragNDropFn, toggle, imageType}) => {
    const { getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept
    })

   const saveButton = preview ? <SaveButtonContainer>
                        <SaveButton onClick={()=>{handleSubmitFn(); resetDragNDropFn()}}>
                            Save
                        </SaveButton>
                      </SaveButtonContainer> : null
    // const inputs = !preview ?  <input {...getInputProps()} /> : null;                  
 
//    console.log("preview ", preview)
    return (
        <UploadWrapper>
        <Upload {...getRootProps()}>
            <input {...getInputProps()} />
            {!preview ? 
                children
             :
             <>
             <ProfileImage imageType={imageType} src={preview} alt="My profile pic"/> 
             </>
            }
           
        </Upload>
        
        {toggle ? saveButton : null}
        </UploadWrapper>
    )
}
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(UploadFile)