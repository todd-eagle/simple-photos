import React from 'react'
import {connect} from 'react-redux'
import {ImageContainer, ListContainer, CloseBox} from '../../../../styles/Pages/DashboardComponents'
import {ImageCard} from '../../../../styles/Components/Cards'

const ImageList = (props) => {
    const {dataValues, toggleFn, idLinkDataFn} = props
    let images = dataValues.map( el =>{
        return <ImageCard key={el.title}>
                    <CloseBox onClick={()=> {toggleFn();  idLinkDataFn(el.id, el.link)}}></CloseBox>
                    {/* <EditBox></EditBox> */}
                        <img src={el.link} alt={el.title}/>
                    {/* <div><div>{el.title}</div><div>{el.tags}</div></div> */}
                </ImageCard>           
    })

    return (
        <ListContainer>
            <ImageContainer>
                {images}
            </ImageContainer>
        </ListContainer> 
    )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps)(ImageList)