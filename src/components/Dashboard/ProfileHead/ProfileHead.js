import React, { useState, useEffect, useCallback } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'

import ProfileHeader from './ProfileHeader/ProfileHeader'
import profileBackground from '../../../assets/images/cityscape.jpg'
import profileImage from '../../../assets/images/default-profiles/alexandru-rotariu-o_QTeyGVWjQ-unsplash.jpg'

const ProfileHead = (props) => {

    const [avatar, setAvatar] = useState('')

    const getBackground = () => {
        return profileBackground
    }

    // const getProfileImage = async() => {
    //     const image = await axios.get(`/api/profileData/${props.user.id}`)
    //     const link = image.data[0].avatar_link
    //     link ? setAvatar(link) : setAvatar(profileImage)
    // }

    const getProfileImage = useCallback (async() => {
        const image = await axios.get(`/api/profileData/${props.user.id}`)
        const link = image.data[0].avatar_link
        link ? setAvatar(link) : setAvatar(profileImage)
    },[props.user.id])

    useEffect(() => {
        getProfileImage()
    },[getProfileImage])

    

    const getProfileText = () => {
        return 'Good morning, Sharnie'
    }

    return (
        <>
            <ProfileHeader getBackgroundFn={getBackground} avatar={avatar}
                           getProfileTextFn={getProfileText}
            />

        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(ProfileHead)