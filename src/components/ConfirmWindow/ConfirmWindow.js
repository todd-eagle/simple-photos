import React from 'react'

const ConfirmWindow = (props) => {
    const {toggleFn, idLinkValues, deleteImageFn} = props
    const [id, link] = idLinkValues
    return (
        <div className="modal">
            <div className="confirmation-box">
                Remove image?        
                <div className="confirm">
                    <button className="btn"  onClick={() =>toggleFn()}>Cancel</button>
                    <button className="btn" onClick={() =>{deleteImageFn(id, link); toggleFn();}}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmWindow