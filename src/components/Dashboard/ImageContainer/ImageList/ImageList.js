import React from 'react'
import {connect} from 'react-redux'

const ImageList = (props) => {
    const {dataValues, toggleFn, idLinkDataFn} = props
    let images = dataValues.map((el, index) =>{
        return <div key={el.title} className="image-container">
                    <div className="options"><span onClick={()=> {toggleFn();  idLinkDataFn(el.id, el.link)}}>Remove</span></div>
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