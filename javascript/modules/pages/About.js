import Page from '../Page.js';

export default class About extends Page {
    constructor() {
        super();
        this.pageHeader = 'About Me!';
        this.pageName = 'About';
        this.pageIcon = 'person-outline';

        this.newSection('<div>Hello there. Test!</div>', 'test', true);
    }
}