import React from 'react'
import {useDropzone} from 'react-dropzone'

const DragNDropArea = ({onDrop, accept, maxSize} ) => {

    const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
        onDrop,
        accept,
        maxSize,
      })
    
    const fileStatus = () =>{
        return  isDragActive && !isDragReject ? "Release to drop your image here" :
                isDragActive &&  isDragReject ? "Wrong file type" :   
                "Drag 'n' drop your image here, or click to select a file"
    }

    return (
       <div {...getRootProps()}>
           <input {...getInputProps()} />
           <div className="text-center">
            <p>{fileStatus()}</p>
      </div>
       </div>
    )
}

export default DragNDropArea

