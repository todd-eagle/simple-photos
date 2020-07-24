import React, {useState} from 'react' 
import axios from 'axios';
import AuthForm from '../AuthForm/AuthForm'


const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const loginHandle = async e =>{
        const register = await axios.post('/api/auth/register', {email, password})
    }

    return <>
            <AuthForm 
                inputData={
                    [{type: 'text', property: 'email', setState: setEmail}, 
                     {type: 'password', property: 'password', setState: setPassword}]
                }
                outerCss="auth-page"
                innerCss= "auth-box" 
                heading="Register"  
            />
            </>
}

export default Register