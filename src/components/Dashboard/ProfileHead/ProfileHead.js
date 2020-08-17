import React from 'react'
import ProfileHeader from './ProfileHeader/ProfileHeader'
import profileBackground from '../../../assets/images/cityscape.jpg'
import profileImage from '../../../assets/images/SHARNEE-CONSTANCE-VICTORIA-EDIT-1web.jpg'

const ProfileHead = () => {

    const getBackground = () => {
        return profileBackground
    }

    const getProfileImage = () => profileImage

    const getProfileText = () => {
        return 'Good morning, Sharnie'
    }

    return (
        <>
            <ProfileHeader getBackgroundFn={getBackground} getProfileImageFn={getProfileImage}
                           getProfileTextFn={getProfileText}
            />

        </>
    )
}
export default ProfileHead