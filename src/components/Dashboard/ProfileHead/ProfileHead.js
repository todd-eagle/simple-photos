import React from 'react'
import {connect} from 'react-redux'

import ProfileHeader from './ProfileHeader/ProfileHeader'
import profileBackground from '../../../assets/images/cityscape.jpg'

const ProfileHead = (props) => {

    const getBackground = () => {
        return profileBackground
    }

       let {avatar_link, background_link} = props.profile.profileInfo

    return (
        <>
            <ProfileHeader getBackgroundFn={getBackground} avatar={avatar_link}
                           getBackground={background_link}
            />

        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(ProfileHead)