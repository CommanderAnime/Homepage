import Navigation from './modules/Navigation.js';

(() => {
    console.log('%cHello! Why are you reading this?', 'font-size: 20px;');

    $('body').prepend(new Navigation().body);
})();