import styled from 'styled-components'
import {EditContainer} from '../Pages/EditorBox'
import {CloseBox} from '../Pages/DashboardComponents'
import closeIcon from '../../assets/images/close.png'

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: ${(props) => props.width};

`
export const StyledInput = styled.input`
    width: 100%;
    margin-bottom: .5rem;
    padding: 1rem;
    font-size: 1.6rem;
`
export const ValidationText = styled.div`
    margin-left: 2rem;
    font-size: 1.5rem;
    color: red;
    font-weight: 600;
    
`
export const StyledLoginForm = styled(StyledForm)`
  
`
export const LoginContainer = styled(EditContainer)`
    position: relative;
    width: 35rem;
    padding: 3rem 1rem;
    border: none;

`
export const LoginClose = styled(CloseBox)`
    top: .5rem;
    right: .5rem;
    background-image: url(${closeIcon});
`
export const Heading2 = styled.h2`
    padding: 1rem;
    font-size: 1.7rem;
    align-self: center;
    color: #707070;
`
export const LogoContainer = styled.div`
    display: flex;
`
export const LogoImage = styled.img`
    width: 3rem;
    height: 2.5rem;
`
export const LogoText = styled.div`
    font-size: 2rem;
    font-weight: 600;
    padding-left: 1rem;
`