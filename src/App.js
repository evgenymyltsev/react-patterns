import React from 'react';

import CounterProvider from './components/Counter';

export default class App extends React.Component {
    render() {
        return (
            <CounterProvider>
                <CounterProvider.Consumer>
                    {counter => 
                        <div className="counter">
                            <button onClick={counter.decrement}>-</button>
                            <span>{counter.count}</span>
                            <button onClick={counter.increment}>+</button>
                        </div>
                    }
                </CounterProvider.Consumer>
            </CounterProvider>
        );
    }
}