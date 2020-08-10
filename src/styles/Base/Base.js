import style, {createGlobalStyle} from 'styled-components'

export const GlobalResetStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html {
    box-sizing: border-box;
    /* 10px/16px = 62.5% -> 1rem = 10px */
    font-size: 62.5%; 
}

body {
    font-family:  'Open Sans', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    color: rgb(56, 56, 56);
    background-color: #F9F9FA;
}
`
export const Wrapper = style.div`
`