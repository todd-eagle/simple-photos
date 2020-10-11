import styled from 'styled-components'
import closeIcon from '../../assets/images/close.png'
import downloadIcon from '../../assets/images/downloadIcon.png'

export const Modal = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 120;
`
export const CloseModal = styled.div`
    background-image: url(${closeIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 1.8rem;
    width: 2rem;
    height: 2rem;
`
export const GoToProfile= styled.div`
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: 1px solid #333;
`
export const Download = styled.div`
    cursor: pointer;
    background-image: url(${downloadIcon});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 2.5rem;
    width: 2.3rem;
    height: 2.5rem;
    padding-right: 3rem;
`