import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import logo from '../../assets/images/simplephoto.png'
import {logout} from '../../redux/reducers/AuthReducer';
import auth from '../Auth/auth'
import Login from '../Login/Login'

import {StyledHeader, HeaderMenu, HeaderTitle,
        HeaderLinks, HeaderLogo, BrandingArea} from '../../styles/Layout/StyledHeaders'

const Header = (props) => {
    
    let links = 'menus'
    
    console.log("isLoggedIn? ", props.isLoggedIn)

    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [pathName, setPathName] = useState('register')

    const logginToggle = () => {
        setIsLoginOpen(!isLoginOpen)
    }

    if(props.isLoggedIn ) {
         links = [
            {link1: '/dashboard', name1: 'Photos'},
            {link2: '/account', name2: 'Account'},
            {link3: '/profile', name3: 'Profile'},
            {link4: '', name4: 'Sign out'}
        ]
    }else {
         links = [
            {link1: props.location, name1: 'Sign in', signIn: (val) =>{logginToggle(); setPathName(val)}},
            {link2: props.location, name2: 'Register', register: (val) =>{logginToggle()}}
        ]
    }

    const [linkTo1, linkTo2, linkTo3, linkTo4] = links
    return (
        <>
        <StyledHeader>
            <BrandingArea>
            <Link to="/">
                <HeaderLogo src={logo} alt="Logo" />
                <HeaderTitle>
                    SimplePhoto
                </HeaderTitle> 
            </Link>       
            </BrandingArea>
        
        <HeaderMenu>
            <HeaderLinks><Link onClick={!props.isLoggedIn ? ()=> linkTo1.signIn('login'): null} to={linkTo1.link1}>{linkTo1.name1}</Link></HeaderLinks>
            <HeaderLinks><Link onClick={!props.isLoggedIn ? ()=> linkTo1.signIn('register'): null} to={linkTo2.link2}>{linkTo2.name2}</Link></HeaderLinks>
            {
                props.isLoggedIn ? 
                    <>
                    <HeaderLinks><Link to={linkTo3.link3}>{linkTo3.name3}</Link></HeaderLinks>
                    <HeaderLinks>
                        <Link onClick={(e)=>{props.logout(); auth.isLoggedIn(false)}} 
                            to={linkTo4.link4}>{linkTo4.name4}
                        </Link>
                    </HeaderLinks>
                    </>
                : null
            }
        </HeaderMenu>
    </StyledHeader>
        {isLoginOpen ?
        <Login pathName={pathName} logginToggleFn={logginToggle}/> : null}
    </>
    )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {logout})(Header)