import React from 'react';
import ReactDOM from 'react-dom';
import './styles/Modal.css'

function Modal(props) {

    if (!props.modalOpen) {

        return null
    }

    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="TextBox">
                <button onClick={props.closeModal} className="CloseModal">
                    X
                </button>
                {props.children}
            </div>
        </div>,
        document.getElementById("modal"))

}

export default Modal;

