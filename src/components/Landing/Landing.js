import React, {useState, useEffect} from 'react'
import axios from 'axios'
import LandingPage from './LandingPage/LandingPage.js'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import ModalImage from '../ModalImage/ModalImage'

const Landing = (props) => {
    const [imageData, setImageData] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchresults] = useState('')
    const [redirect, setRedirect] = useState(false)
    const [isOpenImageWindow, setIsOpenImageWindow] = useState(false)
    const [imageValues, setImageValues] = useState(null)
    // console.log("search: ", search)
   
   
    useEffect(() => {
        getAllImages()
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

    const getAllImages = async() => {
        try {
            const info = await axios('/api/allphotos')
            setImageData(info.data)
            // console.log("img data ", info.data)
        } catch (error) {console.log(error)}
    }

    const handleSubmit = async() => {
        let query = search.split(' ').join(' & ')
        // console.log("search", search)
        try {
            const results = await axios.post('/api/search', {query} )
            setSearchresults(results)
            localStorage.setItem('localResults', JSON.stringify(results))
            setRedirect(true)
        } catch (error) {
            console.log("Search Error: ", error);
        }
    }

    const handleSelectImage = (imgValues) => {
        setImageValues(imgValues)
        setIsOpenImageWindow(!isOpenImageWindow)   
    }

    return <>
            <LandingPage imageData={imageData} handleSubmitFn={handleSubmit} 
            setSearchFn={setSearch} search={search} handleSelectImageFn={handleSelectImage}
            />

            {isOpenImageWindow ? <ModalImage imageValues={imageValues} handleSelectImageFn={handleSelectImage}/> : null}

            {redirect ? <Redirect to={{
                pathname: '/search',  
                searchResults, 
                searchText: search}
                } /> : null}
           </> 
}
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(Landing)
