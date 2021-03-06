import styled from 'styled-components'
import closeIcon from '../../assets/images/x-mark-128.png'
import editIcon from '../../assets/images/edit-12-128.png'
import {ImageCard} from '../Components/Cards'

export const Photos = styled.div`
` 
export const ImageContainer = styled.div`
    max-width: 130rem;
    column-count: 3;
    column-gap: 2rem;
    padding: 5rem 5rem 0;
    flex: 1;

    @media only screen and (max-width: 60rem) {
        column-count: 2;
        padding: 3rem;
    }
    @media only screen and (max-width: 40rem) {
        column-count: 1;
        padding: 2rem;
    }
`
export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`
export const CloseBox = styled.div`
    position: absolute;
    right: 0;
    height: 3rem;
    width: 3rem;
    z-index: 75;
    cursor: pointer;
    /* top: -3rem;
    opacity: 0; */

    top: 0;
    opacity: 1;

    background-image: url(${closeIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 60%;
`
export const EditBox = styled(CloseBox)`
    right: 3rem;
    background-image: url(${editIcon});
`
export const PhotoCard = styled(ImageCard)`
 & :hover > ${EditBox} {
    opacity: 1;
    background-color: #000;
 }
`
export const UploadBarWrapper = styled.div`
    position: sticky;
    top: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7rem;
    width: 100%;
    background-color: rgb(250, 250, 250);
    border-bottom: 1.5px solid rgb(199, 199, 199);
    z-index: 85;
    padding: 5rem;
`
export const UploadBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 125rem;
    padding: 0 2rem;
`
export const PhotoCount = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`
