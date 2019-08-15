export default {
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    getRandomColor: function() {
        return this.getRandomInt(1, 10);
    },
    getData: function() {
        const data = sessionStorage.getItem('items');
        if (data) {
            return JSON.parse(data);
        }

        return [];
    },
    addItem: function(item) {
        let items = this.getData('items');
        if (!items) {
            items = [];
        }
        items.push(item);

        this.setData(items);
    },
    setData: function(data) {
        sessionStorage.setItem('items', JSON.stringify(data));
    },
    getApiHost: function() {
        return `${window.location.protocol}//${window.location.hostname}`
    }
}