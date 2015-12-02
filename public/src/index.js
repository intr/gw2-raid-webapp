import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import AddRaidInfo from './components/addRaidInfo/addRaidInfo';
import ViewComponent from './components/viewComponent/viewComponent';

import Store from './redux/store';
class RaidApp extends Component {
    render() {
        return (
            <Provider store={Store}>
                <div>
                    <AddRaidInfo />
                    <ViewComponent />
                </div>
            </Provider>
        )
    }
}

render(<RaidApp />, document.getElementById('example'));