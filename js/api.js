//------------------------------
// Класс для обращения к API
//------------------------------
class API {

    // функция вызова API методов
    // method - названия вызываемого метода
    // params - параметры для запроса
    // ok, er - callback функции при ответе на запрос
    static call(method, params = {}, ok = () => {}, er = () => {}) {

        // url на который будем делать запрос
        let url = CRYPTOCOMPARE_API_URI + method;

        $.ajax({
            url: url,
            timeout: 30000,
            type: 'get',
            data: params,
            success: (data, status, xhr) => {

                // если запрос успешный
                // вызываем callback ok
                ok(data.Data);
            },
            error: (xhr, status, error) => {

                er(error);
            }
        });
    }
}