//event loop==============
console.log("зашли в кафе");
console.log("сделали кофе");
setTimeout(function() {
    console.log("ПОЛУЧИТЕ ЗАКАЗ - кофе готов");
    }, 3000);
console.log("сидим ждём, читаем книгу");
/*
Отличия setTimeout и setInterval
setTimeout выполняет функцию один раз через указанное время.
setInterval выполняет функцию регулярно через указанные интервалы времени.
setTimeout — это мощный инструмент для управления временем выполнения кода в JavaScript. Он позволяет создавать асинхронные задержки, что особенно полезно в веб-разработке для управления временем выполнения скриптов, анимаций и взаимодействий с пользователем.
*/
// 1 получить автора продукта
// 2 получить его почту
// 3 отправить сообщение на почту
/*function sendRequest(address, callback) {
    let responses = {
        productSellerID: 1256,
        sellerEmail: "john_doe@gmail.com",
        successMessage: "Сообщение успешно отправлено"
    }
    setTimeout(function () {
        console.log(`Send request to ${address}`)
        callback(responses)
        }, 2000)
    }
    console.log(1)
*/

    // callback hell=======лучше не использовать!!!
    /*let productId = 10
    sendRequest("/get/product/seller", function ({ productSellerID }) {
        let addressForGetEmail = `/get/seller/email/${productSellerID}`
    sendRequest(addressForGetEmail, function ({ sellerEmail }) {
            let messageToEmailAddress = `/send/email/${sellerEmail}`
            sendRequest(messageToEmailAddress, function ({ successMessage }) {
                console.log(successMessage)
            })
        })
    })
    console.log(2);
*/

//===========Promise===из класса объекта=========
// 3 статуса создания===
//pending    -момент создания Promise
//fulfilled    -статус когда все прошло успешно -> (вызывается resolved => первый параметр колбек функции)
//rejected    -статус когда все прошло неуспешно -> (вызывается rejected => второй параметр колбек функции)
// 3 метода===
//then  -запускается когда статус fulfilled (была вызвана resolved)
//catch  -запускается когда статус rejected (была вызвана rejected)
//finally  -запускается всегда в любом случае в самом конце
/*console.log(1);

new Promise(function (resolved, rejected) {
//синхронно
let a = 5
if (a % 2 === 0) {
    resolved(a)
    }else {
    resolved("число нечётное")
    }
//ассинхронно    
}).then(function (data) {
    console.log("then"data);   
}).catch(function (message) {
    console.log("catch"message);   
}).finally(function () {
    console.log("финал");   
})
console.log(2);
*/
/*
function sendRequest(address) {
    let ps = new Promise(function (resolved, rejected) {
        let responses = {
        productSellerID: 1256,
        sellerEmail: "john_doe@gmail.com",
        successMessage: "Сообщение успешно отправлено"
    }
    console.log(`Send request to ${address}`)
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolved(responses)
            } else {
            rejected(`Увы, не получилось отправить запрос по адресу: ${address}`)
            }
        }, 2000)
    })
    return ps
}
*/
/*
console.log(1);
let productId = 10
sendRequest(`/get/product/${productId}/seller/`)
    .then(function ({productSellerId}) {
        let addressForGetEmail = `/get/seller/emal/${productSellerID}`
        return sendRequest(addressForGetEmail)
    })
    .then(function ({sellerEmail}) {
        let messageToEmailAddress = `/send/email/${sellerEmail}`
        return 
    }) 
    .then(function ({ successMessage }) {
        console.log(successMessage);
    })
    .catch(function (errorMessage) {
        console.log("Catch", errorMessage)
    })
    console.log(2)
*/

console.log("отрисовка навбара");
fetch("https://dummyjson.com/products")      
    .then(function (response) {
        // response.json() возвращает Promise и парсит тело ответа запроса из JSON в js object
        // let data = response.json() // (JSON.parse(...))
        return response.json()
    })
    .then(function (data) {
        renderProducts(data.products)
    }) 
console.log("отрисовка футера");
 
function renderProducts(products) {
    for (let i = 0; i < products.length; i++) {
        console.log(products[i]);   
    }
}










