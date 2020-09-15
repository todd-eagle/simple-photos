import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

const Theme = (props) => {
    const {children=''} = props
    const StyledProfileHeader1 = styled.div`
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 30rem;
        background-color: #fff;
        border-bottom: #a3a3a3 solid 2px;
        background-image:  url(${props.profile.profileInfo.background_link});
        background-position: center;
        background-size: cover;
`
console.log("Theme.js ", props)
    return (
        <StyledProfileHeader1>
            {children}
        </StyledProfileHeader1>
    )

}
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(Theme)