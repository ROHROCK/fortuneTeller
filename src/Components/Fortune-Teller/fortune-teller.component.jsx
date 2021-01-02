import { Button } from 'bootstrap';
import React, { Component } from 'react';
import Modal from 'react-modal';
// import  Button  from 'react-bootstrap/Button';
import './fortune-teller.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: '50%',
        bottom: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '50vh',
        width: '50wh'

    }
};
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
        console.log(this.state.modalIsOpen);
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';   
    }

    closeModal = () => {
        this.setState({ modalIsOpen: false })
        console.log(this.state.modalIsOpen);
    }

    render() {
        let modal;
        if (this.state.modalIsOpen) {
            modal = (
                <div className="Modal" >
                    <div className="modal-dialog" >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>Modal body text goes here.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={this.closeModal}>Save changes</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.closeModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>)

        }
        else {
            modal = <button className="btn btn-primary" onClick={this.openModal}> show</button>
        }
        return (
            <div>
                {modal}
            </div>
        );
    }
}
export default FortuneTeller;