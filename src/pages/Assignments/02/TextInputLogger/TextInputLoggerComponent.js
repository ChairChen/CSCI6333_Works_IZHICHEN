import React from "react";
export default class TextInputLogger extends React.Component {
    constructor(props) {
        super(props);
        this.state = { inputValue: "" };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({ inputValue: event.target.value });
    }
    render() {
        return (
            <section>
                <h2>Text Input Logger Component</h2>
                <input 
                    type="text" 
                    value={this.state.inputValue} 
                    onChange={this.handleChange} 
                    placeholder="Type Something..." />
                <p>Current Value: {this.state.inputValue}</p>
            </section>
        );
    }
}