export default function createElement(html) {

    let section;


    section = document.createElement('section');
    section.innerHTML = html;
    section.classList.add('appContainer')
    return section

};