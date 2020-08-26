import React  from 'react'
import {StyledButton} from '../../styles/Components/Buttons'

const Button = (props) => {
    const {children='', onClick, type='button', formValid} = props
 console.log("formValid: ", formValid)

 
    return (
        <StyledButton formValid={formValid} invalidButton onClick={onClick} type={type}>
            {children}
        </StyledButton>
    )
}

export default Button