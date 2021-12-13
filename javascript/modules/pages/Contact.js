import Page from '../Page.js';

export default class Contact extends Page {
    static name = 'contact';
    
    constructor() {
        super();
        this.header = 'Contact Me!';
    }
}