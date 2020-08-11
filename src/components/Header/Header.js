import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../../assets/images/simplephoto.png'
import {StyledHeader, HeaderMenu, HeaderTitle,
        HeaderLinks, HeaderLogo, BrandingArea} from '../../styles/Layout/StyledHeaders'

const Header = (props) => {

    return (
        <StyledHeader>
        <BrandingArea>
            <HeaderLogo src={logo} alt="Logo" />
            <HeaderTitle>
                SimplePhoto
            </HeaderTitle>
        </BrandingArea>
        <HeaderMenu>
            <HeaderLinks><Link to="/account">Account</Link></HeaderLinks>
            <HeaderLinks><Link to="/profile">Profile</Link></HeaderLinks>
            <HeaderLinks><Link to="/landing">Sign out</Link></HeaderLinks>
        </HeaderMenu>
    </StyledHeader>
    )
}

export default Header