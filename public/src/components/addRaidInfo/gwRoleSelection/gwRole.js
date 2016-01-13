import { Component } from 'react';
import React from 'react';
import Immutable from 'immutable';

class Role extends Component {


    onClick(e) {
        this.props.onClick(e.target.id);
    }

    render() {
        const raidInfo = Immutable.Map(this.props.raidInfo);
        let imgSrc = "/img/" + this.props.role + "Icon.jpg";
        return (
            <a className={raidInfo.get(this.props.role) ? "selected" : "unselected"} href="#">
                <img
                    title={this.props.role + "-" + raidInfo.get(this.props.role)}
                    style={{
                    borderWidth: raidInfo.get(this.props.role) ? '2px' : '2px',
                    borderStyle: raidInfo.get(this.props.role)  ? 'solid' : 'dashed',
                    color: raidInfo.get(this.props.role) ? 'yellow' : 'black'
                    }}
                    onClick={this.onClick.bind(this)} src={imgSrc} id={this.props.role}/>
            </a>
        )
    }
}


export default Role;