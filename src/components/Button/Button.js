import React  from 'react'

const Button = (props) => {
    const {children='', onClick, type='button', buttonStyle='btn default'} = props

    return (
        <button onClick={onClick} type={type} className={buttonStyle}>
            {children}
        </button>
    )
}

export default Button