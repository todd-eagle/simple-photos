import React from 'react'

const Form = (props) => {
    const {inputData, formStyle='form-style default', heading="Haeding Goes Here"} = props
    const inputs = inputData.map( (el, index) => {
        return <input key={el.property + index} type={el.type} id={el.property}
            name={el.property} placeholder={el.property} 
            onChange={e => el.setState(e.target.value)} />
    })
    return (
        <form className={formStyle}>
                <h2>{heading}</h2>
                {inputs}
        </form>        
    )
}

export default Form