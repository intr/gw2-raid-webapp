import React from 'react';
import ReactDOM from 'react-dom';
import SelectRole from './components/selectRole/selectRole.js';
const AppBar = require('material-ui/lib/app-bar');

class ToggleText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showDefault: true};
        this.toggle = this.toggle.bind(this);
    }

    toggle(e) {
        e.preventDefault();
        this.setState({showDefault: !this.state.showDefault})
    }

    render() {
        var message = this.props.default;
        if (!this.state.showDefault) {
            message = this.props.alt;
        }
        return (
            <div>
                <h1>Hello {message}!</h1>
                <a href="" onClick={this.toggle}>Toggle</a>
            </div>
        );
    }
}

ReactDOM.render(
    <SelectRole />,
    document.getElementById('example')
);