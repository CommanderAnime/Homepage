export default class Page {
    static header = 'Placeholder';
    static name = 'Lorem Ipsum';
    static icon = 'alert-circle-outline';

    constructor() {
        this.parent = $('#content');
        this.page = $('<div class="page"></div>');

        this.pageHeader = Page.header
        this.pageName = Page.name;
        this.pageIcon = Page.icon;
        this.sections = {};

        this.page.append(this.header);
    }
    set pageHeader(header) {
        this.header ? this.header.text(header) : this.header = $(`<h1>${ header }</h1>`);
    }
    set pageName(name) {
        this.name = name;
    }
    set pageIcon(icon) {
        this.icon = icon;
    }
    show() {
        this.parent.empty();
        this.parent.append(this.page);
    }
    hide() {
        this.parent.empty();
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