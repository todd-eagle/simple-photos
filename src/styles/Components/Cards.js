import styled from 'styled-components'
import {FadeIn} from '../Base/Animation'

export const ImageCard = styled.div`
    position: relative;
    z-index: 90;
    img {
        width: 100% !important;
        height: auto !important;
        margin-bottom: 2rem;
        animation: ${FadeIn} 1.5s ease-in;
    }
    &:hover {
            z-index: 91;
            filter: brightness(85%);
            cursor: pointer;
    }
`