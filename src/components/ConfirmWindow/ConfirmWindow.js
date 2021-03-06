import React from 'react'
import {Modal} from '../../styles/Components/Modals'
import {Container, ConfirmImage} from '../../styles/Pages/ConfirmBox'
import {StyledButton, ButtonContainer} from '../../styles/Components/Buttons'

const ConfirmWindow = (props) => {
    const {toggleFn, values, deleteImageFn} = props
    const {id, link} = values
    return (
        <Modal>
            <Container>
                <ConfirmImage src={link} alt="Do you want to delete this file?" />
                <p>Remove image?</p>      
                <ButtonContainer>
                    <StyledButton  onClick={() =>toggleFn()}>Cancel</StyledButton>
                    <StyledButton onClick={() =>{deleteImageFn(id, link); toggleFn();}}>Confirm</StyledButton>
                </ButtonContainer>
            </Container>
        </Modal>
    )
}

export default ConfirmWindow