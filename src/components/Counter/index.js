import React from 'react';

import './index.css';

function increment(state, props) {
    return { count: state.count + props.step };
}

class Counter extends React.Component {
    state = {
        count: 0
    };

    increment = () => {
        this.setState(increment);
    };
    
    decrement = () => this.setState(state => ({ count: state.count - 1 }));

    render() {
        return (
            <div className="counter">
                <button onClick={this.decrement}>-</button>
                <span>{this.state.count}</span>
                <button onClick={this.increment}>+</button>
            </div>
        );
    }
}

export default Counter;