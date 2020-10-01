import React, {useState, useEffect} from 'react'
import axios from 'axios'
import ProfileHead from '../Dashboard/ProfileHead/ProfileHead'
import LandingPage from '../Landing/LandingPage/LandingPage'


const ProfilePage = (props) => {
    const {user_id, email, avatar, background, profile_id} = props.location
    const [data, setData] = useState(null)
    
    // useEffect(() => {
    //     getProfileImages(user_id)
    // },[user_id])

    const getProfileInfo = (user_id) => {

    }

    const getProfileImages = (id) => {
        axios.get(`/api/photos/${id}`) 
        .then(res=>{
           setData(res.data)
           console.log( console.log("res data in profile page: ",res.data));
        }).catch(error =>{console.log(error)})
    }

    console.log("data in profile page: ",data);

    return(
        <>
        <ProfileHead avatar_link={avatar} background_link={background} onPublicPage={true} />
        {/* <LandingPage imageData={data} /> */}
        </>
    )
}

export default ProfilePage