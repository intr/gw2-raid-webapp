import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
const List = require('material-ui/lib/lists/list');
const Avatar = require('material-ui/lib/avatar');
const ListDivider = require('material-ui/lib/lists/list-divider');
const ListItem = require('material-ui/lib/lists/list-item');
import { removeCharacterInfo } from '../../redux/actions/CalendarEventList';

class ViewComponent extends Component {


    render() {
        const { dispatch, raidInfo, calendarEventList } = this.props;
        return (
            <div>
                <List key="CHARACTER_LIST">
                    {calendarEventList.map((character, index) => {
                        const imgSrc = "/build/img/classes/" + character.class + ".png";
                        const HEALER = character.Healer ? "Healer: True" : "Healer: False";
                        const TANK = character.Tank ? "Tank: True" : "Tank: False";
                        const DPS = character.Dps ? "Dps: True" : "Dps: False";

                        return (
                            <div id={index}>
                                <ListItem
                                    key={index}
                                    value={index}
                                    leftAvatar={<Avatar key={imgSrc} src={imgSrc} />}
                                    primaryText={character.username}
                                    initiallyOpen={true}
                                    onTouchTap={() => {
                                        dispatch(removeCharacterInfo(index));
                                    }}
                                    nestedItems={[
                                    <div>
                                        <ListItem key={DPS} primaryText={DPS} />
                                        <ListItem key={HEALER} primaryText={HEALER} />
                                        <ListItem key={TANK} primaryText={TANK} />
                                        </div>
                                    ]}
                                />
                            </div>
                        )
                    })}
                </List>
            </div>
        )
    }
}

function select(state) {
    return {
        raidInfo: state.raidInfo,
        calendarEventList: state.calendarEventList
    }
}

export default connect(select)(ViewComponent)