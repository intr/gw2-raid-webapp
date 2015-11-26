import React from 'react';
import ReactDOM from 'react-dom';
const AppBar = require('material-ui/lib/app-bar');

ReactDOM.render(
    <AppBar
        title="MegaTitles"
        iconClassNameRight="muidocs-icon-navigation-expand-more" />,
    document.getElementById('example')
);