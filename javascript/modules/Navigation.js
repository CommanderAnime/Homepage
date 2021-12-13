import Pages from './Pages.js';
const pages = new Pages();

export default class Navigation {
    static get currentPage() {
        const url = new URL(window.location.href);
        return url.searchParams.get('page') || 'home';  
    }

    constructor() {
        this.body = $('<div id="navigation"></div>');
        this.list = $('<ul></ul>');
        this.indicator = $('<div class="indicator"></div>');
        this.listItems = [];

        const self = this;
        $([
            {
                name: 'Home',
                icon: 'home-outline'
            }, {
                name: 'About',
                icon: 'person-outline'
            }, {
                name: 'Contact',
                icon: 'chatbubble-outline'
            }
        ]).each(function() {
            const lowerName = this.name.toLowerCase(),
            isCurrentPage = Navigation.currentPage === lowerName,
            listItem = $(`
                <li class="list">
                    <div>
                        <span class="icon"><ion-icon name="${ this.icon }"></ion-icon></span>
                        <span class="text">${ this.name }</span>
                    </div>
                </li>
            `);
            self.listItems.push(listItem);

            listItem.on('mouseup', function() {
                self.page = lowerName;

                self.listItems.forEach(item => {
                    item.removeClass('active');
                });
                this.classList.add('active');

                pages.show(lowerName);
            });

            if (isCurrentPage) listItem.mouseup();

            self.list.append(listItem);
        });

        this.list.append(this.indicator);
        this.body.append(this.list);
    }
    set page(value) {
        if (history.pushState) {
            let searchParams = new URLSearchParams(window.location.search);
            searchParams.set('page', value);
            let newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + searchParams.toString();
            window.history.pushState({path: newurl}, '', newurl);
        }
        /* Set/replace page contents */
    }
}