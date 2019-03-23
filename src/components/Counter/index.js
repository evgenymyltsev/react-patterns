import React from 'react';

import './index.css';

function Counter({ count, decrement, increment}) {
    return (
<div className="counter">
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
    )
}

export default Counter;