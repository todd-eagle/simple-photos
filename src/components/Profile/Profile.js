import React, {useState} from 'react'
import {connect} from 'react-redux'
import axios from 'axios'
import Avatar from './Avatar/Avatar'
import Background from './Background/Background' 
import ProfileHead from '../Dashboard/ProfileHead/ProfileHead'
import {PageWrapper, ProfileContainer} from '../../styles/Pages/Profile'



const Profile = (props) => {

    // const [avatar, setAvatar] = useState('')
    // const [background, setBackground] = useState('')
    const [formValue, setForm] = useState()
    const [files, setFiles] = useState('')
    const ACCEPTED_FILES = "image/jpeg, image/jpg, image/png"

  
    return(
        <>
        <ProfileHead />
        <PageWrapper>
            <ProfileContainer>
                <div>This is the Profile Page</div>
                <Avatar accept={ACCEPTED_FILES} />
                <Background accept={ACCEPTED_FILES} />
            </ProfileContainer>
        </PageWrapper>
        </>
    ) 
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(Profile)
