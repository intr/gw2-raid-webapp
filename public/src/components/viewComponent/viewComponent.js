import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
const Card = require('material-ui/lib/card/card');
const CardHeader = require('material-ui/lib/card/card-header');

class ViewComponent extends Component {
    render() {
        const { raidInfo, characterList } = this.props;
        const DPS = raidInfo.get('Dps') ? "DPS: TRUE" : "DPS: FALSE";
        const TANK = raidInfo.get('Tank') ? "TANK: TRUE" : "TANK: FALSE";
        const HEALER = raidInfo.get('Healer') ? "HEALER: TRUE" : "HEALER: FALSE";
        const CLASS = raidInfo.get('class');
        const USERNAME = raidInfo.get('username');
        return (
            <div>
                <Card>
                    <CardHeader
                        title="Roles"
                    />
                    <p>{DPS}</p>
                    <p>{HEALER}</p>
                    <p>{TANK}</p>
                    <p>{CLASS}</p>
                    <p>{USERNAME}</p>
                </Card>
                {characterList.map((character, index) => {
                    return (
                        <div key={index}>
                            <h1>{character.username}</h1>
                            <p>{character.class}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

function select(state) {
    return {
        raidInfo: state.raidInfo,
        characterList: state.characterList
    }
}

export default connect(select)(ViewComponent)