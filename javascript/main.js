import Navigation from './modules/Navigation.js';

(() => {
    console.log('%cHello! Why are you reading this?', 'font-size: 20px;');

    const navigation = new Navigation();
    $('body').prepend(navigation.body) && navigation.init();
})();