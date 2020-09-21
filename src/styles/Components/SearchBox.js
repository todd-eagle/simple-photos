import styled from 'styled-components'
import {HeroSearchBox, HeroSearchInput, 
        HeroSearchButton} from '../Pages/StyledLandingPage'
import {UploadBar} from '../Pages/DashboardComponents'

export const MainSearchBox = styled(HeroSearchBox)`
    width: 30%;
    
`        
export const MainSearchInput = styled(HeroSearchInput)`
    font-size: 1.5rem;
    height: 3rem;
    border: 1px solid #d6d6d6;
    border-radius: 0 10px 10px 0;
    border-left: .5px solid #e2e2e2;

`  
export const MainSearchButton = styled(HeroSearchButton)`
    width: 3.5rem;
    border-radius: 10px 0 0 10px;
    border: 1px solid #d6d6d6;
`
export const SearchBar = styled(UploadBar)`
    justify-content: center;
`  