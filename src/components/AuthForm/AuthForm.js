import React from 'react'

const AuthForm = (props) => {
    const {inputData, outerCss, innerCss, 
           heading} = props
    const inputs = inputData.map( el => {
        return <input type={el.type} id={el.property}
            name={el.property} placeholder={el.property} 
            onChange={e => el.setState(e.target.value)} />
    })
    return <div> 
        <div className={outerCss}>
            <div className={innerCss}>
                <h2>{heading}</h2>
                {inputs}
            </div>
        </div>
    </div>
}

export default AuthForm