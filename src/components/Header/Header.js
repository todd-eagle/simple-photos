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

    if(props.isLoggedIn ) {
         links = [
            {link1: '/account', name1: 'Account'},
            {link2: '/profile', name2: 'Profile'},
            {link3: '/', name3: 'Sign out'}
        ]
    }else {
         links = [
            {link1: '/login', name1: 'Sign in'},
            {link2: '/register', name2: 'Register'},
            {link3: '/account', name3: 'Account', signOut: ()=>logout()}
        ]
    }

    const [linkTo1,linkTo2, linkTo3] = links
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
            <HeaderLinks><Link onClick={() => {props.logout(); auth.isLoggedIn(false)}} to={linkTo3.link3}>{linkTo3.name3}</Link></HeaderLinks>
        </HeaderMenu>
    </StyledHeader>
    )
}

const mapStateToProps = reduxState => reduxState
export default connect(mapStateToProps, {logout})(Header)