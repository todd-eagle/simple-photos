import React from 'react'
import {connect} from 'react-redux'
import ProfileHeader from './ProfileHeader/ProfileHeader'

const ProfileHead = (props) => {

    const {onPublicPage=false} = props
    let {avatar_link, background_link} = props.profile.profileInfo

    // console.log("onPublicPage =", onPublicPage)

    // console.log("props.profile.profileInfo  on profilehead: ", props.profile.profileInfo )
    // console.log("JSON.parse(localStorage.getItem('profileData')) on profilehead: ", JSON.parse(localStorage.getItem('profileData')))

    // onPublicPage  ? {avatar_link, background_link} = props  : {avatar_link, background_link} = JSON.parse(localStorage.getItem('profileData'))   
    // console.log("props.profile.profileInfo = ", props.profile.profileInfo)
    // if(!onPublicPage){
    //     console.log("We are on a private page")
       
    //     if( Object.keys(props.profile.profileInfo).length !== 0 && props.profile.profileInfo.constructor === Object){
    //         console.log("props.profile.profileInfo EXISTS!!!")
    //         console.log("{avatar_link, background_link} = props.profile.profileInfo: ", {avatar_link, background_link} = props.profile.profileInfo )
    //     }else{
    //        console.log(" {avatar_link, background_link} = JSON.parse(localStorage.getItem('profileData'))")
    //     }
    // }else {console.log(" {avatar_link, background_link} = props")}
    
    !onPublicPage ? 
    Object.keys(props.profile.profileInfo).length !== 0 && props.profile.profileInfo.constructor === Object
        ? 
            {avatar_link, background_link} = props.profile.profileInfo 
            :
            {avatar_link, background_link} = JSON.parse(localStorage.getItem('profileData'))
    :  
    {avatar_link, background_link} = props

    return (
        <>
            <ProfileHeader avatar={avatar_link}
                           background={background_link}
            />

        </>
    )
}

const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(ProfileHead)