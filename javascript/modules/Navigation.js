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
        this.trigger = null;

        const pages = new Pages();
        let trigger;
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
            this.listItems.push(listItem.appendTo(this.list));

            listItem.on('mouseup', (event, a) => {
                this.page = lowerName;
                this.listItems.forEach(item => {
                    item.removeClass('active');
                });
                event.delegateTarget.classList.add('active');

                this.dropshadow
                    .add(this.indicator)
                    .css('transform', `translateX(${ event.delegateTarget.offsetLeft - this.listItems[0].offset().left - 70 }px)`);
                
                pages.show(lowerName);
            });
            if (isCurrentPage) this.trigger = listItem;
        });
        
        this.body.append([this.dropshadow, this.indicator, this.list]);
    }
    init() {
        this.trigger.trigger('mouseup');
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