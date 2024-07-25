import React from 'react'
import { Modal, Button } from 'react-bootstrap';

type AuthModelProps = {
    isOpen: boolean;
    content: React.ReactNode | null;
    closeModal: () => void;
}

const authModal = ({ isOpen, content, closeModal }: AuthModelProps) => {
    return (
        <Modal show={isOpen} onHide={closeModal}>
            <Modal.Header closeButton>
                <Modal.Title>Auth</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {content}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={closeModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default authModal