import React, {useEffect} from 'react' 
import {connect} from 'react-redux'
import ImagesContainer from '../../ImagesContainer/ImagesContainer'
import {Hero, HeroSearchBox, HeroSearchInput, 
        HeroSearchButton} from '../../../styles/Pages/StyledLandingPage'

const LandingPage = (props) => {
    const {imageData, setSearchFn, handleSubmitFn, handleSelectImageFn} = props

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    return(
        <>
        <Hero>
            <HeroSearchBox>
                <HeroSearchButton onClick={()=>handleSubmitFn()}></HeroSearchButton>
                    <HeroSearchInput onChange={(e) => setSearchFn(e.target.value)} placeholder="Search Images" id="search" name="search"/>
            </HeroSearchBox>
        </Hero>
        <ImagesContainer imageData={imageData}  handleSelectImageFn={handleSelectImageFn}/>
        </>
    )
}
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(LandingPage)