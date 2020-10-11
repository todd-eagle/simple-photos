import styled from 'styled-components'
// import profileBackground from '../../assets/images/cityscape.jpg'

// const {background_link} = props.profile.profileInfo

export const ProfileHeaderImage = styled.img`
    position: absolute;
    left: 5rem;
    top: 29rem;
    border-radius: 50%;
    height: 22rem;
    width: 22rem;
    z-index: 97;
    box-shadow: 0px 7px 13px -1px rgba(0,0,0,0.75);

    @media only screen and (max-width: 100rem) {
        top: 30rem;
        height: 16rem;
        width: 16rem;
    }
    @media only screen and (max-width: 60rem) {
        top: 24rem;
        height: 12rem;
        width: 12rem;
    }
    @media only screen and (max-width: 40rem) {
        top: 16rem;
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