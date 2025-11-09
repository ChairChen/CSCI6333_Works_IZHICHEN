import React from "react";

export default class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: "Hello React" };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        alert(this.state.message);
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Click Me!
            </button>
        );
    }
}