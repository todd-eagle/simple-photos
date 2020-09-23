import React from 'react'
import {StyledForm, StyledInput, ValidationText, Heading2, FormWrapper} from '../../styles/Components/Forms'
import uniqid from 'uniqid'

const Form = (props) => {
    const {inputData, onChange, heading="Heading Goes Here", width, errors } = props
    
    const inputs = inputData.map( (el, index) => {
        return <FormWrapper key={el.property + index +'frm'}>
            {errors ?
            <ValidationText>{errors[el.property]}</ValidationText> : null}
            <StyledInput key={el.property + index} type={el.type} id={el.property}
            value={el.value || ''} name={el.property} placeholder={el.property} 
            onChange={onChange} />
           </FormWrapper>
    })
    return (
        <StyledForm width={width}>
                <Heading2>{heading}</Heading2>
                {inputs}
                {errors ?
            <ValidationText>{errors.form}</ValidationText> : null}
        </StyledForm>        
    )
}

export default Form