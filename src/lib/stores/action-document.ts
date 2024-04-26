import { None, Some, type SprotOption } from "$lib/utils";
import type { SprotAppViewController, SprotDocumentState } from "$wasm/sprot_app";
import { writable } from "svelte/store";

const documentState = writable<SprotDocumentState[]>([]);

export const getActionDocument = (predicate: (documents: SprotDocumentState[], active: SprotOption<SprotDocumentState>) => void) => {
    documentState.subscribe(state => {

        for(const doc of state) {
            if(doc.active) {
                predicate(state, Some(doc));
            }
        }

        return state;
    });
}

export const setDocuments = (documents: SprotDocumentState[]) => {
    documentState.update(() => documents);
}

export const setActionDocument = (app: SprotAppViewController, id: number) => {
    documentState.update(state => {

        // let is_active: boolean = false;``

        for(const doc of state) {
            if (doc.active && doc.document_id === id) {
                return state; // no need to change its the same document
            }
        }

        // console.log("docs: ", app.set_action_document(id));
        

        return app.set_action_document(id);
    })
}