import React from 'react'
import {connect} from 'react-redux'
import {ImageContainer, ListContainer, 
        CloseBox, EditBox} from '../../../../styles/Pages/DashboardComponents'
import {ImageCard} from '../../../../styles/Components/Cards'

const ImageList = (props) => {
    const {dataValues, toggleFn, toggleEditFn, setImageInfoFn} = props
    let images = dataValues.map( el =>{
        return <ImageCard key={el.title}>
                    <CloseBox onClick={()=> {toggleFn(); setImageInfoFn([el.id, el.link,])}}></CloseBox>
                    <EditBox onClick={()=> {toggleEditFn(); setImageInfoFn([el.id, el.link, el.title, el.tags])}}></EditBox>
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