import handler from './js/handler.js';
import createdComponentClass from './js/createdComponentClass.js';
import codeObject from './js/codeObject.js';

let containerElement = document.querySelector('#app');
let element = new createdComponentClass(codeObject[`app`]);
containerElement.append(element.elem);

handler()