import React from 'react';

import Counter from './components/Counter';

export default class App extends React.Component {
    state = {
        count: 0
    }

    handleChange = count => this.setState(state => ({ count }))

    render() {
        return (
            <React.Fragment>
                <Counter onChange={this.handleChange}/>

                <Counter count={this.state.count} onChange={this.handleChange}/>
            </React.Fragment>

        );
    }
}