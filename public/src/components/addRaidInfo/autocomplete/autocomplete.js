const AutoComplete = require('material-ui/lib/auto-complete');
import React from 'react';
import { Component } from 'react';

class UsernameField extends Component {
    render() {
        return (
            <AutoComplete
            dataSource = {this.props.usernames}
            showAllItems = {true}
            onUpdateInput={(t) => this.props.onUpdateInput(t)}
            onNewRequest={(t) => this.props.onUpdateInput(t)}
            />
        )
    }
}

export default UsernameField;