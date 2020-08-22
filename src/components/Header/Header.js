import React from 'react'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import logo from '../../assets/images/simplephoto.png'
import {logout} from '../../redux/reducers/AuthReducer';
import auth from '../Auth/auth'

import {StyledHeader, HeaderMenu, HeaderTitle,
        HeaderLinks, HeaderLogo, BrandingArea} from '../../styles/Layout/StyledHeaders'

const Header = (props) => {
    
    let links = 'menus'
    console.log("isLoggedIn? ", props.isLoggedIn)
    if(props.isLoggedIn ) {
         links = [
            {link1: '/dashboard', name1: 'Photos'},
            {link2: '/account', name2: 'Account'},
            {link3: '/profile', name3: 'Profile'},
            {link4: '', name4: 'Sign out'}
        ]
    }else {
         links = [
            {link1: '/login', name1: 'Sign in'},
            {link2: '/register', name2: 'Register'},
        ]
    }

    const [linkTo1, linkTo2, linkTo3, linkTo4] = links
    return (
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
            <HeaderLinks><Link to={linkTo1.link1}>{linkTo1.name1}</Link></HeaderLinks>
            <HeaderLinks><Link to={linkTo2.link2}>{linkTo2.name2}</Link></HeaderLinks>
            {
                props.isLoggedIn ? 
                    <>
                    <HeaderLinks><Link to={linkTo3.link3}>{linkTo3.name3}</Link></HeaderLinks>
                    <HeaderLinks>
                        <Link onClick={(e)=>{props.logout(); auth.isLoggedIn(false)}} 
                            to={linkTo4.link4}>{linkTo3.name4}
                        </Link>
                    </HeaderLinks>
                    </>
                : null
            }
        </HeaderMenu>
    </StyledHeader>
    )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {logout})(Header)