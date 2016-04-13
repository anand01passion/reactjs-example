'use strict';
var React = require('react');
var AceEditor  = require('react-ace-wrapper');
let brace  = require('brace');
require('brace/mode/javascript');
require('brace/mode/css');
require('brace/theme/github');
require('brace/theme/twilight');
var Example = React.createClass({
    changeEditorContent : function(val){
        this.setState({editor_value:val});
    },
    getInitialState : function(){
        return {editor_value : ""};
    },
    render: function () {
        var editor_mode = "css";
        var editor_skin = 'github';
        return (<div >
               <AceEditor
                                        mode={editor_mode}
                                        theme={editor_skin}
                                        onChange={this.changeEditorContent}
                                        name="ace_editor"
                                        width="100%"
                                        value={this.state.editor_value} 
                                    />
                < /div>);
    }
});

React.render(<Example />, document.getElementById('example'));