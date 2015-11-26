import React from 'react';
import Class from './class';

class SelectClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue: "Warrior"
        }
    }

    handleChange(e) {
        this.setState({selectValue: e.target.value});
    }

    render() {
        let message = "You selected " + this.state.selectValue;
        return (
            <div>
                <select defaultValue={this.state.selectValue} onChange={this.handleChange.bind(this)}>
                    <Class class="Mesmer" />
                    <Class class="Warrior" />
                    <Class class="Elementalist" />
                </select>
                <p>{message}</p>
            </div>
        );
    }
}

export default SelectClass;