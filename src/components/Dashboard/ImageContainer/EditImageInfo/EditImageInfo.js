import React from 'react'
import {Modal} from '../../../../styles/Components/Modals'
import {EditContainer, EditImage} from '../../../../styles/Pages/EditorBox'
import EditForm from '../../../Form/Form'
import {StyledButton, ButtonContainer} from '../../../../styles/Components/Buttons'

const EditImageInfo = (props) => {
    const {editImageFn, toggleEditFn, imageValues, 
           formvalues, handleChangeFn} = props
    const [id, link, title, tags] = imageValues
    return(
        <Modal>
            {console.log("title: ", title)}
            <EditContainer>
                <EditImage src={link} alt="Edit image information" /> 
                <EditForm   inputData={
                    [{type: 'text', property: 'title', value: formvalues.title=title}, 
                    {type: 'text', property: 'tags',  value: formvalues.tags=tags}]
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