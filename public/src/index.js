import React from 'react';
import ReactDOM from 'react-dom';
const AppBar = require('material-ui/lib/app-bar');

class Hello extends React.Component {
    render() {
    return <h1>Hello, world</h1>
}
}

ReactDOM.render(
    <Hello />,
    document.getElementById('example')
);