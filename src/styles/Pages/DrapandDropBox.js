import styled from 'styled-components'
import dragNDropImage from '../../assets/images/img_98883.png'
import {CloseBox} from '../Pages/DashboardComponents'
import {StyledForm} from '../Components/Forms'
import closeIcon from '../../assets/images/x-mark-128.png'
import closeIconGrey from '../../assets/images/close-grey.png'

export const DragAndDropBox = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 90%;
    width: 50%;
    min-width: 50%;
    background-color: rgb(236, 236, 236);
    background-image: url(${dragNDropImage});
    background-position: center 40%;
    background-repeat: no-repeat;
    background-size: 15%;
    border-radius: 10px;
    border: 8px solid lightgray; 
`
export const DragAndDropTextWrapper = styled.div`
    font-size: 2rem;
    color: gray;
    margin-top: 7rem;
    padding: 0 5rem;
`  
export const DragAndDropContentWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f8f8f8;
    width: 50%;
    padding: 2.5rem 0;
    border-radius: 10px;
`
export const DragAndDropImage = styled.img`
    width: 55%;
`

export const CloseContent = styled(CloseBox)`
    background-image: url(${closeIconGrey});
    top: 2%;
    right: 3%;
`

export const CloseDragAndDrop = styled(CloseContent)`
    background-image: url(${closeIcon});
    top: 1%;
    right: 2%;
    width: 6rem;
    height: 8rem;
`

export const DragNDropForm = styled(StyledForm)`
    width: 1000rem;
`

