import styled from 'styled-components'
import HeroBackground from '../../assets/images/tim-swaan-eOpewngf68w-unsplash.jpg'
import searchImage from '../../assets/images/search.png'
import {ImageContainer} from '../Pages/DashboardComponents'
import {ImageCard} from '../Components/Cards'


export const Hero =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90vh;
    margin-top: -6rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${HeroBackground});
    
    @media only screen and (max-width: 100rem) {
            height: 70vh;
    }
    @media only screen and (max-width: 60rem) {
            height:50vh;
    }
    @media only screen and (max-width: 40rem) {
            height:30vh;
    }
`
export const HeroSearchBox =styled.div`
    display: flex;
    background-color: #ffffff;
    border-radius: 8px;
    width: 40%;

    @media only screen and (max-width: 100rem) {
        width: 50%;
    }
    @media only screen and (max-width: 60rem) {
        width: 60%;
    }
    @media only screen and (max-width: 40rem) {
        width: 70%;
    }
`
export const HeroSearchButton = styled.button`
    padding: .2rem 1rem;
    width: 6rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
    background-image: url(${searchImage});
    background-size: 55%;
    background-position: center;
    background-repeat: no-repeat;
`
export const HeroSearchInput =styled.input`
    background-color: transparent;
    border: none;
    height: 5rem;
    border-left: 1.5px solid #e2e2e2;
    padding-left: 1rem;
    font-size: 2rem;
    color: #8a8a8a;
    width: 100%;
`
export const ImageWrapper = styled(ImageCard)`
    display: flex;
    flex-direction: column;
    align-items:center;
`
export const LandingImageContainter = styled(ImageContainer)`
    font-size:2rem;
    
`
export const LandingImageCard = styled(ImageCard)`
    font-size: 2rem;
`

