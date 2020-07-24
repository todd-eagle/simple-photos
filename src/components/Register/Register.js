import React, {useState} from 'react' 
import axios from 'axios';
import AuthForm from '../Form/Form'
import Button from '../Button/Button'


const Register = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async e =>{
        console.log(`CLICKED! email is: ${email} password is ${password}` )
        const register = await axios.post('/api/auth', {email, password})
    }

    return (
        <>
            <AuthForm 
                inputData={
                    [{type: 'text', property: 'email', setState: setEmail}, 
                     {type: 'password', property: 'password', setState: setPassword}]
                }
                formStyle= "auth-box" 
                heading="Register"  
            />
            <Button  onClick={handleSubmit}>
                Register
            </Button>
        </>
    )
}

export default Register