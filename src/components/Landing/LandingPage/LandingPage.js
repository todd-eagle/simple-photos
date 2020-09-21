import React from 'react' 
import {connect} from 'react-redux'

import {Hero, HeroSearchBox, HeroSearchInput, 
        HeroSearchButton, LandingImageContainter,
        LandingImageCard, ImageWrapper} from '../../../styles/Pages/StyledLandingPage'
import {CardImages} from '../../../styles/Components/Cards'

const LandingPage = (props) => {
    const {imageData, setSearchFn, handleSubmitFn} = props

    let images = imageData.map( el =>{
        return <LandingImageCard key={el.title}>
                        <CardImages loading="lazy" src={el.link} alt={el.title}/>
                </LandingImageCard>           
    })

    return(
        <>
        <Hero>
            <HeroSearchBox>
                <HeroSearchButton onClick={handleSubmitFn}></HeroSearchButton>
                    <HeroSearchInput onChange={(e) => setSearchFn(e.target.value)} placeholder="Search Images" id="search" name="search"/>
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