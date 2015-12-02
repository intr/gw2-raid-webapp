import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import RoleSelection from './components/addRaidInfo/gwRoleSelection/gwRoleSelection.js';
import Store from './redux/store';
class RaidApp extends Component {
    render() {
        return (
            <Provider store={Store}>
                <RoleSelection />
            </Provider>
        )
    }
}

render(<RaidApp />, document.getElementById('example'));