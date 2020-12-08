import React, { ChangeEvent, FormEvent } from "react";

type MainContainerProps = {
    originalURL: string;
    handleBtnClick: () => void;
    handleInputChange: (originalURL: string) => void;
}

type FormProps = {
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
}

export default class Form extends React.Component<MainContainerProps,FormProps> {
    constructor(props: MainContainerProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: ChangeEvent<HTMLInputElement>) {
        this.props.handleInputChange(event.target.value);
    }

    handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.handleBtnClick();
    }

    render() {
        let originalURL = this.props.originalURL;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Long URL
                </label>
                <input value={originalURL} onChange={this.handleChange} type="text"/>
                <button type="submit" >Submit</button>
            </form>
        );
    }
}