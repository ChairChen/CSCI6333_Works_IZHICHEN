import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        // Note 1-1. bind the class member method/function
        this.ClassMethod_incrementCount = this.ClassMethod_incrementCount.bind(this);
    }
    componentDidMount() { console.log('Counter Component has been mounted to this app'); }
    componentDidUpdate() { console.log('Counter Component has been updated in this app'); }
    componentWillUnmount() { console.log('Counter Component has been removed from this app'); }
    // Note 1-1. this function needs to be bind in the constructor
    ClassMethod_incrementCount() {
        this.setState({ count: this.state.count + 1 });
    }
    // Note 1-2. or it can be written like... most modern and cleanest way
    // by using arrow function automatically bind to this class)
    ArrowFunction_incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }
    render() {
        return (
            <div>
                <h1>Class Component Counter</h1>
                <h2>current count: {this.state.count}</h2>
                <br />
                <button onClick={this.ClassMethod_incrementCount}>increment count(requires constructor binding)</button>
                <br /><br />
                <button onClick={this.ArrowFunction_incrementCount}>increment count(arrow function class property)</button>
                <br /><br />
                {/* Note 1-3. not prefer inline arrow function, this create new function instance on every render */}
                <button onClick={ () => { this.setState({count: this.state.count+1}); } }>increment count(inline arrow function call)</button>
            </div>
        );
    }
}

