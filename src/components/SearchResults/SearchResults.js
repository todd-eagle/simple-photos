import React from 'react'
import {ImageContainer, ListContainer,PhotoCard} from '../../styles/Pages/DashboardComponents'
import {CardImages} from '../../styles/Components/Cards'
import {UploadBarWrapper} from '../../styles/Pages/DashboardComponents'
import {MainSearchBox, MainSearchInput, MainSearchButton, SearchBar} from '../../styles/Components/SearchBox'

const SearchResults = (props) => {
   const {searchResults} = props.location
    
    let images = null

    if(searchResults !== undefined){
        images = searchResults.data.map(el => {
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
                    <MainSearchButton></MainSearchButton>
                        <MainSearchInput  placeholder="Search Images" id="search" name="search"/>
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