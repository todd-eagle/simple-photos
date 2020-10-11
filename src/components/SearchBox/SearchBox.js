import React from 'react'
import {connect} from 'react-redux'
import {SearchBarWrapper, MainSearchBox, MainSearchInput, MainSearchButton, SearchBar, Email} from '../../styles/Components/SearchBox'
import {PhotoCount} from '../../styles/Pages/DashboardComponents'

const SearchBox = (props) => {

    const {setSearchFn, handleSubmitFn, email, count} = props    
    console.log("props ", props)
    return (
        <SearchBarWrapper>
            <Email>{email}</Email>
        <SearchBar>
            <MainSearchBox>
            <MainSearchButton onClick={()=>handleSubmitFn()}></MainSearchButton>
                <MainSearchInput onChange={(e) => setSearchFn(e.target.value)} 
                                 placeholder="Search Images" id="search" name="search"/>
            </MainSearchBox>
        </SearchBar>
        <PhotoCount>Photos({count})</PhotoCount>  
        </SearchBarWrapper>  )
}
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(SearchBox)