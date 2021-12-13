export default class Page {
    constructor() {
        this.parent = $('#content');

        this.page = $('<div class="page"></div>');
        this.h1 = $(`<h1>Placeholder</h1>`);
        this.sections = {};

        this.page.append(this.h1);
    }
    show() {
        this.parent.empty();
        this.parent.append(this.page);
    }
    hide() {
        this.parent.empty();
    }
    set header(title) {
        this.h1.text(title);
    }
    newSection(html, name) {
        const wrapper = $('<div class="section"></div>');

        wrapper.append(html);

        this.sections[name] = wrapper;
        this.page.append(wrapper);
    }
    removeSection(name) {
        this.sections[name].remove();
        delete this.sections[name];
    }
}