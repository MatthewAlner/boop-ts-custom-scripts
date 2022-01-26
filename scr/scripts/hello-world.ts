// noinspection JSUnusedLocalSymbols

import {IState} from '../state';

/**
 {
    "api":1,
    "name":"Hello World",
    "description":"Replaces all text with hello world",
    "author":"automattech",
    "icon":"quote",
    "tags":"replace,hello"
  }
 **/

function main(state: IState) {
  state.text = `Hello World`
}
