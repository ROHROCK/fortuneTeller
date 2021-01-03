import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShareComponent from '../Share/share.component';
import "./FortuneTeller.css";

import { ReactComponent as TarotCard } from "../../Assets/Icons/tarotcard.svg";

class FortuneTeller extends Component {
    //  subtitle;
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            message: 'This is your fortune of the day: ',
            fortune: '',
        }
    }

    render() {
        return (
            <div className="tarot">
                <div className="tarot-card-wrap">
                    <div className="tarot-card front">
                        <TarotCard />
                    </div>
                    <div className="tarot-card back">
                        <div className="Message_header">
                            {this.state.message}
                        </div>
                        <div className="Message_Body">
                            {this.props.location.state.fortune}
                        </div>
                        
                    </div>
                </div>
                <div className="share">
                    <p>Want to Share ? Definately you can do !!</p>
                    <ShareComponent fortuneMessage={this.props.location.state.fortune}/>
                    <Link to={{ pathname: '/' }}>
                    <button className="Fortune_button restart_button">
                        Want to Restart ?
                    </button>
                    </Link>
                </div>
            </div>
        );
    }
}
export default FortuneTeller;