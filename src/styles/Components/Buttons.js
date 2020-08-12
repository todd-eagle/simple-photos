import styled from 'styled-components'

export const StyledButton = styled.button`
    padding: 1rem 1.5rem;
    border: none;
    background-color: #333;
    border-radius: 5px;
    color: #fff;
    font-size:1.6rem;
    font-weight: 600;
    box-shadow: 0px 2px 5px 0px rgba(166,164,166,1);
  
    cursor: pointer;

    &:hover {
        background-color: rgb(87, 87, 87);
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    width: 85%;
`