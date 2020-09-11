import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import ProfileHeader from './ProfileHeader/ProfileHeader'
import profileBackground from '../../../assets/images/cityscape.jpg'
import profileImage from '../../../assets/images/default-profiles/alexandru-rotariu-o_QTeyGVWjQ-unsplash.jpg'

const ProfileHead = (props) => {

    const getBackground = () => {
        return profileBackground
    }

    // const getProfileImage = async() => {
    //     const image = await axios.get(`/api/profileData/${props.auth.user.id}`)
    //     const link = image.data[0].avatar_link
    //     link ? setAvatar(link) : setAvatar(profileImage)
    // }

    // const getProfileImage = useCallback (async() => {
    //     const image = await axios.get(`/api/profileData/${props.auth.user.id}`)
    //     console.log("Avatar info: ", image.data)
    //     const link = image.data[0].avatar_link
    //     link ? setAvatar(link) : setAvatar(profileImage)
    // },[props.auth.user.id])

    // useEffect(() => {
    //     getProfileImage()
    // },[getProfileImage])


    const getProfileText = () => {
        return 'Good morning, Sharnie'
    }

    return (
        <>
            <ProfileHeader getBackgroundFn={getBackground} avatar={props.avatar}
                           getProfileTextFn={getProfileText}
            />

        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(ProfileHead)