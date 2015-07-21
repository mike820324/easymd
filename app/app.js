import React from "react";

import Editor from "./Editor";
import Previewer from "./Previewer";


var App = React.createClass({
    displayName: "App",

    getInitialState() {
        return {
            editorValue: ""
        };
    },

    handleChange(value) {
        this.setState({editorValue: value});
    },

    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}> Easy Markdown Editor</h1>
                <Editor onChange={this.handleChange}/>
                <Previewer mdSrc={this.state.editorValue}/>
            </div>
        );
    }
});


React.render(
    <App />,
    document.getElementById("app")
);
