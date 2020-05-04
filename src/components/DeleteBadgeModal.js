import React from 'react';
import Modal from './Modal';
import './styles/Modal.css'
function DeleteBadgeModal(props) {

    return (
        <Modal
            closeModal={props.closeMyModal}
            modalOpen={props.modalIsOpen}  >
            <div className="DeleteBadgeModal__container">
                <h1 className="DeleteBadgeModal__title" >Are you sure?</h1>
                <div className="DeleteBadgeModal__buttons-container">
                    <div>

                        <button className="btn btn-danger  mr-2"
                            onClick={props.onDeleteBadge}
                        >Delete</button>
                    </div>
                    <div>
                        <button
                            onClick={props.closeMyModal}
                            className="btn btn-primary"
                        >Cancel</button>
                    </div>

                </div>

            </div>
        </Modal>
    )
}

export default DeleteBadgeModal;