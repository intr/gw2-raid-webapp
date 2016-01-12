const AutoComplete = require('material-ui/lib/auto-complete');
import React from 'react';
import { Component } from 'react';

class UsernameField extends Component {
    render() {
        return (
            <AutoComplete
                hintText="> GW2 account-name*"
                dataSource = {this.props.usernames}
                showAllItems = {true}
                onUpdateInput={(t) => this.props.onUpdateInput(t)}
                onNewRequest={(t) => this.props.onUpdateInput(t)}
            />
        )
    }
}

export default UsernameField;