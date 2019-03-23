import React from 'react';

import Counter from './components/Counter';

export default class App extends React.Component {
    render() {
        return (
            <Counter>
                {props => (
                    <div className="counter">
                        <button onClick={props.decrement}>-</button>
                        <span>{props.count}</span>
                        <button onClick={props.increment}>+</button>
                    </div>
                )}
            </Counter>
        );
    }
}