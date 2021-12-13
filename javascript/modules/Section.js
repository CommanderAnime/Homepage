export default class Section {
    constructor(html, key, shouldShow) {
        this.wrapper = $(`<div class="section"></div>`);
        
        this.key = key;
        this.createdDate = new Date().getTime();
        this.destroyedDate = -1;

        if (typeof html === 'object') this.wrapper.append(html)
            else this.wrapper.html(html);

        if (!shouldShow) this.hide();
    }
    show() {
        this.wrapper.show();
    }
    hide() {
        this.wrapper.hide();
    }
    destroy() {
        this.destroyedDate = new Date().getTime();
        this.wrapper.remove();
    }
}