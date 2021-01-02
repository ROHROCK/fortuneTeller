import React, { Component } from 'react';
import './fortune-teller.css'
import { Button, Modal } from "react-bootstrap";

class FortuneTeller extends Component {

    //  subtitle;
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
        }
        const openModal = this.openModal.bind(this);
        const closeModal = this.closeModal.bind(this);
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';   
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false })
    }

    render() {
        return (
            <div>
                <Button variant="primary" onClick={this.openModal}>
                    Launch demo modal
                </Button>

                <Modal show={this.state.modalIsOpen} onHide={this.closeModal} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.closeModal}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default FortuneTeller;