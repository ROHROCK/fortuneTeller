import React, { Component } from 'react';
import './fortune-teller.css'
import { Button, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';

class FortuneTeller extends Component {

    //  subtitle;
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            message: 'This is your fortune of the day: '
        }
        // const openModal = this.openModal.bind(this);
        // const closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
        this.openModal();
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
                <Modal style={{ marginTop: '50%' }} show={this.state.modalIsOpen} onHide={this.closeModal} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Fortune Teller</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.message + this.props.location.state.fortune}</Modal.Body>
                    <Modal.Footer>
                        <Link to={{ pathname: '/' }}>
                            <Button variant="secondary" onClick={this.closeModal}>
                                Restart
                        </Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default FortuneTeller;