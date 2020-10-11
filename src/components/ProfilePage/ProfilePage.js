import React, {useState, useEffect} from 'react'
import ProfileHead from '../Dashboard/ProfileHead/ProfileHead'
import ImagesContainer from '../ImagesContainer/ImagesContainer'
import ModalImage from '../ModalImage/ModalImage'
import {Redirect} from 'react-router-dom'
import SearchBox from '../SearchBox/SearchBox'
import axios from 'axios'

const ProfilePage = (props) => {
    let {email, avatar_link, background_link, imageData} = props.location
    const [isOpenImageWindow, setIsOpenImageWindow] = useState(false)
    const [imageValues, setImageValues] = useState(null)
    const [search, setSearch] = useState('')
    const [searchResults, setSearchresults] = useState('')
    const [redirect, setRedirect] = useState(false)

    let  imgValues = JSON.parse(localStorage.getItem("imgValues"))
        props.location.imageData ===undefined ? {avatar_link, background_link} = imgValues.el : localStorage.setItem('imageData', JSON.stringify(imageData))

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 27) {
            setIsOpenImageWindow(false)
          }
        }
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        }
      }, [])

    const handleSubmit = async() => {
        let query = search.split(' ').join(' & ')
         console.log("search", search)
        try {
            const results = await axios.post('/api/search', {query} )
            setSearchresults(results)
            console.log("setSearchresults(results): ", results)
            localStorage.setItem('localResults', JSON.stringify(results))
            setRedirect(true)
        } catch (error) {
            console.log("Search Error: ", error);
        }
    }

    const handleSelectImage = (imgValues) => {
        // console.log("imgValues ", imgValues)
        setImageValues(imgValues)
        setIsOpenImageWindow(!isOpenImageWindow)   
    }
    console.log("searchResults", searchResults)
    
    return  ( 
        <>
        <ProfileHead avatar_link={avatar_link} background_link={background_link} onPublicPage={true} />
        <SearchBox handleSubmitFn={handleSubmit} setSearchFn={setSearch} email={email} />
        <ImagesContainer imageData={imageData} handleSelectImageFn={handleSelectImage} />
        {isOpenImageWindow ? <ModalImage imageValues={imageValues} handleSelectImageFn={handleSelectImage}/> : null}

        {redirect ? <Redirect to={{
                pathname: '/search',
                searchResults, 
                searchText: search}
                } /> : null}
        </>
    )
}

export default ProfilePage