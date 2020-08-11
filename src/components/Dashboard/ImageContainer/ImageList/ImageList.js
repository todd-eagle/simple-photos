import React from 'react'
import {connect} from 'react-redux'
import {ImageContainer} from '../../../../styles/Pages/DashboardComponents'
import {ImageCard} from '../../../../styles/Components/Cards'

const ImageList = (props) => {
    const {dataValues, toggleFn, idLinkDataFn} = props
    let images = dataValues.map((el, index) =>{
        return <ImageCard key={el.title}>
                    {/* <div className="options"><span onClick={()=> {toggleFn();  idLinkDataFn(el.id, el.link)}}>Remove</span></div> */}
                        <img src={el.link} alt={el.title}/>
                    {/* <div><div>{el.title}</div><div>{el.tags}</div></div> */}
                </ImageCard>           
    })

    return (
        <ImageContainer>
            {images}
        </ImageContainer>
    )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(ImageList)