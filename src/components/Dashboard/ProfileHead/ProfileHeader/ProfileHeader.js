import React from 'react'
import {StyledProfileHeader, ProfileHeaderImage, 
        ProfileHeaderText} from '../../../../styles/Layout/StyledProfileHeader'

const ProfileHeader = (props) => {
    const {getProfileImageFn, getProfileTextFn } = props
    return (
        <>
        <StyledProfileHeader>
            <ProfileHeaderImage src={getProfileImageFn()} />
            <ProfileHeaderText>
                {getProfileTextFn()}
            </ProfileHeaderText>
        </StyledProfileHeader>
        </>
    )
}

export default ProfileHeader