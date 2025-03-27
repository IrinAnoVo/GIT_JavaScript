let numArr = [2, 1, -5] 

// let sum = 0
// for (let i = 0; i < numArr.length; i++) {
//   sum += numArr[i]
// }

let sum = numArr.reduce(function (acc, value) {
// acc = если указан второй параметр в reduce то принимает это значение, если нет то первый 
// элемент из массива
// value = каждый элемент массива
// когда делаем return то значение справа попадает в аргумент acc для следующего шага 
  return acc + value
}, 0) // 0 - начальное значение для acc

console.log(sum) // выводит сумму всех чисел в массиве

let sumOfOdds = numArr.filter(function (num) {
    if (num % 2 !== 0) {
        return true // return num %2 !== 0
    }
}).map (function (odd) {
    return odd ** 2
}).reduce (function (acc, oddPower) {
    return acc + oddPower
})
console.log(sumOfOdds);

let products = [
    {
    id: 1,
    title: "Велосипед",
    price: 2100,
    marks: [1, 5, 4],
    },
    {
    id: 2,
    title: "Самокат",
    price: 2500,
    marks: [1, 4, 3, 2, 5, 4, 3],
    },
    {
    id: 3,
    title: "Сноуборд",
    price: 1500,
    marks: [1, 5, 5, 1, 2],
    },
    {
    id: 4,
    title: "Скейт",
    price: 3000,
    marks: [1, 1, 4, 1, 4, 3],
    }
]
// найти общую сумму цен всех продуктов у которых цена больше 1501
let summodd = products.reduce(function (result, product) {
    if (product.price > 1500) {
        result += product.price
    }
    return result
},0)          //let result = products.reduce(sumood, 0)
console.log(summodd);

// [14, 65, 25, 70, -5, -12, 30, -53, 24]
// 14 65 => acc = 65
// 65 25 => acc = 65
// 65 70 => acc = 70

let maxNum = numArr.reduce(function (acc, num) { // 14, 65
    // if (acc > num) {
    // return acc
    // }
    // return num
    
    // return Math.max(acc, num)
    return acc > num ? acc : num
})
console.log(maxNum);    

let expProduct = products.reduce(function (acc, product) {
    //if (acc.product > product.price) {
     //   return acc
    //}
    //return product
    return acc.price > product.price ? acc : product
})
console.log(expProduct); // { id: 4, title: "Скейт", price: 3000, marks: [1, 1, 4, 1, 4, 3] }


let highPrice = products.reduce(function (acc, product) {
    return Math.max (acc, product.price)
}, products[0].price)
console.log(highPrice); // 3000

// Math.random
// Math.floor
// Math.ceil
// Math.round
// Math.max
// Math.min
// Math.abs
// Math.sqrt
// Math.pow
// 4 ** 0.5 // 2

// Создать новый продуктов где в объект каждого продукта добавляется поле maxMark со значением 
// максимальной оценки их массива marks, используя методы массивов
let newProducts = products.map(function (value) {
    value.maxMark = value.marks.reduce(function (acc, mark) {
        return Math.max(acc, mark)
    })
    return value   
})
console.log(newProducts);

// let numbers = [1, 2, 3]
// let numbersCopy = [numbers] // [[1, 2, 3]]
// let numbersCopy = [...numbers] // [1, 2, 3]

// let obj = {a: 1, b: 2, c: 3}
// let objCopy = {...obj} // {a: 1, b: 2, c: 3} // копия

/*let productsWithMaxMark = products.map(product => {
    let maxMark = Math.max(...product.marks);
    return { ...product, maxMark };
});

console.log(productsWithMaxMark);*/

let newProducts1 = products.map(function (product) {
    product.maxMark = Math.max(...product.marks)
    return product
})
console.log(newProducts1);

// Создание нового массива на основе исходного (map)
// Когда надо делать одно и то же действие со всеми элементами массива (forEach)
// Если надо отфильтровать массив по каким то критериям (filter)
// Если задача связана с агрегацией (reduce)

// map
// sort
// forEach
// reduce
// filter
// find
// indexOf
// lastIndexOf
// includes
// splice