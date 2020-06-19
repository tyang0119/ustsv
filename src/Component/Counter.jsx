import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment() {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement() {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (

            <div>
                <h1> {this.state.count}</h1>
                <button className='inc' onClick={(e) => this.increment(e)}>Increment!</button>
                <button className='dec' onClick={(e) => this.decrement(e)}>Decrement!</button>
            </div>
        );
    }
};

export default Counter;