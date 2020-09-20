import React, {useState, useEffect, useCallback} from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import logo from '../../assets/images/simplephoto.png'
import {logout} from '../../redux/reducers/AuthReducer'
import {deleteProfile} from '../../redux/reducers/DataReducer'
import auth from '../Auth/auth'
import Login from '../Login/Login'
import {HeaderMenu, HeaderLinks, MenuIcon, CloseIcon} from '../../styles/Components/Menu'
import {StyledHeader, HeaderTitle,
        HeaderLogo, BrandingArea} from '../../styles/Layout/StyledHeaders'
import useCurrentWidth from '../../Hooks/WindowListener'
const Header = (props) => {

    let width = useCurrentWidth()
    
    let links = 'menus'

    const [isLoginOpen, setIsLoginOpen] = useState(false)
    const [pathName, setPathName] = useState('register')
    const [isToggleMenuOpen, setToggleMenuOpen] = useState(true)
    const [dropDownValue, setDropDownValue] = useState('-18rem')

    let menuDropDown =  props.auth.isLoggedIn ? '30rem' : '18rem'

    console.log("current width: ", width)

    // const setMenuDropDown = (dropDowm=null) => {
    //     const minus = '-'
    //     console.log("setMenuDropDown: ", dropDowm)
    //     dropDowm ? setDropDownValue(dropDowm):
    //     isToggleMenuOpen ? setDropDownValue(menuDropDown) : 
    //     setDropDownValue(minus.concat('', menuDropDown))
    //     console.log("drop down value: ", dropDownValue)
    // }

    const setMenuDropDown = useCallback((dropDowm=null)=> {
        const minus = '-'
        console.log("setMenuDropDown: ", dropDowm)
        dropDowm ? setDropDownValue(dropDowm):
        isToggleMenuOpen ? setDropDownValue(menuDropDown) : 
        setDropDownValue(minus.concat('', menuDropDown))
        console.log("drop down value: ", dropDownValue)
    },[dropDownValue, isToggleMenuOpen, menuDropDown])

    const logginToggle = () => {
        setIsLoginOpen(!isLoginOpen)
    }

    const toggleMenu = () => {
        setToggleMenuOpen(!isToggleMenuOpen)
    }

    const menuManipulation = (dropDowm=null) => {
        console.log("menu Manipulation: ", dropDowm)
        toggleMenu(); 
        setMenuDropDown(dropDowm);
    }

   

    // const resetMenus = useCallback(() =>{
    //     setToggleMenuOpen(true)
    //     setMenuDropDown('-30rem')
    // }, [setToggleMenuOpen, setMenuDropDown])

    useEffect(() => {

        const resetMenus = () => {
            console.log("reset menus")
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
        
        {isToggleMenuOpen ? <MenuIcon onClick={() => {menuManipulation()}}></MenuIcon> : <CloseIcon onClick={() => {menuManipulation()}}></CloseIcon>}
        <HeaderMenu menuDropDown={dropDownValue}>
            <HeaderLinks><Link onClick={!props.auth.isLoggedIn ? ()=> {menuManipulation('-30rem'); linkTo1.signIn('login')}: ()=> menuManipulation()} to={linkTo1.link1}>{linkTo1.name1}</Link></HeaderLinks>
            <HeaderLinks><Link onClick={!props.auth.isLoggedIn ? ()=>{ menuManipulation('-30rem'); linkTo1.signIn('register')}: ()=> menuManipulation()} to={linkTo2.link2}>{linkTo2.name2}</Link></HeaderLinks>
            {
                props.auth.isLoggedIn ? 
                    <>
                    <HeaderLinks><Link onClick={() => menuManipulation()}
                     to={linkTo3.link3}>{linkTo3.name3}</Link></HeaderLinks>
                    <HeaderLinks>
                        <Link onClick={()=>{props.logout(); menuManipulation(); props.deleteProfile(); auth.isLoggedIn(false)}} 
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

const mapDispatchToProps = {
    logout,
    deleteProfile
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, mapDispatchToProps)(Header)