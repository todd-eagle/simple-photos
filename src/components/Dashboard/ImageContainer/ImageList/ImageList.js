import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

const ImageList = (props) => {
    const {dataValues, deleteImageFn, editImageFn,} = props
    let images = dataValues.map((el, index) =>{
        return <div key={el.title} className="image-container">
            <div className="options"><span onClick={()=> deleteImageFn()}>Remove</span></div>
                    <img src={el.link} alt={el.title}/>
                    <div><div>{el.title}</div><div>{el.tags}</div></div>
                </div>           
    })

    return (
        <div className="images">
            {images}
        </div>
    )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(ImageList)