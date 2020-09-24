import React, {useState, useEffect} from 'react'
import axios from 'axios'
import LandingPage from './LandingPage/LandingPage.js'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'


const Landing = (props) => {
    const [imageData, setImageData] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchresults] = useState('')
    const [redirect, setRedirect] = useState(false)
    console.log("search: ", search)
   
   
    useEffect(() => {
        getAllImages()
    },[])

    const getAllImages = async() => {
        try {
            const info = await axios('/api/allphotos')
            setImageData(info.data)
        } catch (error) {console.log(error)}
    }

    const handleSubmit = async() => {
        let query = search.split(' ').join(' & ')
        console.log("search", search)
        try {
            const results = await axios.post('/api/search', {query} )
            setSearchresults(results)
            setRedirect(true)
        } catch (error) {
            console.log("Search Error: ", error);
        }
    }

    return <>
            <LandingPage imageData={imageData} handleSubmitFn={handleSubmit} 
            setSearchFn={setSearch} search={search}
            />
            {redirect ? <Redirect to={{
                pathname: '/search',  
                searchResults, 
                searchText: search}
                } /> : null}
           </> 
}
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(Landing)
