import React from 'react'
import {connect} from 'react-redux'
import {ImageContainer, ListContainer, 
        CloseBox, EditBox, PhotoCard} from '../../../../styles/Pages/DashboardComponents'
import {CardImages} from '../../../../styles/Components/Cards'

const ImageList = (props) => {
    const {dataValues, toggleFn, toggleEditFn, 
           setImageInfoFn} = props
        //    console.log("dataValues ", dataValues);

    let images = dataValues.map( el =>{
        return <PhotoCard key={el.title}>
                    <CloseBox onClick={()=> {toggleFn(); setImageInfoFn([el.id, el.link,])}}></CloseBox>
                    <EditBox onClick={()=> {toggleEditFn();setImageInfoFn([el.id, el.link, el.title, el.tags])}}></EditBox>
                        <CardImages loading="lazy"  src={el.link} alt={el.title}/>
                </PhotoCard>           
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