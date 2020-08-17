import styled from 'styled-components'
import profileBackground from '../../assets/images/cityscape.jpg'

export const StyledProfileHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 18rem;
    background-color: #fff;
    border-bottom: #a3a3a3 solid 2px;
    background-image:  linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${profileBackground});
    background-position: center;
    background-size: cover;
`
export const ProfileHeaderImage = styled.img`
    border-radius: 50%;
    height: 10rem;
    width: 10rem;
    box-shadow: 0px 7px 13px -1px rgba(0,0,0,0.75);
`
export const ProfileHeaderText = styled.p`
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 1rem;
`