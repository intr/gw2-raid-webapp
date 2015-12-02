import { Component } from 'react';
import React from 'react';

class Role extends Component {
    render() {
        let imgSrc = "/build/img/" + this.props.role + "Icon.jpg";
        return (
            <img onClick={this.props.onClick} src={imgSrc} id={this.props.role}/>
        )
    }
}

export default Role;