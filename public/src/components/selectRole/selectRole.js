import React from 'react';
import Role from './role';

class SelectRole extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Role role="DPS" />  <Role role="HEAL" />  <Role role="TANK" />
            </div>
        );
    }
}

export default SelectRole;