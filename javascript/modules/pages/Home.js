import Page from '../Page.js';

export default class Home extends Page {
    static name = 'home';
    
    constructor() {
        super();
        this.header = 'Homepage';
    }
}