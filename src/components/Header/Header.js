import React from 'react'
import logo from '../../assets/images/simplephoto.png'
import {StyledHeader, HeaderMenu, HeaderTitle,
        HeaderLinks, HeaderLogo, BrandingArea} from '../../styles/Layout/StyledHeaders'

const Header = () => {

    return (
        <StyledHeader>
        <BrandingArea>
            <HeaderLogo src={logo} alt="Logo" />
            <HeaderTitle>
                SimplePhoto
            </HeaderTitle>
        </BrandingArea>
        <HeaderMenu>
            <HeaderLinks href="dashbord">Account</HeaderLinks>
            <HeaderLinks href="dashbord">Profile</HeaderLinks>
            <HeaderLinks href="dashbord">Logout</HeaderLinks>
        </HeaderMenu>
    </StyledHeader>
    )
}

export default Header