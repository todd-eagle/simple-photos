import React, {useState} from 'react' 
import axios from 'axios';
import AuthForm from '../Form/Form';
import  Button  from '../Button/Button'

const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async e =>{
        try {
            await axios.post('/api/auth/user', {email, password})
            props.history.push('/dashboard')
            
        }catch(err){
            console.log(err)
        }           
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
             <Button  onClick={handleSubmit}>
                Login
            </Button>
        </>
    )
}

export default Login