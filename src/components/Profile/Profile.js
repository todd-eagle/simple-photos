import React, {useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Avatar from './Avatar/Avatar'
import ProfileHandler from './ProfileHandler/ProfileHandler'
import Background from './ProfileHandler/ProfileHandler' 
import ProfileHead from '../Dashboard/ProfileHead/ProfileHead'
import {PageWrapper, ProfileContainer, ProfileText} from '../../styles/Pages/Profile'



const Profile = (props) => {

    const [formValue, setForm] = useState()
    const [files, setFiles] = useState('')
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
