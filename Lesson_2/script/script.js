// console.log("Hi")
// проверить число на четность или нечетность и присвоить соотвествующую строку к переменной result
//let result = ""
//let num = 8
// if (num % 2 === 0) {
// result = "четное"
// } else {
// result = "нечетное"
// }
// console.log(result)

// num % 2 === 0 ? console.log("число четное") : console.log("число нечетное")

//result = num % 2 === 0 ? "четное" : "нечетное"
//console.log(result)

// циклы
// console.log(1 ** 2)
// console.log(2 ** 2)
// console.log(10 ** 2)

//for (let i = 0; i <= 10; ix++) {
//    console.log(i ** 2);   
//}

// выводить числа от 20 до 11 в таком же обратном порядке
//for (let i = 20; i >= 11; i--) {
// console.log(i); 
//}

// i++ инкремент
// i = i + 1
// i += 1
// i-- декремент
// i = i - 1
// i -= 1

//for (let i = 40; i <= 60; i += 2) {
//console.log(i);
//}

// циклом пройтись по числам от 0 до 10
// проверить каждое число на четность и нечетность и результат в виде строки("2-четное" "3-нечетное") зранить в переменной в таком ввиде 
// "...2-четное 3-нечетное 4-четное..."
// можно использовать тернарный оператор и интерполяцию
//let resultStr = ""
//for (let i = 0; i <= 10; i++) {
    //if (i % 2 ===0) {
        //resultStr = resultStr + i + "-четное"
        //resultStr += i + "-четное"
    //} else {
        //resultStr = resultStr + i + "-нечетное"
        //resultStr += i + "-нечетное"
    //}
    // resultStr += i % 2 === 0 ? '${i}-четное' : '${i}-нечетное'
//}
//console.log(resultStr);       
    
// a = индекс элемента с которого начинаем удаление
// b = количество эдементов которые удаляем
// c, d = новые эдементы которыми заменяем удаленные
// splice(a, b, c, d)
let arr = [2, 3, -6, 8, 7]
arr.splice(3, 2, 5, 5)
console.log(arr);

// есть массив чисел, найти все числа кратные 4, сохранить их в новом массиве и в конце выводить в консоли разницу между первым и последним элементов этого нового массива
let nums = [4, 10, 12, 9, 11, 10, 2, 3, 11, 2, 3, 5, 4, 3, 7, 2, 8, 6, 10, 5, 5, 9, 3, 4, 8, 4, 7, 10, 8, 4, 5, 9, 9, 8, 2, 5, 6]
let newNums = []
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 4 === 0) {
        newNums.push(nums[i]) 
    } 
}
let starttElem = newNums.shift()
let endElem = newNums.pop()
console.log(starttElem - endElem);
//console.log(newNums[0] - newNums[newNums.length - 1]);

let word = "шалаш"
let reverseWord = ""
for (let i = word.length -1; i >= 0; i--) {
    reverseWord += word[i]
}
if (word === reverseWord) {
    console.log("полиндром");    
}else {
    console.log("не полиндром");
}
//console.log(word.split("").reverse().join("") === word ? "полиндром" : "не полиндром")

    



