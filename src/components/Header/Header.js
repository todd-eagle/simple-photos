import React, {useState, useEffect, useCallback} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import logo from '../../assets/images/simplephoto.png'
import {logout} from '../../redux/reducers/AuthReducer'
import {deleteProfile} from '../../redux/reducers/DataReducer'
import auth from '../Auth/auth'
import Login from '../Login/Login'
import {HeaderMenu, HeaderLinks, MenuIcon, MenuIconWrapper ,CloseIcon} from '../../styles/Components/Menu'
import {StyledHeader, HeaderTitle,
        HeaderLogo, BrandingArea} from '../../styles/Layout/StyledHeaders'
import useCurrentWidth from '../../Hooks/WindowListener'
import useKeyPress from '../../Hooks/useKeyPress'

const Header = (props) => {
    // console.log("header props: ", props)
    let width = useCurrentWidth()
    
    let links = 'menus'

    const {isWindowOpen, windowToggle} = useKeyPress()

    // const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [pathName, setPathName] = useState('register')
    const [isToggleMenuOpen, setToggleMenuOpen] = useState(true)
    const [dropDownValue, setDropDownValue] = useState('-18rem')

    let menuDropDown =  props.auth.isLoggedIn ? '30rem' : '18rem'

    const setMenuDropDown = useCallback((dropDowm=null)=> {
        const minus = '-'
        // console.log("setMenuDropDown: ", dropDowm)
        dropDowm ? setDropDownValue(dropDowm):
        isToggleMenuOpen ? setDropDownValue(menuDropDown) : 
        setDropDownValue(minus.concat('', menuDropDown))
        // console.log("drop down value: ", dropDownValue)
    },[isToggleMenuOpen, menuDropDown])

    const toggleMenu = () => {
        setToggleMenuOpen(!isToggleMenuOpen)
    }

    const menuManipulation = (dropDowm=null) => {
        // console.log("menu Manipulation: ", dropDowm)
        toggleMenu(); 
        setMenuDropDown(dropDowm);
    }

    const logout = () =>{
        props.deleteProfile()
        auth.isLoggedIn(false)
        localStorage.setItem('localAuth', false)
        localStorage.removeItem('profileData')
    }

    useEffect(() => {

        const resetMenus = () => {
            // console.log("reset menus")
            setToggleMenuOpen(true)
            setMenuDropDown('-30rem')
        }

        if (width > 799){
            resetMenus()  
        }

    }, [setMenuDropDown, width])

    if(props.auth.isLoggedIn ) {
         links = [
            {link1: '/dashboard', name1: 'Photos'},
            {link2: '/account', name2: 'Account'},
            {link3: '/profile', name3: 'Profile'},
            {link4: '', name4: 'Sign out'}
        ]
    } else {
         links = [
            {link1: props.location, name1: 'Sign in', signIn: (val) =>{windowToggle(); setPathName(val)}},
            {link2: props.location, name2: 'Register', register: (val) =>{windowToggle()}}
        ]
    }

    const [linkTo1, linkTo2, linkTo3, linkTo4] = links

    return (
        <>
        <StyledHeader>
            <BrandingArea>
            <Link onClick={() => dropDownValue === '30rem' || dropDownValue === '18rem' ?
                                 menuManipulation('-30rem'): null} to="/">
                <HeaderLogo src={logo} alt="Logo" />
                <HeaderTitle>
                    SimplePhoto
                </HeaderTitle> 
            </Link>       
            </BrandingArea>
        
        {isToggleMenuOpen ? <MenuIconWrapper onClick={() => menuManipulation()}><MenuIcon></MenuIcon></MenuIconWrapper> : <MenuIconWrapper onClick={() => menuManipulation()}><CloseIcon></CloseIcon></MenuIconWrapper>}
        <HeaderMenu menuDropDown={dropDownValue}>
            <HeaderLinks><Link onClick={!props.auth.isLoggedIn ? ()=> {menuManipulation('-30rem'); linkTo1.signIn('login')} : ()=> menuManipulation()} to={linkTo1.link1}>{linkTo1.name1}</Link></HeaderLinks>
            <HeaderLinks><Link onClick={!props.auth.isLoggedIn ? ()=>{ menuManipulation('-30rem'); linkTo1.signIn('register')} : ()=> menuManipulation()} to={linkTo2.link2}>{linkTo2.name2}</Link></HeaderLinks>
            {
                props.auth.isLoggedIn ? 
                    <>
                    <HeaderLinks><Link onClick={() => menuManipulation()}
                     to={linkTo3.link3}>{linkTo3.name3}</Link></HeaderLinks>
                    <HeaderLinks>
                        <Link onClick={()=>{props.logout(); menuManipulation(); logout()}} 
                            to={linkTo4.link4}>{linkTo4.name4}
                        </Link>
                    </HeaderLinks>
                    </>
                : null
            }
        </HeaderMenu>
    </StyledHeader>
        {isWindowOpen ?
        <Login pathName={pathName} logginToggleFn={windowToggle}/> : null}
    </>
    )
}

const mapDispatchToProps = {
    logout,
    deleteProfile
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))