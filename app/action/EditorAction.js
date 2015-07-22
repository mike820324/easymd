import alt from "../alt";

class EditorAction {
    updateContent(content) {
        this.dispatch(content);
    }
}

export default alt.createActions(EditorAction);
