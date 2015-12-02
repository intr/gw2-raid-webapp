import React from 'react';
import { Component } from 'react';
import { render } from 'react-dom';

class RaidApp extends Component {
    render() {
        return (
            <h1>RaidApp</h1>
        )
    }
}

render(<RaidApp />,document.getElementById('example'));