import React from 'react' 
import {connect} from 'react-redux'

import {Hero, HeroSearchBox, HeroSearchInput, 
        HeroSearchButton, LandingImageContainter,
        LandingImageCard, ImageWrapper} from '../../../styles/Pages/StyledLandingPage'
import {CardImages} from '../../../styles/Components/Cards'
const LandingPage = (props) => {
    const {imageData} = props

    let images = imageData.map( el =>{
        return <LandingImageCard key={el.title}>
                        <CardImages loading="lazy" src={el.link} alt={el.title}/>
                    {/* <div><div>{el.title}</div><div>{el.tags}</div></div> */}
                </LandingImageCard>           
    })

    return(
        <>
        <Hero>
            <HeroSearchBox>
                <HeroSearchButton></HeroSearchButton>
                    <HeroSearchInput placeholder="Search Images"/>
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
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(LandingPage)