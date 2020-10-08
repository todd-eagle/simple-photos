import React from 'react'
import {LandingImageContainter,
    LandingImageCard, ImageWrapper} from '../../styles/Pages/StyledLandingPage'
import {CardImages} from '../../styles/Components/Cards'
import { Redirect, withRouter } from 'react-router-dom'

const ImagesContainer = (props) => {
//  console.log(" props.location: ", props.location)
    let {imageData, handleSelectImageFn} = props

    let images=null

    if(imageData===undefined)
        imageData = JSON.parse(localStorage.getItem("data"))

    // console.log("IMAGE DATA: ", imageData)

    if(imageData!==undefined){
        images = imageData.map( el =>{
            return <LandingImageCard key={el.title} onClick={()=>handleSelectImageFn({el})}>
                            <CardImages loading="lazy" src={el.link} alt={el.title}/>
                    </LandingImageCard>           
        })
    }

    return(
        <>
        {images ?
            <ImageWrapper>
                <LandingImageContainter>
                    {images}
                </LandingImageContainter>
            </ImageWrapper>
        : 
        <Redirect to='/' />}
        </>
        )
}

export default withRouter(ImagesContainer)