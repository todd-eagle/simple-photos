import styled from 'styled-components'
// import profileBackground from '../../assets/images/cityscape.jpg'

// const {background_link} = props.profile.profileInfo

export const ProfileHeaderImage = styled.img`
    position: absolute;
    left: 5rem;
    top: 39rem;
    border-radius: 50%;
    height: 18rem;
    width: 18rem;
    z-index: 97;
    box-shadow: 0px 7px 13px -1px rgba(0,0,0,0.75);

    @media only screen and (max-width: 100rem) {
        top: 34rem;
        height: 16rem;
        width: 16rem;
    }
    @media only screen and (max-width: 60rem) {
        top: 28rem;
        height: 12rem;
        width: 12rem;
    }
    @media only screen and (max-width: 40rem) {
        top: 19rem;
        height: 10rem;
        width: 10rem;
    }
`
export const ProfileHeaderText = styled.p`
    font-size: 1.8rem;
    font-weight: 600;
    margin-top: 1rem;
    color: #ffffff
`