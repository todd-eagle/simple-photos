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
    height: 70vh;
    margin-top: -6rem;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${HeroBackground});
`
export const HeroSearchBox =styled.div`
    display: flex;
    background-color: #ffffff;
    border-radius: 8px;
    width: 40%;
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
    border-left: 1.5px solid rgb(226, 226, 226);
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
