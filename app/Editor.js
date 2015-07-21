import React from "react";

var Editor = React.createClass({
    displayName: "Editor",

    propTypes: {
        onChange: React.PropTypes.func.isRequired
    },

    getInitialState() {
        return {
            editorValue: "hello world"
        };
    },

    handleChange() {
        const node = this.refs.editor.getDOMNode();
        this.setState({editorValue: node.value});
        this.props.onChange(this.state.editorValue);
    },

    render() {
        const containerStyle = {
            display: "inline-block",
            width: "45%",
            height: "90%"
        };

        const titleStyle = {
            textAlign: "center"
        };

        const textAreaStyle = {
            position: "relative",
            left: "5%",
            height: "90%",
            width: "90%",
            padding: "10px 20px 20px 10px",
            resize: "none",
            outline: "none",
            overflow: "scroll",
            fontSize: "medium"
        };

        return (
            <div style={containerStyle}>
                <h1 style={titleStyle}> Editor </h1>
                <textarea
                    style={textAreaStyle}
                    ref="editor"
                    onChange={this.handleChange}
                    onKeyUp={this.handleChange}
                    value={this.state.editorValue} />
            </div>
        );
    }
});

export default Editor;
