import React from 'react' 
import {Hero, HeroSearchBox, HeroSearchInput, 
        HeroSearchButton, LandingImageContainter,
        LandingImageCard, ImageWrapper} from '../../../styles/Pages/StyledLandingPage'

const LandingPage = (props) => {
    const {imageData} = props

    let images = imageData.map( el =>{
        return <LandingImageCard key={el.title}>
                        <img loading="lazy" src={el.link} alt={el.title}/>
                    {/* <div><div>{el.title}</div><div>{el.tags}</div></div> */}
                </LandingImageCard>           
    })

    return(
        <>
        <Hero>
            <HeroSearchBox>
                <HeroSearchButton></HeroSearchButton>
                    <HeroSearchInput />
            </HeroSearchBox>
        </Hero>
        <ImageWrapper>
            <LandingImageContainter>
                {images}
            </LandingImageContainter>
        </ImageWrapper>    
        </>
    )
}
export default LandingPage