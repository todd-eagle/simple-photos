import React, {useState} from 'react' 
import axios from 'axios';
import AuthForm from '../Form/Form';
import Button from '../Button/Button'
import {capitalize} from '../Utilities/Helpers'

const Login = (props) => {
     
    // a useState that accepts objects - will turn into a form hook later
    const [values, setValues] = useState({})

    const {pathname} = props.location
    const name = capitalize(pathname.substr(1));
    
    const handleSubmit = async e => {
        const {email, password} = values
        e.preventDefault()
        let path ='Initial value'
        pathname.includes('register') ? path='/api/auth' : path='/api/auth/user'      
        try {
            await axios.post(path, {email, password})
            props.history.push('/dashboard')   
        } catch(err) { console.log(err) }           
    }

    const handleChange = (e) => {
        e.persist();
        setValues(values => ({ ...values, [e.target.name]: e.target.value }));
    }
    
    return (
        <>
            <AuthForm 
               inputData={
                [{type: 'text', property: 'email', value: values.email}, 
                {type: 'password', property: 'password',  value: values.password}]
                }
                onChange={handleChange}
                formStyle= "auth-box" 
                heading={name}
            />
             <Button  onClick={handleSubmit}>
                {name}
            </Button>
        </>
    )
}

export default Login