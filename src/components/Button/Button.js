import React  from 'react'
import {StyledButton} from '../../styles/Components/Buttons'

const Button = (props) => {
    const {children='', onClick, type='button', buttonStyle='btn default'} = props

    return (
        <StyledButton onClick={onClick} type={type} className={buttonStyle}>
            {children}
        </StyledButton>
    )
}

export default Button