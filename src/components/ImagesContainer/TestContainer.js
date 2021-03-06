import React, {useState, useEffect} from 'react'
import {LandingImageContainter,
    LandingImageCard, ImageWrapper} from '../../styles/Pages/StyledLandingPage'
import {CardImages} from '../../styles/Components/Cards'

const TestContainer = (props) => {

 let [number, setNumber] = useState(0)   

    const {imageData, handleSelectImageFn} = props
     
    let images = imageData.map( el =>{
        return <LandingImageCard key={el.title} onClick={()=>handleSelectImageFn({el})}>
                        <CardImages loading="lazy" src={el.link} alt={el.title}/>
                </LandingImageCard>           
    })
    
    return(
        <ImageWrapper>
            <LandingImageContainter>
                {images}
            </LandingImageContainter>
        </ImageWrapper>
        )
}

export default TestContainer