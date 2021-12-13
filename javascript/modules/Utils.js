const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
},

getRandomFloat = (min, max) => {
    return Math.random() * (max - min) + min;
},

getRandomHexColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
},

hexToRGB = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
},

formatDateToLocale = (date) => {
    return new Date(date).toLocaleTimeString();
},

timeDiffToString = (now, then) => {
    if (now > then) {
        return 'No time';
    } else {
        const diff = then - now;
        if (diff > 2 * 604800000) {
            return Math.floor(diff / 604800000) + ' weeks';
        }
        if (diff > 2 * 86400000) {
            return Math.floor(diff / 86400000) + ' days';
        }
        if (diff > 2 * 3600000) {
            return Math.floor(diff / 3600000) +  'hours';
        }
        if (diff > 2 * 60000) {
            return Math.floor(diff / 60000) +  'minutes';
        }
        const seconds = Math.floor(diff / 1000);
        return seconds +  'second' + (seconds !== 1 ? 's' : '');
    }
}

export { getRandomInt, getRandomFloat, getRandomHexColor, hexToRGB, formatDateToLocale, timeDiffToString };
