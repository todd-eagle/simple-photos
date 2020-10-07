import React from 'react'
import {connect} from 'react-redux'
import ProfileHeader from './ProfileHeader/ProfileHeader'

const ProfileHead = (props) => {

    const {onPublicPage=false} = props
    let {avatar_link, background_link} = props.profile.profileInfo

    Object.keys(props.profile.profileInfo).length === 0 || onPublicPage  ? {avatar_link, background_link} = props  : console.log("ex-214") 
    
    return (
        <>
            <ProfileHeader avatar={avatar_link}
                           background={background_link}
            />

        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(ProfileHead)