import style from 'styled-components'

export const Container = style.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background-color:#fafafafa;
    padding: 1rem;
    border-radius: 5px;
    border: 2px solid lightblue;
    box-shadow: 0px 4px 6px 0px #858585;
    p {
        font-size: 2.2rem;
        padding:2rem;
    }
`
export const ButtonContainer = style.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    width: 85%;
`

export const ConfirmImage = style.img`
    width: 16vw;
    padding-top: 1rem;
`