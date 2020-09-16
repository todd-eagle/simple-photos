import React from 'react'
import {ProfileHeaderImage, 
        ProfileHeaderText} from '../../../../styles/Layout/StyledProfileHeader'
import Theme from '../../../../styles/Theme/Theme'     

const ProfileHeader = (props) => {
    const {avatar} = props
    
    return (
        <>
        <Theme>
            <ProfileHeaderImage src={avatar} />
            <ProfileHeaderText>
            </ProfileHeaderText>
        </Theme>
        </>
    )
}

export default ProfileHeader