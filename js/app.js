let app = new Vue({
    el: "#app",
    data: {
        coins: {}
    },
    methods: {

        getCoins: function() {

            let ok = (r) => {

               this.coins = r;
            };

            let error = (error) => {

                console.log(error);
            };

            API.call('/data/top/mktcapfull', {limit: 50, tsym: 'USD'}, ok, error);
        },

        getCoinImage: function(path) {

            return CRYPTOCOMPARE_URI + path;
        },
    },

    created: function () {
        this.getCoins();
    }
});