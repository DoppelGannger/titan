import createElement from "./createElement.js";

export default class createdComponentClass {
    #elem = '';

    constructor(code) {        
        this.code = code;
        this.#elem = this.render();
    };

    #html() {
        return this.code          
    };
    render() {
        let appCode = createElement(this.#html());        
        return appCode;
    };
    get elem() {
        return this.#elem;
    };
}