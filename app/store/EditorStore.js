import alt from "../alt";
import editorAction from "../action/EditorAction";

class EditorStore {
    constructor() {
        this.editorContent = "";

        this.bindListeners({
            onUpdateContent: editorAction.updateContent
        });
    }

    onUpdateContent(content) {
        this.editorContent = content;
    }
}

export default alt.createStore(EditorStore);


