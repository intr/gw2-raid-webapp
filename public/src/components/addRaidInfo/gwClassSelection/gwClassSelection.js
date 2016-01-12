import { Component } from 'react';
import React from 'react';
import GwClass from './gwClass';

class ClassSelection extends Component {
    render() {
        return (
            <div>
                <label>Profesija: </label>
                <div>
                    <GwClass raidInfo={this.props.raidInfo} onClick={(id) => this.props.onClassClick(id)} class="Elementalist" />
                    <GwClass raidInfo={this.props.raidInfo} onClick={(id) => this.props.onClassClick(id)} class="Engineer" />
                    <GwClass raidInfo={this.props.raidInfo} onClick={(id) => this.props.onClassClick(id)} class="Guardian" />
                    <GwClass raidInfo={this.props.raidInfo} onClick={(id) => this.props.onClassClick(id)} class="Mesmer" />
                    <GwClass raidInfo={this.props.raidInfo} onClick={(id) => this.props.onClassClick(id)} class="Necromancer" />
                    <GwClass raidInfo={this.props.raidInfo} onClick={(id) => this.props.onClassClick(id)} class="Ranger" />
                    <GwClass raidInfo={this.props.raidInfo} onClick={(id) => this.props.onClassClick(id)} class="Revenant" />
                    <GwClass raidInfo={this.props.raidInfo} onClick={(id) => this.props.onClassClick(id)} class="Thief" />
                    <GwClass raidInfo={this.props.raidInfo} onClick={(id) => this.props.onClassClick(id)} class="Warrior" />
                </div>
            </div>
        )
    }
}

export default ClassSelection;