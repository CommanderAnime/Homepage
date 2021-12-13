import Page from '../Page.js';

export default class About extends Page {
    static name = 'about';

    constructor() {
        super();
        this.header = 'About Me!';
    }
}