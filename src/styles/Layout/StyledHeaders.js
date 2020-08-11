import style from 'styled-components'
import {Colors} from '../Base/Colors'

export const StyledHeader = style.div`
    top: 0;
    position: sticky;
    display: flex;
    justify-content: space-between;
    background-color: ${Colors.color.primary};
    height: 6rem;
    width: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    z-index: 100;

`
export const HeaderMenu = style.nav`
    display: flex;
    font-size: 1.5rem;
    margin-right: 3rem;
`
export const HeaderLinks = style.div`
    a {
        color: ${Colors.color.menuPrimary};
        padding: 1rem;
        text-decoration: none;
        
        &:hover {
            color: ${Colors.color.hoverLinkPrimary}
        }
    }
`

    export const BrandingArea = style.div`
    display: flex;
    align-items: center;
    margin-left: 3rem;
`

export const HeaderLogo = style.img`
    height: 2.3rem;
`
export const HeaderTitle = style.div`
    font-size: 1.8rem;
    margin-left: 1rem;
    font-weight: 600;
`
