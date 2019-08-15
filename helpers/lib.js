module.exports = {
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomColor: function() {
        return this.getRandomInt(1, 10);
    },
    getApiHost: function() {
        return `${window.location.protocol}//${window.location.hostname}`
    }
}