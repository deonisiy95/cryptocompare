//------------------------------
// Класс для обращения к API
//------------------------------
class API {

    // функция вызова API методов
    // method - названия вызываемого метода
    // ar_post - параметры для запроса
    // ok, er - callback функции при ответе на запрос
    static call(method, ar_post = {}, ok = () => {}, er = () => {}) {

        // url на который будем делать запрос
        let url = CRYPTOCOMPARE_API_URI + method;

        $.ajax({
            url: url,
            dataType: 'json',
            timeout: 30000,
            type: 'post',
            data: ar_post,
            success: (data, status, xhr) => {

                // если запрос успешный
                if (data.Response === 'Success') {

                    // вызываем callback
                    ok(data);
                    return;
                }

                console.log('Error: Status response: ' + data.Response);
            },
            error: (xhr, status, error) => {

                er(error);
            }
        });
    }
}