import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

const Theme = (props) => {
    const {children='', background} = props
    const StyledProfileHeader1 = styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 50rem;
        background-color: #fff;
        border-bottom: #a3a3a3 solid 2px;
        background-image:  url(${background});
        background-position: center;
        background-size: cover;

    @media only screen and (max-width: 100rem) {
        height: 45rem;
    }
    @media only screen and (max-width: 60rem) {
        height: 35rem;
    }
    @media only screen and (max-width: 40rem) {
        height: 25rem;
    }
`
    return (
        <StyledProfileHeader1>
            {children}
        </StyledProfileHeader1>
    )

}
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(Theme)