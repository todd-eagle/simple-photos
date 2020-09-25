import React from 'react'
import {ProfileHeaderImage} from '../../../../styles/Layout/StyledProfileHeader'
import Theme from '../../../../styles/Theme/Theme'     

const ProfileHeader = (props) => {
    const {avatar} = props
    
    return (
        <>
        <Theme>
            <ProfileHeaderImage src={avatar} />
        </Theme>
        </>
    )
}

export default ProfileHeader