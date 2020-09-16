import React from 'react'
import {connect} from 'react-redux'
import ProfileHandler from './ProfileHandler/ProfileHandler'
// import Background from './ProfileHandler/ProfileHandler' 
import ProfileHead from '../Dashboard/ProfileHead/ProfileHead'
import {PageWrapper, ProfileContainer, ProfileText} from '../../styles/Pages/Profile'



const Profile = (props) => {

    const ACCEPTED_FILES = "image/jpeg, image/jpg, image/png"
 
    return(
        <>
        <ProfileHead />
        <PageWrapper>
            <ProfileText>Click on the image, or drag-and-drop to update your profile.</ProfileText>
            <ProfileContainer>
                <ProfileHandler accept={ACCEPTED_FILES} profileImages='avatar' />
                <ProfileHandler accept={ACCEPTED_FILES} profileImages='background' />
            </ProfileContainer>
        </PageWrapper>
        </>
    ) 
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(Profile)
