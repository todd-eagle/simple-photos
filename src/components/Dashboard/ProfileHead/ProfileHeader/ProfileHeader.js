import React from 'react'
import {StyledProfileHeader, ProfileHeaderImage, 
        ProfileHeaderText} from '../../../../styles/Layout/StyledProfileHeader'
import Theme from '../../../../styles/Theme/Theme'     

const ProfileHeader = (props) => {
    const {getProfileTextFn, avatar} = props
    
    return (
        <>
        <Theme>
            <ProfileHeaderImage src={avatar} />
            <ProfileHeaderText>
                {/* {getProfileTextFn()} */}
            </ProfileHeaderText>
        </Theme>
        </>
    )
}

export default ProfileHeader