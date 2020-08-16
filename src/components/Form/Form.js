import React from 'react'
import {StyledForm, StyledInput} from '../../styles/Components/Forms'

const Form = (props) => {
    const {inputData, onChange, heading="Heading Goes Here", width} = props
    const inputs = inputData.map( (el, index) => {
        return <StyledInput key={el.property + index} type={el.type} id={el.property}
            value={el.value || ''} name={el.property} placeholder={el.property} 
            onChange={onChange} />
    })
    return (
        <StyledForm width={width}>
                <h2>{heading}</h2>
                {inputs}
        </StyledForm>        
    )
}

export default Form