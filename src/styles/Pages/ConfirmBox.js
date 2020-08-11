import style from 'styled-components'

export const Container = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color:#fafafafa;
    padding: 2rem;
    border-radius: 5px;
    border: 2px solid lightblue;
    box-shadow: 0px 4px 6px 0px #858585;
    p {
        font-size: 2.2rem;
        padding:3rem;
    }
`
export const ButtonContainer = style.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 3rem;
    width: 82%;

`