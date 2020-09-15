import React from 'react'
import {connect} from 'react-redux'
import {useDropzone} from 'react-dropzone'
import {Upload, ProfileImage} from '../../../styles/Pages/Profile'
import {SaveButton, SaveButtonContainer} from '../../../styles/Components/Buttons'

const UploadFile  = ({onDrop, accept, children, preview=null, handleSubmitFn, resetDragNDropFn, toggle}) => {
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
        <>
        <Upload {...getRootProps()}>
            <input {...getInputProps()} />
            {!preview ? 
                children
             :
             <>
             <ProfileImage src={preview} alt="My profile pic"/> 
             </>
            }
           
        </Upload>
        
        {toggle ? saveButton : null}
        </>
    )
}
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(UploadFile)