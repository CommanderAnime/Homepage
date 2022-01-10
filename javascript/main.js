'use strict';
import Navigation from './modules/Navigation.js';

(() => {
    const navigation = new Navigation();
    $('body').prepend(navigation.body) && navigation.init();
})();