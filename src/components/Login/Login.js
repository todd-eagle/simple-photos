import React, {useState, useEffect} from 'react' 
import axios from 'axios';
import AuthForm from '../Form/Form'
import {connect} from 'react-redux'
import {login} from '../../redux/reducers/AuthReducer'
import Button from '../Button/Button'
import {capitalize} from '../Utilities/Helpers'
import auth from '../Auth/auth'

const Login = (props) => {
     
    // a useState that accepts objects - will turn into a form hook later
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})

    const {pathname} = props.location
    const name = capitalize(pathname.substr(1));
    
    const handleSubmit = async e => {
        const {email, password} = values
        e.preventDefault()
        let path ='Initial value'
        pathname.includes('register') ? path='/api/auth' : path='/api/auth/user'      
        try {
            const loginInfo = await axios.post(path, {email, password})
            props.login(loginInfo.data)
            auth.isLoggedIn(true)
            props.history.push('/dashboard')   
        } catch(err) { console.log(err) }           
    }

    useEffect(() => {
       
        console.log("values inside useEffect",  validate(values))
    }, [values])

    const handleChange = (e) => {
        e.persist()
        // console.log("handleChange values ", e.target.value) 
        setValues(values => ({ ...values, [e.target.name]: e.target.value}))
        console.log("values inside setvalues", values)
        
    }

    const validate = (values) =>{
        let errors = {}
        if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
            errors.email = 'Email address is invalid';
        }

        if ( values.password && values.password.length < 8) {
            errors.password = 'Password must be 8 or more characters';
        }

         console.log("errors ", errors)
        setErrors(errors)
        return errors;
    }
    
    return (
        <>
            <AuthForm 
               inputData={
                [{type: 'text', property: 'email', value: values.email}, 
                {type: 'password', property: 'password',  value: values.password}]
                }
                errors={errors}
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

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps, {login})(Login)