import styled from 'styled-components'
import profileBackground from '../../assets/images/cityscape.jpg'

// const {background_link} = props.profile.profileInfo

export const StyledProfileHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 24rem;
    background-color: #fff;
    border-bottom: #a3a3a3 solid 2px;
    background-image:  linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${props =>props.profile.profileInfo.background_link});
    background-position: center;
    background-size: cover;
`
export const ProfileHeaderImage = styled.img`
    position: absolute;
    left: 5rem;
    top: 19rem;
    border-radius: 50%;
    height: 18rem;
    width: 18rem;
    z-index: 97;
    box-shadow: 0px 7px 13px -1px rgba(0,0,0,0.75);
`
export const ProfileHeaderText = styled.p`
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 1rem;
    color: #ffffff
`