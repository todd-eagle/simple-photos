import styled from 'styled-components'

export const ImagePlate = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #fafafafa;
    padding: .5rem 1rem;
    height: auto;
    width: 30%;
   
    @media only screen and (max-width: 70rem) {
        height: auto;
        width: 45%;
    }
    @media only screen and (max-width: 50rem) {
        height: auto;
        width: 55%;
    }
` 
export const Image = styled.img`
    height: auto;
    width: 99%;
`
export const ImageInfo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem .2rem;
    font-size: 1.3rem;
`
export const TagText = styled.p`
`