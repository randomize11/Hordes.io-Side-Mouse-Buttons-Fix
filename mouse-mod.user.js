// ==UserScript==
// @name         Hordes.io Side Mouse Buttons Fix
// @version      1.0
// @match        https://hordes.io/play
// @description  Forces standard side mouse buttons (m3/m4) to always apply to in-game canvas.
// @author       Randomize
// @grant        none
// ==/UserScript==

/* Info:
To use the side mouse buttons in Hordes.io, use "m3" or "m4" as an in-game key binding. "m3" refers to the lower side button "back", and "m4" refers to the upper side button "forward".
This mod does not work on Firefox or any Gecko-based browsers. It works in Chrome. Other Chromium-based browsers have not been tested.
This mod only works with the standard 2 side buttons and does not support additional side buttons.
*/

document.addEventListener('mouseup', e => {
    if ([3, 4].includes(e.button)) {
        e.preventDefault();
    }
});
document.addEventListener('mousedown', e => {
    if ([3, 4].includes(e.button)) {
        let canvas = document.getElementsByClassName("l-canvas")[0];
        Object.defineProperty(e, 'target', {value: canvas});
    }
});
