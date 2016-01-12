import { Component } from 'react';
import React from 'react';

class GwClass extends Component {

    onClick(e){
        this.props.onClick(e.target.id)
    }

    render() {
        let imgSrc = "/build/img/classes/" + this.props.class + ".png";
        const { selectedClass } = this.props;
        return (
            <img
                style={{
                width:'80px',
                height:'80px',
                opacity: selectedClass == this.props.class ? '1' : '0.2'
                }}
                onClick={this.onClick.bind(this)}
                title={this.props.class}
                alt={this.props.class}
                id={this.props.class}
                src={imgSrc} />
        )
    }
}

export default GwClass