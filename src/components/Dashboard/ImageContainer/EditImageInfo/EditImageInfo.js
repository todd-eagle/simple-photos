import React from 'react'
import {Modal} from '../../../../styles/Components/Modals'
import {EditContainer, EditImage} from '../../../../styles/Pages/EditorBox'
import EditForm from '../../../Form/Form'
import {StyledButton, ButtonContainer} from '../../../../styles/Components/Buttons'

const EditImageInfo = (props) => {
    const {editImageFn, toggleEditFn, handleChangeFn, getValuesFn} = props
    const values = getValuesFn()
    const {id, link} = values
    return (
        <Modal>
            <EditContainer>
                <EditImage src={link} alt="Edit image information" /> 
                <EditForm  width="98%"  
                    inputData={
                    [{type: 'text', property: 'title', value: values.title}, 
                    {type: 'text', property: 'tags',  value: values.tags}]
                    }
                    onChange={handleChangeFn}
                    heading=''/>     
                <ButtonContainer>
                    <StyledButton  onClick={() =>toggleEditFn()}>Cancel</StyledButton>
                    <StyledButton onClick={() =>{editImageFn(id); toggleEditFn();}}>Update</StyledButton>
                </ButtonContainer>
            </EditContainer>
        </Modal>
    )
}

export default EditImageInfo