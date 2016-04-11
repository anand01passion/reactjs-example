'use strict';
var React = require('react');

var Example = React.createClass({
    render: function () {
        return (
                <div className = "knx-loading" >
               Hello world!
                < /div>
                )
    }
});

React.render(<Example />, document.getElementById('example'));