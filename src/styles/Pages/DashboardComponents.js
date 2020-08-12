import styled from 'styled-components'
import closeIcon from '../../assets/images/x-mark-128.png'
import editIcon from '../../assets/images/edit-12-128.png'

export const Photos = styled.div`
` 

export const ImageContainer = styled.div`
    max-width: 130rem;
    column-count: 3;
    column-gap: 2rem;
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CloseBox = styled.div`
    position: absolute;
    right: 0;
    height: 3rem;
    width: 3rem;
    z-index: 5;
    cursor: pointer;
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