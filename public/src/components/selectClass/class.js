import React from 'react';


class Class extends React.Component {

    render() {
        return (
            <option value={this.props.class}>{this.props.class}</option>
        )
    };
}

export default Class