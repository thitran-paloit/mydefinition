import getConfig from 'next/config'
// Only holds publicRuntimeConfig from next.config.js nothing else.
const { publicRuntimeConfig } = getConfig()

module.exports = {
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomColor: function() {
        return this.getRandomInt(1, 10);
    },
    getApiHost: function() {
        // return 'https://mydefinition-api.herokuapp.com';
        if (publicRuntimeConfig.API_HOST_URL) {
            return publicRuntimeConfig.API_HOST_URL;
        }
        return `${window.location.protocol}//${window.location.hostname}:8000`
    }
}