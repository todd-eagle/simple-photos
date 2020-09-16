import styled, {css}  from 'styled-components'

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10rem;
    height: 75vh;
    flex-wrap: wrap;

`
export const ProfileImage = styled.img`
    width: 30rem;
    height: 30rem;
    border-radius: 50%;
    cursor: pointer;

    ${(props) =>props.imageType ==='background' && css`
        width:auto;
        border-radius: 5px;
    `
    }
`
export const ProfileContainer = styled.div`
    display: flex;
    max-width: 130rem;
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
    font-size: 2rem;
    height: 2.5rem;
    flex-basis: 100%;
`
