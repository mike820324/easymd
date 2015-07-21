import React from "react";
// import Markdown from "react-remarkable";
import Markdown from "remarkable";

const md = new Markdown();


var Previewer = React.createClass({
    displayName: "Previewer",
    propTypes: {
        mdSrc: React.PropTypes.string.isRequired
    },

    renderMarkdown() {
        return {
            __html: md.render(this.props.mdSrc)
        };
    },

    render() {
        const containerStyle = {
            display: "inline-block",
            width: "45%",
            height: "90%",
            position: "absolute",
            right: "5px"
        };

        return (
            <div style={containerStyle} dangerouslySetInnerHTML={this.renderMarkdown()}>
            </div>
        );
    }
});

export default Previewer;
