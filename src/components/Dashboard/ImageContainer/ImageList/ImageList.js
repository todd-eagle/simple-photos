import React, {useState} from 'react'
import {connect} from 'react-redux'

const ImageList = (props) => {
    const {imageDatafn, deleteImageFn, editImageFn} = props


}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(ImageList)