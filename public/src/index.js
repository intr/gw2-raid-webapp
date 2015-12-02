import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from './redux/store';
class RaidApp extends Component {
    render() {
        return (
            <Provider store={Store}>
                <h1>RaidApp</h1>
            </Provider>
        )
    }
}

render(<RaidApp />, document.getElementById('example'));