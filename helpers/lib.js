module.exports = {
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomColor: function() {
        return this.getRandomInt(1, 10);
    },
    getApiHost: function() {
        if (process.env.API_HOST_URL) {
            return process.env.API_HOST_URL;
        }
        return `${window.location.protocol}//${window.location.hostname}:8000`
    }
}