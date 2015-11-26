import React from 'react';

class Role extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    toggle(e){
        e.preventDefault();
        console.log("CLICKED");
        this.setState({active: !this.state.active});
    }

    render() {
        return (
                <p className={"pointerCursor noselect raidRole-" + this.state.active} onClick={this.toggle.bind(this)}>{this.props.role}</p>
        )
    };
}

export default Role