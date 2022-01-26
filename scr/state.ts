/**
 * `fullText` will contain or set the entire string from the Boop editor, regardless of whether a selection is made or not.
 * `selection` will contain or set the currently selected text, one at a time if more than one selection exists (see below).
 * `text` will behave like selection if there is one or more selected piece of text, otherwise it will behave like fullText.
 */
export interface IState {
    fullText: string;
    selection: string;
    text: string;
}


