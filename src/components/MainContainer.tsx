import React from "react";

import Display from './Display';
import Form from './Form';

type MainContainerState = {
    originalURL: string;
    shortURL: string
}

export default class MainContainer extends React.Component {
    state: MainContainerState;

    constructor(props: any) {
        super(props);
        this.state = { originalURL: '', shortURL: '' };

        this.handleChange = this.handleChange.bind(this);
        this.shortenURL = this.shortenURL.bind(this);
    }

    handleChange(originalURL: string) {
        this.setState({ originalURL: originalURL });
    }

    shortenURL() {
        const originalURL = this.state.originalURL;
        const bitsOfURL = originalURL.split('/');
        this.setState({
            shortURL: bitsOfURL[bitsOfURL.length - 1]
        });
    }

    render() {
        return (
            <div>
                <h1>URL Shortener</h1>
                <p>Please enter a URL (for example http://example.com/things)</p>
                <Form originalURL={this.state.originalURL}
                handleBtnClick={this.shortenURL}
                handleInputChange={this.handleChange} />
                <Display originalURL={this.state.originalURL} shortURL={this.state.shortURL} />
            </div>
        );
    }
}