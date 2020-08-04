import React, {useState} from 'react'
import {connect} from 'react-redux'

const ImageList = (props) => {
    const {imageDatafn, deleteImageFn, editImageFn} = props

    const images = imageDatafn.map((el, index) =>{
        return (
            <div className="image-container">
                <img src={require(`../../../${el.link}`)} alt={el.title}/>
            </div>
        )
    })

    return (
        <div className="images">
            {images}
        </div>
    )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(ImageList)