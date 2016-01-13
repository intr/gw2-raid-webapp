import { Component } from 'react';
import React from 'react';
import Immutable from 'immutable';

class GwClass extends Component {

    onClick(e){
        this.props.onClick(e.target.id)
    }

    render() {
        const raidInfo = Immutable.Map(this.props.raidInfo);
        let imgSrc = "/img/classes/" + this.props.class + ".png";
        return (
            <a className={raidInfo.get(this.props.class) ? "selected" : "unselected"} href="#">
            <img
                style={{
                width:'80px',
                height:'80px'
                }}
                onClick={this.onClick.bind(this)}
                title={this.props.class}
                alt={this.props.class}
                id={this.props.class}
                src={imgSrc} />
            </a>
        )
    }
}

export default GwClass