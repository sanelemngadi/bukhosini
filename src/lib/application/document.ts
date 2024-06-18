import InitDocument from "$components/canvas/InitDocument.svelte";
import { modifyState } from "$lib/stores";
import { SprotDocument } from "$wasm/sprot_app";
import type { ComponentType } from "svelte";

abstract class SprotDocumentState {
    abstract changeState(document: SprotDocument): SprotDocumentState;
    abstract getName(): string;
    abstract getDocument(): SprotDocument | null;
    getComponent(): ComponentType | null {
        return null;
    }
}

// add SavedState;

class SprotDocumentInitState extends SprotDocumentState {
    constructor() {
        super();
    }

    changeState(document: SprotDocument): SprotDocumentState {
        modifyState(state => {
            state.showPanels = false;
            return state;
        });

        return new SprotDocumentSetState(document);
    }

    getDocument(): SprotDocument | null {
        return null;
    }

    getComponent(): ComponentType | null {
        return InitDocument;
    }

    getName(): string {
        return "New Document";
    }
}

class SprotDocumentSetState extends SprotDocumentState {
    constructor(private _document: SprotDocument) {
        super();
    }

    changeState(): SprotDocumentState {
        modifyState(state => {
            state.showPanels = true;
            return state;
        });
        return this;
    }
 
    getDocument(): SprotDocument {
        return this._document;
    }

    getName(): string {
        return this._document.get_name();
    }
}

export class SprotClientDocument {
    private state: SprotDocumentState;
    constructor() {
        this.state = new SprotDocumentInitState();
    }

    // static from(document: SprotDocument): SprotClientDocument {
    //     const docu = new SprotClientDocument();
    //     docu.changeState(document);
    //     return docu;
    // }

    get id(): number {
        return this.state.getDocument()?.id || -1;
    }

    // set id(act: number) {
    //     this._id = act;
    // }

    get active(): boolean {
        return this.state.getDocument()?.active || false;
    }

    set active(act: boolean) {
        const i = this.state.getDocument();
        if(i) {
            i.active = act;
        }
    }

    changeState(document: SprotDocument) {
        this.state = this.state.changeState(document);
    }

    getName(): string {
        return this.state.getName();
    }

    getDocument(): SprotDocument | null {
        return this.state.getDocument();
    }

    getComponent(): ComponentType | null {
        return this.state.getComponent();
    }
}