import styled from 'styled-components'
import {FadeIn} from '../Base/Animation'

export const ImageCard = styled.div`
    position: relative;
    img {
        width: 100% !important;
        height: auto !important;
        margin-bottom: 2rem;
        animation: ${FadeIn} 1.5s ease-in;

        &:hover {
            filter: brightness(85%);
            cursor: pointer;
        }
    }
`