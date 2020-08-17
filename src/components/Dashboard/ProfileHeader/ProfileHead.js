import React, {useState} from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'

const ProfileHead = () => {

    const getBackground = () => {
        return 'background'
    }

    const getProfileImage = () {
        return 'profileImage'
    }

    return (
        <>
            <ProfileHeader getBackgroundFn={background} getProfileImage={profileImage}
                           profileText={profileText}
            />

        </>
    )
}
export default ProfileHead