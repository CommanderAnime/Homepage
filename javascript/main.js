'use strict';
import Navigation from './modules/Navigation.js';
import Logger from './utils/Logger.js';

(() => {
    const navigation = new Navigation();
    $('body').prepend(navigation.body) && navigation.init();

    Logger.log('Site loaded')
})();
