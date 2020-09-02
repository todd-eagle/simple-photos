import styled, {css} from 'styled-components'
import {Colors} from '../Base/Colors'

export const StyledButton = styled.button`
    padding: 1rem 1.5rem;
    border: none;
    background-color: ${Colors.color.primary};
    border-radius: 5px;
    color:  ${Colors.color.fontSecondary};
    font-size:1.6rem;
    font-weight: 600;
    box-shadow: 0px 2px 5px 0px rgba(166,164,166,1);  
    cursor: pointer;

    &:hover {
        background-color: ${Colors.color.hoverLinkSecondary};
    }

    ${(props) => !props.formValid && typeof props.formValid !== 'undefined' ?

       (props) => props.invalidButton && css`   
            opacity: .2;
            &:hover {
            cursor:auto;
            background-color: ${Colors.color.primary};
            opacity: .2;
            }
            `
        : null
    }    
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2rem;
    width: 85%;
`
export const SaveButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const SaveButton = styled.button`
    margin-top: 1.5rem;
    font-size: 1.7rem;
    padding: 1rem 2rem;
    color: #ffffff;
    background-color: #4296cf;
    border: 2px solid #fafafa;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #2f88c4;
    }
`