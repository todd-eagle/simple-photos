import styled, {css}  from 'styled-components'

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding: 5rem;
    flex-wrap: wrap;
`
export const ProfileImage = styled.img`
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    cursor: pointer;

    @media only screen and (max-width: 100rem) {
        width: 25rem;
        height: 25rem;
    }

    @media only screen and (max-width: 80rem) {
        width: 20rem;
        height: 20rem;
    }

    ${(props) =>props.imageType ==='background' && css`
        width:auto;
        border-radius: 5px;

        @media only screen and (max-width: 100rem) {
            width:auto;
        }
    `
    }
`
export const ProfileContainer = styled.div`
    display: flex;
    margin-top: 4rem;
    max-width: 100rem;
    @media only screen and (max-width: 50rem) {
        flex-wrap: wrap;
        justify-content: center;
    }
`
export const ProfileBackgroundImage = styled.img`
    height: 25rem;
    width: auto;
`
export const Upload = styled.div`
    display: flex;
    justify-content: center;
    /* width: 25rem; */
    outline:none;
`
export const UploadWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 4rem 0 4rem;
`
export const ProfileText = styled.div`
    text-align: center;
    padding: 0 2rem;
    font-size: 2rem;
    height: 2.5rem;
    flex-basis: 100%;
`
