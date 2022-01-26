"use strict";
// noinspection JSUnusedLocalSymbols
Object.defineProperty(exports, "__esModule", { value: true });
/**
 {
    "api":1,
    "name":"Count Duplicate Lines",
    "description":"Returns Unique lines with a count",
    "author":"automattech",
    "icon":"counter",
    "tags":"count,duplicate,dupe,lines"
  }
 **/
function main(state) {
    const lineMap = new Map();
    const lines = state.text.split(`\n`);
    lines.forEach(line => lineMap.set(line, (lineMap.get(line) ?? 0) + 1));
    state.text = Array.from(lineMap.entries()).map(([line, count]) => `${count} ${line}`).join(`\n`);
}
