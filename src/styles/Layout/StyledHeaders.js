import styled from 'styled-components'
import {Colors} from '../Base/Colors'


export const StyledHeader = styled.div`
    top: 0;
    position: sticky;
    display: flex;
    justify-content: space-between;
    background-color: ${Colors.color.primary};
    height: 6rem;
    width: 100%;
    color: ${Colors.color.fontSecondary};
    display: flex;
    align-items: center;
    z-index: 100;

`
export const BrandingArea = styled.div`
        a {
            display: flex;
            align-items: center;
            margin-left: 5rem;
            color: #ffffff;
            text-decoration:none;
        }
`
export const HeaderLogo = styled.img`
    height: 2.3rem;
`
export const HeaderTitle = styled.div`
    font-size: 1.8rem;
    margin-left: 1rem;
    font-weight: 600;
`
