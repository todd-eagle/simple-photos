import React from 'react'
import {useDropzone} from 'react-dropzone'

const DragNDropArea = ({onDrop, accept, maxSize, multiple, preview=null, handleDeleteFn}) => {
    const { getRootProps, getInputProps, isDragActive, isDragReject, 
            fileRejections} = useDropzone({
        onDrop,
        accept,
        maxSize,
        multiple
    })
    
    const fileStatus = () => { 

       if(fileRejections.length > 0 && fileRejections[0].errors[0].message) {
           return `${fileRejections[0].errors[0].message}`
        }

        return  isDragActive && !isDragReject ? "Release to drop your image here" :
                isDragActive &&  isDragReject ? "This file type is not accepted" :
                "Drag 'n' drop your image here, or click to select a file"
    }
    
    return (
        <>
        { 
            !preview ?
            <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className="text-center">
                        <p>{fileStatus()}</p> 
                    </div>
            </div>
            :
            <div className="image-wrapper">
                <div onClick={e => handleDeleteFn()} className="close">X</div>
                <img src={preview} alt="Preview"/>
            </div>
        }            
        </>
    )
}

export default DragNDropArea

