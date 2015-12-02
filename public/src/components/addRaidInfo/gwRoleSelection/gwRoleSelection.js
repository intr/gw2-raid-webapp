import Role from './gwRole';
import React from 'react';
import { Component } from 'react';

class RoleSelection extends Component {
    render() {
        return (
            <div>
                <Role role="Dps" />
                <Role role="Healer" />
                <Role role="Tank" />
            </div>
        )
    }
}

export default RoleSelection;