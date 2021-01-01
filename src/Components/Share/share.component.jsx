import React, { Component } from "react";
import { FacebookIcon, TwitterIcon, WhatsappIcon, EmailIcon, LinkedinIcon } from 'react-share';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton, LinkedinShareButton } from 'react-share'

class Share extends Component {
    state = {
        url: "https://newyearnewhack.web.app/",
        message: 'This is my 2021 fortune \n',
        hashtag: "#NewYearNewHack",
        subject: 'My Fortune for 2021',
        title: 'Fortune Teller'
    }
    render() {
        return (
            <div>
                <FacebookShareButton
                    url={this.state.url}
                    quote={this.state.message}
                    hashtag={this.state.hashtag}>
                    <FacebookIcon iconFillColor="white" size="50px" round={true} />
                </FacebookShareButton>
                <TwitterShareButton
                    url={this.state.url}
                    title={this.state.message}
                    hashtag={this.state.hashtag}>
                    <TwitterIcon iconFillColor="white" size="50px" round={true} />
                </TwitterShareButton>
                <WhatsappShareButton
                    url={this.state.url}
                    title={this.state.message}
                >
                    <WhatsappIcon size="50px" round={true} />
                </WhatsappShareButton>
                <EmailShareButton
                    subject={this.state.subject}
                    body={this.state.message + this.state.url}
                >
                    <EmailIcon size="50px" round={true} />
                </EmailShareButton>
                <LinkedinShareButton
                    title={this.state.title}
                    summary={this.state.message}
                    source={this.state.url}
                >
                    <LinkedinIcon size="50px" round={true} />
                </LinkedinShareButton>

            </div>
        );
    }
}
export default Share;