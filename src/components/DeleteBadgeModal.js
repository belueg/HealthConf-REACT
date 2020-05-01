import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal(props) {

    return (
        <Modal
            closeModal={props.closeMyModal}
            modalOpen={props.modalIsOpen}  >
            <div>
                <h1>Are you sure?</h1>
                <div>

                    <button className="btn btn-danger mr-4"
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
        </Modal>
    )
}

export default DeleteBadgeModal;