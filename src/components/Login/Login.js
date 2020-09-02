import React, {useState, useEffect, useCallback} from 'react' 
import axios from 'axios';
import AuthForm from '../Form/Form'
import {connect} from 'react-redux'
import {login} from '../../redux/reducers/AuthReducer'
import Button from '../Button/Button'
import {capitalize} from '../Utilities/Helpers'
import auth from '../Auth/auth'
import {Modal} from '../../styles/Components/Modals'
import {LoginContainer, LoginClose, LogoImage,
        LogoContainer, LogoText} from '../../styles/Components/Forms'
import loginLogo from '../../assets/images/logo-dark.png'
import { withRouter } from 'react-router-dom'

const Login = (props) => {
     
    const [values, setValues] = useState({})
    const [errors, setErrors] = useState({})
    const [formValid, setFormValid] = useState(false)

    const pathname = props.pathName
    const name = capitalize(pathname.substr(0));
    
    const handleSubmit = async e => {
        const {email, password} = values
        e.preventDefault()
        let path ='No path value'
        pathname.includes('register') ? path='/api/auth' : path='/api/auth/user'      
        try {
            const loginInfo = await axios.post(path, {email, password})
            props.login(loginInfo.data)
            auth.isLoggedIn(true)
            props.logginToggleFn()
            props.history.push('/dashboard')   
        } catch(err) {
            const errorMsg = err.message.includes('409') ?
            'Account already exists. Please try logging in.' :
            'Email or password is incorrect.'
            errors.form = errorMsg;
            setErrors(errors)
            setFormValid(false)
            console.log(err) 
        }           
    }

    const handleChange = (e) => {
        e.persist()
        setValues(values => ({ ...values, [e.target.name]: e.target.value.trim()}))        
    }
    const validate = useCallback((values) => {
        let errors = {}
        let valid = {}

        if(values.email) {
            if (!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = 'Email address is invalid'
            }else {valid.email=true}
        }

        if(values.password) {
            if (values.password.length < 8) {
                errors.password = 'Password must be 8 or more characters'
            }else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(values.password)){
                errors.password = 'Password must contain at least one uppercase letter, ' + 
                                  'one lowercase letter one number and one special character ' +
                                  '(!@#$%)'
            }else{valid.password=true}
        }
        
        if(values.confirm_password) {
            if (values.password !== values.confirm_password){
                errors.confirm_password = 'Passwords do not match'
            }else{valid.confirm_password=true}
        }
        
        setErrors(errors)
        // console.log("errors:", errors)
        const {email, password, confirm_password} = valid
        if( pathname.includes('register')){email && password && confirm_password ? setFormValid(true) : setFormValid(false)}
        if(!pathname.includes('register')){setErrors({}); email && password ? setFormValid(true) : setFormValid(false)}

    },[pathname])

    useEffect(() => {  
        validate(values)
    }, [validate, values])

    let  inputData=[
            {type: 'text', property: 'email', value: values.email}, 
            {type: 'password', property: 'password',  value: values.password}
        ]

    if (pathname.includes('register')) {
            inputData.push( {type: 'password', property: 'confirm_password', value: values.confirm_password})   
    }
    
    return (
        <Modal>
            <LoginContainer>
                <LoginClose onClick={()=>props.logginToggleFn()}></LoginClose>
                <LogoContainer>
                    <LogoImage src={loginLogo} alt="Simple Photo Logo"/>
                    <LogoText>SimplePhoto</LogoText>
                </LogoContainer>    
                <AuthForm
                    width="95%"
                    inputData={inputData}
                    errors={errors}
                    onChange={handleChange}
                    heading={name}
                />
                <Button formValid={formValid} onClick={formValid ? handleSubmit: null}>
                    {name}
                </Button>
                </LoginContainer>    
        </Modal>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps, {login})(withRouter(Login))