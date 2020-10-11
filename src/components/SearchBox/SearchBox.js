import React from 'react'
import {connect} from 'react-redux'
import {UploadBarWrapper} from '../../styles/Pages/DashboardComponents'
import {MainSearchBox, MainSearchInput, MainSearchButton, SearchBar} from '../../styles/Components/SearchBox'

const SearchBox = (props) => {

    const {setSearchFn, handleSubmitFn} = props    
    console.log("props ", props)
    return (
        <UploadBarWrapper>

        <SearchBar>
            <MainSearchBox>
            <MainSearchButton onClick={()=>handleSubmitFn()}></MainSearchButton>
                <MainSearchInput onChange={(e) => setSearchFn(e.target.value)} 
                                 placeholder="Search Images" id="search" name="search"/>
            </MainSearchBox>
        </SearchBar>  
        </UploadBarWrapper>  )
}
const mapStateToProps =  reduxState => reduxState
export default connect(mapStateToProps)(SearchBox)