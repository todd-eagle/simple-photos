import React from 'react'
import {Modal} from '../../styles/Components/Modals'
import {Container, ButtonContainer} from '../../styles/Pages/ConfirmBox'
import {StyledButton} from '../../styles/Components/Buttons'

const ConfirmWindow = (props) => {
    const {toggleFn, idLinkValues, deleteImageFn} = props
    const [id, link] = idLinkValues
    return (
        <Modal>
            <Container>
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