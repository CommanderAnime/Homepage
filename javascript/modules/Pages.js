import Logger from '../utils/Logger.js';

import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';

export default class Pages {
    constructor() {
        this.home = new Home();
        this.about = new About();
        this.contact = new Contact();

        Logger.log('Page Modules Loaded')
    }
    show(page) {
        this[page].show();
    }
    hide(page) {
        this[page].hide();
    }
}
