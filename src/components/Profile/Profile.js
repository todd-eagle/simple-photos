import React, {useState} from 'react'
import axios from 'axios'
import ProfileHead from '../Dashboard/ProfileHead/ProfileHead'
import {PageWrapper, ProfileImage, ProfileContainer,
        ProfileBackgroundImage} from '../../styles/Pages/Profile'
import genericImage from '../../assets/images/default-profiles/edgar-nKC772R_qog-unsplash.jpg'
import genericBackground from '../../assets/images/default-profiles/bailey-zindel-NRQV-hBF10M-unsplash.jpg'

const Profile = () => {

    const [avatar, setAvatar] = useState('')

    const getAvatar = () => {

    }

    const getBackground = () => {

    }

    const getGreeting = () => {

    }

    const uploadAvatar = () => {

    }

    const uploadBackground = () => {

    }
   
    return(
        <>
        <ProfileHead />
        <PageWrapper>
            <ProfileContainer>
                <div>This is the Profile Page</div>
                <ProfileImage src={genericImage} alt="My profile pic"/>
                <ProfileBackgroundImage src={genericBackground} alt="My profile background" />
            </ProfileContainer>    
        </PageWrapper>
        </>
    ) 

}

export default Profile