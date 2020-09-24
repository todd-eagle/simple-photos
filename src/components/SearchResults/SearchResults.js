import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {ImageContainer, ListContainer,PhotoCard} from '../../styles/Pages/DashboardComponents'
import {CardImages} from '../../styles/Components/Cards'
import {UploadBarWrapper} from '../../styles/Pages/DashboardComponents'
import {MainSearchBox, MainSearchInput, MainSearchButton, SearchBar} from '../../styles/Components/SearchBox'


const SearchResults = (props) => {
    const {searchResults, searchText} = props.location
    const [searchTextValue, setSearchTextValue] = useState(searchText)
    const [pageResults, setPageResults] = useState(null)
   
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

    let images = null

    if(pageResults){
        images = pageResults.data.map(el => {
            return <PhotoCard key={el.title}>
                        <CardImages loading="lazy"  src={el.link} alt={el.title}/>
                    </PhotoCard>  
        })
    }

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
        <ListContainer>
            <ImageContainer>
                {images}
            </ImageContainer>
        </ListContainer>
        </>
    )
}
export default SearchResults