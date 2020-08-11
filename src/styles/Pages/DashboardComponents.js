import style from 'styled-components'
import closeIcon from '../../assets/images/x-mark-128.png'

export const Photos = style.div`
` 

export const ImageContainer = style.div`
    max-width: 130rem;
    column-count: 3;
    column-gap: 2rem;
`

export const ListContainer = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CloseBox = style.div`
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