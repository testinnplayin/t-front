import React from 'react';

import Display from "./Display";
import Form from "./Form";

import { shortenURL, transformURLForBack } from "../helpers/url-converter";

import { URLCorrespondance } from "../interfaces/url-correspondance";

import { BASE_ROUTE } from "../constants/base-route";

type MainContainerState = {
    originalURL: string;
    shortURL: string;
    apiRoute: string;
}

const URL_ENDPOINT = `${BASE_ROUTE}/urls`;

export default class MainContainer extends React.Component {
    state: MainContainerState;

    constructor(props: any) {
        super(props);
        this.state = { originalURL: '', shortURL: '', apiRoute: `${BASE_ROUTE}/${URL_ENDPOINT}` };

        this.handleChange = this.handleChange.bind(this);
        this.shortenURL = this.shortenURL.bind(this);
    }

    handleChange(originalURL: string) {
        this.setState({ originalURL: originalURL });
    }

    async shortenURL() {
        this.setState({ apiRoute: URL_ENDPOINT });
        const originalURL = this.state.originalURL;
        const data = await shortenURL(originalURL);
        const urlCorrespondance: URLCorrespondance = data.urlCorrespondance;

        this.setState({
            shortURL: urlCorrespondance.shortenedURL,
            apiRoute: `${this.state.apiRoute}/${transformURLForBack(urlCorrespondance.shortenedURL)}`
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
                <Display
                    apiRoute={this.state.apiRoute}
                    originalURL={this.state.originalURL}
                    shortURL={this.state.shortURL} />
            </div>
        );
    }
}