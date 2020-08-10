import styled, {keyframes} from 'styled-components'

export const Fadein = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const Fadeout = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`