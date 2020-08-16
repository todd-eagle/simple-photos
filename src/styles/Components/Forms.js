import styled from 'styled-components'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: ${(props) => props.width};

`

export const StyledInput = styled.input`
    width: 100%;
    margin-bottom: .5rem;
    padding: 1rem;
    font-size: 1.6rem
`