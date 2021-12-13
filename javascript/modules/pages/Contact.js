import Page from '../Page.js';

export default class Contact extends Page {
    constructor() {
        super();
        this.pageHeader = 'Contact Me!';
        this.pageName = 'Contact';
        this.pageIcon = 'mail-outline';
    }
}