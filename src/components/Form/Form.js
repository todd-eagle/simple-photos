import React from 'react'

const Form = (props) => {
    const {inputData, onChange, formStyle='form-style default', heading="Heading Goes Here"} = props
    const inputs = inputData.map( (el, index) => {
        return <input key={el.property + index} type={el.type} id={el.property}
            value={el.value || ''} name={el.property} placeholder={el.property} 
            onChange={onChange} />
    })
    return (
        <form className={formStyle}>
                <h2>{heading}</h2>
                {inputs}
        </form>        
    )
}

export default Form