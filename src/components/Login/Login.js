import React, {useState} from 'react' 
import axios from 'axios';
import AuthForm from '../Form/Form'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandle = async e =>{
        const login = await axios.get('/api/auth', {email, password})
    }

    return (
        <>
        <AuthForm 
                inputData={
                    [{type: 'text', property: 'email', setState: setEmail}, 
                    {type: 'password', property: 'password', setState: setPassword}]
                }
                formStyle= "auth-box" 
                heading="Login"  
            />
        </>
    )
}

export default Login