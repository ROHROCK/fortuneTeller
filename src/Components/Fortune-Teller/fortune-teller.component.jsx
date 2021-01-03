import React, { Component } from 'react';
import './fortune-teller.css'
import { Button, Modal } from "react-bootstrap";
import { Link } from 'react-router-dom';
import ShareComponent from '../Share/share.component';
import fortuneJSON from "../../Assets/Icons/data/fortunes.json";

class FortuneTeller extends Component {

    //  subtitle;
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            message: 'This is your fortune of the day: ',
            fortune: '',
        }
        // eslint-disable-next-line
        const openModal = this.openModal.bind(this);
        // eslint-disable-next-line
        const closeModal = this.closeModal.bind(this);
    }
    async componentDidMount() {
        console.log(this.props);
        await this.setState({ fortune: fortuneJSON.fortunes[this.props.location.state.selected] })
        console.log(this.state.fortune);
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
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <Modal style={{ marginTop: "200px", borderRadius: '50px 50px' }} show={this.state.modalIsOpen} onHide={this.closeModal} animation={false}>
                    <Modal.Header style={{ backgroundColor: "#FFE031" }} closeButton>
                    </Modal.Header>
                    <Modal.Body style={{ backgroundColor: "#FFE031" }} >{this.state.message + this.state.fortune}</Modal.Body>
                    <Modal.Footer style={{ backgroundColor: "#FFE031" }} >
                        <ShareComponent fortuneMessage={this.state.fortune} />
                        <Link to={{ pathname: '/' }}>
                            <Button className="btn btn-transparent" style={{ color: "#F830CF", border: "2px solid #F830CF", padding: "5px 40px", borderRadius: "40px" }} variant="Light" onClick={this.closeModal}>
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