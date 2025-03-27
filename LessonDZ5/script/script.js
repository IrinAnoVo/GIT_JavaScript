/*1. Легкая Задача
Напишите функцию introduce, которая выводит в консоль строку:
"Привет, меня зовут [имя]!"
Функция должна использовать this.firstname.
Затем создайте два объекта с полем firstname
Используя метод call, вызовите функцию introduce для каждого объекта, чтобы в консоли отобразились правильные приветствия.
*/
function introduce() {
    console.log(`Привет, меня зовут ${this.firstname}`);
} 
let obj1 = {
    firstname: 'Pavel'
}
let obj2 = {
    firstname: 'Viktor'
}

introduce.call(obj1)
introduce.call(obj2)
  
/*2.Легкая Задача 
Создайте функцию sumThreeNumbers, которая принимает три числа и возвращает их сумму. Затем создайте массив из трёх чисел, например [2, 4, 6]. Используйте метод apply, чтобы передать элементы массива в функцию как аргументы и вычислить сумму с помощью apply.
*/
function sumThreeNumbers(a, b, c) {
    sum = a + b + c
    console.log(sum);
    
}
let arr = [2, 4, 6]

sumThreeNumbers.apply(null, arr)

/*3.Сложная Задача
Реализуйте функцию calculateFinalPrice(extraDiscount, basePrice, tax, productTitle),
extraDiscount — дополнительная скидка в процентах;
basePrice — базовая цена продукта;
tax — налог на продукт;
productTitle — название продукта.
Функция вычисляет окончательную цену продукта по формуле:
finalPrice = (basePrice + tax) * (1 - (this.discountRate + extraDiscount) / 100);
discountRate — персональная скидка клиента в процентах;
fullname — полное имя клиента.
Функция должна выводить в консоль сообщение:
Окончательная цена продукта ${productTitle} для пользователя ${this.fullname}: ${finalPrice}.
*/
function calculateFinalPrice(extraDiscount, basePrice, tax, productTitle) {
    let finalPrice = (basePrice + tax) * (1 - (this.discountRate + extraDiscount) / 100)
    console.log(`Окончательная цена продукта ${productTitle} для пользователя ${this.fullname}: ${finalPrice}`);
}

let container = {
    fullname: 'Irina', 
    discountRate: 20, 
}

calculateFinalPrice.call(container, 5, 300, 10, 'Плюшевый мишка');

