import Role from './gwRole';
import React from 'react';
import { Component } from 'react';

class RoleSelection extends Component {
    render() {
        return (
            <div>
                <Role raidInfo={this.props.raidInfo} onClick={(id) => this.props.onRoleClick(id)} role="Dps"/>
                <Role raidInfo={this.props.raidInfo} onClick={(id) => this.props.onRoleClick(id)} role="Healer"/>
                <Role raidInfo={this.props.raidInfo} onClick={(id) => this.props.onRoleClick(id)} role="Tank"/>
            </div>
        )
    }
}

export default RoleSelection;