import { Component } from 'react';
import React from 'react';
import GwClass from './gwClass';

class ClassSelection extends Component {
    render() {
        return (
            <div>
                <GwClass selectedClass={this.props.selectedClass} onClick={(id) => this.props.onClassClick(id)} class="Elementalist" />
                <GwClass selectedClass={this.props.selectedClass} onClick={(id) => this.props.onClassClick(id)} class="Engineer" />
                <GwClass selectedClass={this.props.selectedClass} onClick={(id) => this.props.onClassClick(id)} class="Guardian" />
                <GwClass selectedClass={this.props.selectedClass} onClick={(id) => this.props.onClassClick(id)} class="Mesmer" />
                <GwClass selectedClass={this.props.selectedClass} onClick={(id) => this.props.onClassClick(id)} class="Necromancer" />
                <GwClass selectedClass={this.props.selectedClass} onClick={(id) => this.props.onClassClick(id)} class="Ranger" />
                <GwClass selectedClass={this.props.selectedClass} onClick={(id) => this.props.onClassClick(id)} class="Revenant" />
                <GwClass selectedClass={this.props.selectedClass} onClick={(id) => this.props.onClassClick(id)} class="Thief" />
                <GwClass selectedClass={this.props.selectedClass} onClick={(id) => this.props.onClassClick(id)} class="Warrior" />

            </div>
        )
    }
}

export default ClassSelection;