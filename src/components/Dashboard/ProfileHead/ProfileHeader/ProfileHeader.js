import React from 'react'
import {ProfileHeaderImage} from '../../../../styles/Layout/StyledProfileHeader'
import Theme from '../../../../styles/Theme/Theme'     

const ProfileHeader = (props) => {
    const {avatar, background} = props
    
    return (
        <>
        <Theme background={background}>
            <ProfileHeaderImage src={avatar} />
        </Theme>
        </>
    )
}

export default ProfileHeader