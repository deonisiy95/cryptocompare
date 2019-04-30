let app = new Vue({
    el: "#app",
    data: {
        coins: {}
    },
    methods: {

        // метод получения информации о криптовалютах
        getCoins: function() {

            // при успешном запросе
            let ok = (response) => {

                // записываем обновленные данные
                this.coins = response;
            };

            // при неудачном запросе
            let error = (error) => {

                // выведем ошибку в консоль
                console.log(error);
            };

            // вызываем API метод для получения информации о популярных криптовалютах
            API.call('/data/top/mktcapfull', {limit: 50, tsym: 'USD'}, ok, error);
        },

        // метод получения логотипа криптовалюты
        getCoinImage: function(path) {

            return `background-image: url('${CRYPTOCOMPARE_URI + path}')`;
        },

        // метод возвращает url к странице с подробной инормации о криптовалюте
        getCoinUrl: function(url) {

            return CRYPTOCOMPARE_URI + url;
        },

        // метод получения цвета для значения изменения криптовалюты
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

// запускаем обновление информации через определенный интервал
setInterval(() => {
    app.getCoins();
}, UPDATE_INTERVAL);