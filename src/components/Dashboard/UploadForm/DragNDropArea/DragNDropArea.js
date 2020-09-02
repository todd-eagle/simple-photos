import React from 'react'
import {connect} from 'react-redux'
import {useDropzone} from 'react-dropzone'
import DragNDropForm from '../../../Form/Form'
import Button from '../../../Button/Button'
import {Modal} from '../../../../styles/Components/Modals'
import {DragAndDropBox, DragAndDropTextWrapper, CloseContent,
        DragAndDropContentWrapper, DragAndDropImage,
        CloseDragAndDrop} from '../../../../styles/Pages/DrapandDropBox'

const DragNDropArea = ({onDrop, accept, maxSize, multiple, preview=null, 
                        deletePreviewFileFn, handleChangeFn,  handleSubmitFn,
                        values, dragNDropToggleFn}) => {
    const { getRootProps, getInputProps, isDragActive, isDragReject, 
            fileRejections} = useDropzone({
        onDrop,
        accept,
        maxSize,
        multiple,
    })

    const constants = {formWidth: '55%'}

    const fileStatus = () => { 

       if(fileRejections.length > 0 && fileRejections[0].errors[0].message) {
           return `${fileRejections[0].errors[0].message}`
        }

        return  isDragActive && !isDragReject ? "Release to drop your image here" :
                isDragActive &&  isDragReject ? "This file type is not accepted" :
                "Drag 'n' drop your image here, or click to select a file."
    }

    const inputProps = <input {...getInputProps()} />
    
    return (
        <Modal> 
            <CloseDragAndDrop onClick={() => dragNDropToggleFn()}></CloseDragAndDrop>   
            <DragAndDropBox {...getRootProps()}>
                   {!preview ? inputProps : null }
                   {!preview ?
                    <DragAndDropTextWrapper>
                        {fileStatus()}
                    </DragAndDropTextWrapper> : null }
                    { preview ? 
                        <DragAndDropContentWrapper>  
                        <CloseContent onClick={() => deletePreviewFileFn()}></CloseContent>
                            <DragAndDropImage src={preview} alt="Preview"/>
                                <DragNDropForm width={constants.formWidth}
                                inputData={
                                    [{type: 'text', property: 'title', value: values.title}, 
                                    {type: 'text', property: 'tags',  value: values.tags}]
                                }
                                onChange={handleChangeFn}
                                heading='' />
                            <Button  onClick={handleSubmitFn}>
                                Submit Photo
                            </Button>         
                        </DragAndDropContentWrapper>  
                    : null}       
            </DragAndDropBox>
               
        </Modal>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(DragNDropArea)

