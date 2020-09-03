import React from 'react'
import {StyledProfileHeader, ProfileHeaderImage, 
        ProfileHeaderText} from '../../../../styles/Layout/StyledProfileHeader'

const ProfileHeader = (props) => {
    const {getProfileTextFn, avatar} = props
    
    return (
        <>
        <StyledProfileHeader>
            <ProfileHeaderImage src={avatar} />
            <ProfileHeaderText>
                {getProfileTextFn()}
            </ProfileHeaderText>
        </StyledProfileHeader>
        </>
    )
}

export default ProfileHeader