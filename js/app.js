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

            return `background-image: url('${CRYPTOCOMPARE_URI + path}')`;
        },

        getCoinUrl: function(url) {

            return CRYPTOCOMPARE_URI + url;
        },

        getColor: function(change_percent) {

            if (change_percent > 0) {

                return 'color: green;';
            }

            return 'color: red;';
        }
    },

    created: function () {
        this.getCoins();
    }
});