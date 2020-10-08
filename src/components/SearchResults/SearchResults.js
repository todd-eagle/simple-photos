import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {UploadBarWrapper} from '../../styles/Pages/DashboardComponents'
import {MainSearchBox, MainSearchInput, MainSearchButton, SearchBar} from '../../styles/Components/SearchBox'
import ImagesContainer from '../ImagesContainer/ImagesContainer'
import ModalImage from '../ModalImage/ModalImage'


const SearchResults = (props) => {
    const { searchText} = props.location
    const [searchTextValue, setSearchTextValue] = useState(searchText)
    let [pageResults, setPageResults] = useState(null)
    const [imageValues, setImageValues] = useState(null)
    const [isOpenImageWindow, setIsOpenImageWindow] = useState(false)

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

   
    if(!pageResults){ let localSearchResults = JSON.parse(localStorage.getItem("localResults"));   pageResults = localSearchResults.data}

    const handleSubmit = async() => {
        let query = searchTextValue.split(' ').join(' & ')
        try {
            const results = await axios.post('/api/search', {query} )
            setPageResults(results.data)
            localStorage.setItem('localResults', JSON.stringify(results))
            // console.log("page Results: ", results)
        } catch (error) {
            console.log("Search Error: ", error);
        }
    }

    const handleSelectImage = (imgValues) => {
        console.log("imgValues ", imgValues)
        setImageValues(imgValues)
        setIsOpenImageWindow(!isOpenImageWindow)   
    }

    return (
        <>
        {/* {console.log("pageResults: ", pageResults)} */}
        <UploadBarWrapper>
            <SearchBar>
                <MainSearchBox>
                <MainSearchButton onClick={()=>handleSubmit()}></MainSearchButton>
                    <MainSearchInput onChange={(e) => setSearchTextValue(e.target.value)} placeholder="Search Images" 
                                     id="search" name="search" value={searchTextValue}/>
                </MainSearchBox>
            </SearchBar>  
        </UploadBarWrapper>  
        <ImagesContainer imageData={pageResults} handleSelectImageFn={handleSelectImage} />
        {isOpenImageWindow ? <ModalImage imageValues={imageValues} handleSelectImageFn={handleSelectImage}/> : null}
        </>
    )
}
export default SearchResults