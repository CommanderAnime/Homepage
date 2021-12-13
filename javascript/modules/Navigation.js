import Pages from './Pages.js';

export default class Navigation {
    static get currentPage() {
        const url = new URL(window.location.href);
        return url.searchParams.get('page') || 'home';  
    }

    constructor() {
        this.body = $('<div id="navigation"></div>');
        this.list = $('<ul></ul>');
        this.dropshadow = $('<div class="dropshadow"></div>');
        this.indicator = $('<div class="indicator"></div>');
        this.listItems = [];

        const pages = new Pages();
        $.each(pages, (key, page) => {
            const lowerName = page.name.toLowerCase(),
            isCurrentPage = Navigation.currentPage === lowerName,
            listItem = $(`
                <li class="list">
                    <div>
                        <span class="icon"><ion-icon name="${ page.icon }"></ion-icon></span>
                        <span class="text">${ page.name }</span>
                    </div>
                </li>
            `);

            listItem.on('mouseup', (event) => {
                this.page = lowerName;

                this.listItems.forEach(item => {
                    item.removeClass('active');
                });
                event.delegateTarget.classList.add('active');

                pages.show(lowerName);
            });
            if (isCurrentPage) listItem.mouseup();

            this.listItems.push(listItem.appendTo(this.list));
        });
        this.list.append([this.dropshadow, this.indicator]);
        this.body.append(this.list);
    }
    set page(value) {
        if (history.pushState) {
            const searchParams = new URLSearchParams(window.location.search);
            searchParams.set('page', value);
            const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + searchParams.toString();
            window.history.pushState({path: newurl}, '', newurl);
        }
        /* TODO: Set/replace page contents */
    }
}