import Section from './Section.js';

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
    newSection(html, key, shouldShow) {
        const section = new Section(html, key, shouldShow);

        this.sections[key] = section;
        this.page.append(section.wrapper);
    }
    removeSection(key) {
        this.sections[key].destroy();
        delete this.sections[key];
    }
    removeSectionAtIndex(index) {
        const key = Object.keys(this.sections)[index];
        this.sections[key].destroy();
        delete this.sections[key];
    }
}