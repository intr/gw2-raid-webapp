import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { addRole, addClass, addUsername } from '../../redux/actions/addRaidInfo';
import { addCharacterInfo } from '../../redux/actions/CharacterList';
import { submitApp } from '../../redux/actions/index';
const RaisedButton = require('material-ui/lib/raised-button');
import RoleSelection from './gwRoleSelection/gwRoleSelection';
import ClassSelection from './gwClassSelection/gwClassSelection';
import UsernameField from './autocomplete/autocomplete';
import Immutable from 'immutable';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import events from './events';

BigCalendar.momentLocalizer(moment);

class AddRaidInfo extends Component {
    render() {
        let injectTapEventPlugin = require("react-tap-event-plugin");
        injectTapEventPlugin();
        const { dispatch, raidInfo, characterList } = this.props;
        const DPS = raidInfo.get('Dps') ? "DPS: TRUE" : "DPS: FALSE";
        const TANK = raidInfo.get('Tank') ? "TANK: TRUE" : "TANK: FALSE";
        const HEALER = raidInfo.get('Healer') ? "HEALER: TRUE" : "HEALER: FALSE";
        const usernames = ["Flatbutter.1234", "Instars.1235"];
        return (
            <div className="pure-g">
                <div className="pure-u-5-24">
                    <UsernameField
                        onUpdateInput={username => {
                        dispatch(addUsername(username));
                    }}
                        usernames={usernames}
                    />
                </div>
                <div className="pure-u-3-24">
                    <RoleSelection
                        raidInfo={raidInfo}
                        onRoleClick={role => {
                    dispatch(addRole(role));
                }}
                    />
                </div>
                <div className="pure-u-16-24">
                    <ClassSelection
                        selectedClass={raidInfo.get('class')}
                        onClassClick={GWclass => {
                    dispatch(addClass(GWclass));
                    }}
                    />
                </div>
                <div className="submit">
                    <RaisedButton
                        primary={true}
                        onTouchTap={() => {
                            if(raidInfo.get('Dps') || raidInfo.get('Tank') || raidInfo.get('Healer')){
                                if(raidInfo.get('class')) {
                                    if(raidInfo.get('username')) {
                                        if(characterList.size > 0) {
                                            dispatch(submitApp(characterList.toJS()))
                                        } else {
                                            console.log("ADD SOMETHING TO SUBMIT")
                                        }
                                    } else {
                                    console.log("ENTER USERNAME!")
                                    }
                                }
                            } else {
                            console.log("SELECT ROLE!")
                            }
                        }}
                        label="Submit" />
                </div>
                <div className="pure-u-1-1">
                    <BigCalendar
                        selectable
                        toolbar="false"
                        culture="lv-LV"
                        events={events}
                        defaultView='week'
                        defaultDate={new Date(2016,1,1)}
                        onSelectEvent={event => alert(event.title)}
                        onSelectSlot={(slotInfo) => /*alert(
                            `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                            `\nend: ${slotInfo.end.toLocaleString()}`*/
                        (
                            events.push(
                                {
                                    "title": "new Event",
                                    "start": slotInfo.start,
                                    "end": slotInfo.end
                                }
                            ),
                            dispatch(addCharacterInfo({
                                        Dps: raidInfo.get("Dps"),
                                        Tank: raidInfo.get("Tank"),
                                        Healer: raidInfo.get("Healer"),
                                        class: raidInfo.get("class"),
                                        username: raidInfo.get("username"),
                                        startDate: slotInfo.start,
                                        endDate: slotInfo.end
                                        })),
                            this.forceUpdate()
                      )}
                    />
                </div>
            </div>
        )
    }
}

function select(state) {
    return {
        raidInfo: state.raidInfo,
        characterList: state.characterList,
        submitApp: state.submitApp
    }
}

export default connect(select)(AddRaidInfo)