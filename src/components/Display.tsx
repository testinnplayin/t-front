import React from "react";

type MainContainerProps = {
    apiRoute: string;
    originalURL: string;
    shortURL: string;
}

export default class Display extends React.Component<MainContainerProps> {
    render() {
        return (
        <div>
            <legend>Shortened URL:</legend>
            <a href={this.props.apiRoute} target="_blank" rel="noreferrer">{this.props.shortURL}</a>
        </div>
        );
    }
}