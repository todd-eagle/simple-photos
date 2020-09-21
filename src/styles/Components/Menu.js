import styled from 'styled-components'
import {Colors} from '../Base/Colors'

export const HeaderMenu = styled.nav`
    display: flex;
    font-size: 1.5rem;
    margin-right: 5rem;

    @media only screen and (max-width: 50rem) {
        position: absolute;
        flex-direction: column;
        z-index: 999;
        margin-top: -18rem;
        margin-top: ${(props) => props.menuDropDown};
        width: 100vw;
        align-items: center;
        background-color: #333;
        /* padding: 2rem 0 0 0; */
    }
`
export const HeaderLinks = styled.div`
     @media only screen and (max-width: 50rem) {
        display: flex;
        justify-content:center;
        padding: 1rem;     
        z-index:200;  
        border-top: solid white 1px;
        width: 100vw;
    }
    a {
        color: ${Colors.color.menuPrimary};
        padding: 1rem;
        text-decoration: none;
        
        &:hover {
            color: ${Colors.color.hoverLinkPrimary}
        }
    }
`
export const MenuIcon = styled.span`
    position: relative;
    display: none;
    margin-right: 5rem;
    display: block;
    width: 2.5rem;
    height: 2px;
    background-color:#ffffff;

    @media only screen and (max-width: 50rem) {       
        display: inline-block;
    }

    @media only screen and (min-width: 50rem) {
        display: none;
    }

    &::before,
    &::after {
        width: 2.5rem;
        height: 2px;
        background-color:#ffffff;
        display: inline-block;
    }

    &::before,
    &::after {
        content: "";
        position: absolute;
        left: 0;
        transition: all .2s;
    }

    &::before{ top: -.8rem; }
    &::after { top: .8rem; }
`
export const CloseIcon = styled(MenuIcon)`
    position: relative;
    margin-right: 4.8rem;
    background-color: transparent;

    &::before,
    &::after {
        height: 3px;
    }

    &::before,
    &::after {
        top: 0;
        width: 2rem;
        transform: rotate(45deg);
        background-color: #fff;
    }

    &::after { transform: rotate(-45deg); }
`
export const MenuIconWrapper = styled.div`
    height: 1.85rem;
    padding-left: .5rem;
`