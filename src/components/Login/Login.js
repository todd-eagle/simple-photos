import React, {useState} from 'react' 
import axios from 'axios';
import AuthForm from '../Form/Form';
import Button from '../Button/Button'
import {capitalize} from '../Utilities/Utilities'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {pathname} = props.location
    const name = capitalize(pathname.substr(1));

    const handleSubmit = async e => {
        let path ='Initial value'
        pathname.includes('register') ? path='/api/auth' : path='/api/auth/user'      
        try {
            const t = await axios.post(path, {email, password})
            console.log(t)
            props.history.push('/dashboard')   
        } catch(err) { console.log(err) }           
    }
    
    return (
        <>
            <AuthForm 
                inputData={
                    [{type: 'text', property: 'email', setState: setEmail}, 
                    {type: 'password', property: 'password', setState: setPassword}]
                }
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