import Page from '../Page.js';

export default class Home extends Page {
    constructor() {
        super();
        this.pageHeader = 'Homepage';
        this.pageName = 'Home';
        this.pageIcon = 'home-outline';
    }
}