import reductor from "./reductor.js";

export default function handler() {
    let dataActionElem = document.querySelectorAll('[data-action]');
    dataActionElem.forEach((e) => {
        e.addEventListener(`${e.dataset.action}`, (ev) => {           
            reductor(ev.target.dataset.props);
        })
    });    
}