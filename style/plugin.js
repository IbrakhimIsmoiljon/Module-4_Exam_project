let $ = function (element) {
    return document.querySelector(element)
}
let $a = function (element) {
    return document.querySelectorAll(element)
}

//============= Create Element =============//

let createElement = function (tagname, className, text) {
    let newElement = document.createElement(tagname);
    if (className) {
        newElement.setAttribute("class", className);
    }

    if (text) {
        newElement.innerHTML = text;
    }

    return newElement;
} 