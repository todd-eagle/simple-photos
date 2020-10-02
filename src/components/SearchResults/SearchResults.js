import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {UploadBarWrapper} from '../../styles/Pages/DashboardComponents'
import {MainSearchBox, MainSearchInput, MainSearchButton, SearchBar} from '../../styles/Components/SearchBox'
import ImagesContainer from '../ImagesContainer/ImagesContainer'
import ModalImage from '../ModalImage/ModalImage'


const SearchResults = (props) => {
    const {searchResults, searchText} = props.location
    const [searchTextValue, setSearchTextValue] = useState(searchText)
    const [pageResults, setPageResults] = useState(null)
    const [imageValues, setImageValues] = useState(null)
    const [isOpenImageWindow, setIsOpenImageWindow] = useState(false)

   
    useEffect(() => {
        if(!pageResults){setPageResults(searchResults)}
    },[pageResults, searchResults])

    const handleSubmit = async() => {
        let query = searchTextValue.split(' ').join(' & ')
        try {
            const results = await axios.post('/api/search', {query} )
            setPageResults(results)
            console.log("searchResults: ", searchResults)
        } catch (error) {
            console.log("Search Error: ", error);
        }
    }

    const handleSelectImage = (imgValues) => {
        console.log("imgValues ", imgValues)
        setImageValues(imgValues)
        setIsOpenImageWindow(!isOpenImageWindow)   
    }
    console.log("")
    return (
        <>
        <UploadBarWrapper>
                <SearchBar>
                    <MainSearchBox>
                    <MainSearchButton onClick={()=>handleSubmit()}></MainSearchButton>
                        <MainSearchInput onChange={(e) => setSearchTextValue(e.target.value)} placeholder="Search Images" 
                                         id="search" name="search" value={searchTextValue}/>
                    </MainSearchBox>
                </SearchBar>  
            </UploadBarWrapper>      
      
        <ImagesContainer imageData={searchResults.data} handleSelectImageFn={handleSelectImage} />
        {isOpenImageWindow ? <ModalImage imageValues={imageValues} handleSelectImageFn={handleSelectImage}/> : null}

        </>
    )
}
export default SearchResults