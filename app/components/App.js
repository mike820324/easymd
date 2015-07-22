import React from "react";

import editorStore from "../store/EditorStore";
import Editor from "./Editor";
import Previewer from "./Previewer";


var App = React.createClass({
    displayName: "App",

    getInitialState() {
        return editorStore.getState();
    },

    componentDidMount() {
        editorStore.listen(this.onChange);
    },

    componentWillUnmount() {
        editorStore.unlisten(this.onChange);
    },

    onChange() {
        this.setState(editorStore.getState());
    },

    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}> Easy Markdown Editor</h1>
                <Editor onChange={this.handleChange}/>
                <Previewer mdSrc={this.state.editorContent}/>
            </div>
        );
    }
});

export default App;
