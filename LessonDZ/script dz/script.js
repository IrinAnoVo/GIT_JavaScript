////// ДЗ
// 1 - в задаче повыше учесть еще и регистр букв.
// Anna !== annA (надо исправить чтобы регистр не вляил на результат)

let word = "Шалаш"
let loverCaseWorld = word.toLowerCase()
let reverseWord = ""
for (let i = loverCaseWorld.length -1; i >= 0; i--) {
    reverseWord += loverCaseWorld[i]
}
if (loverCaseWorld === reverseWord) {
    console.log("полиндром");    
}else {
    console.log("не полиндром");
}
//console.log(loverCaseWorld.split("").reverse().join("") === loverCaseWorld ? "полиндром" : "не полиндром")

// 
// Средняя задача
// Напишите программу, которая принимает строку из чисел, разделенных запятыми (например, "1,2,3,4,5") и выводит сумму всех чисел.
let str = "1, 2, 3, 4, 5"
let sum = str

    .split(",") // Разделяем строку по запятым
    .map(num => parseFloat(num.trim())) // Преобразуем строки в числа
    .reduce((acc, curr) => acc + curr, 0); // Суммируем числа

console.log(sum);

// Простая задача
// Дана массив их строк. Программа должна подсчитать количество слов, которые содержат больше 5 символов.
let strarr = ["мышь", "кот", "собака", "лошадь"]
let words = 0
for (let i = 0; i < strarr.length; i++) { 
    if (strarr[i].length > 5) {
        words++  
    }
}
console.log(words);

// Простая задача
// Создайте массив чисел от 1 до 20. Выведите все четные числа из этого массива., 4, 5, 6, 7, 8, 9, 10
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(nums[i]);        
    }   
}

// Сложная задача
// Дана строка из нескольких слов, разделенных пробелами. Напишите программу, которая переворачивает каждое слово в строке и выводит полученный результат.
let string = "мышь кот собака лошадь"
let words1 = string.split(" ")
let newstring = words1.map(word => word.split("").reverse().join(""))
let result = newstring.join(" ")
console.log(result);

// Средняя задача
// Сгенерируйте массив из 10 случайных чисел от 1 до 100. Найдите максимальное и минимальное число в массиве, а также их разницу.
let random1 = Math.round(Math.random()* 100) + 1;
let random2 = Math.round(Math.random()* 100) + 1;
let random3 = Math.round(Math.random()* 100) + 1;
let random4 = Math.round(Math.random()* 100) + 1;
let random5 = Math.round(Math.random()* 100) + 1;
let random6 = Math.round(Math.random()* 100) + 1;
let random7 = Math.round(Math.random()* 100) + 1;
let random8 = Math.round(Math.random()* 100) + 1;
let random9 = Math.round(Math.random()* 100) + 1;
let random10 = Math.round(Math.random()* 100) + 1;
let randoms = [random1, random2, random3, random4, random5, random6, random7, random8, random9, random10]
console.log(randoms);
let min = Math.min(...randoms)
let max = Math.max(...randoms)
let result1 = max - min
console.log(min);
console.log(max);
console.log(result1);
//let randoms = Array.from({ length: 10 }, () => Math.round(Math.random() * 100) + 1);


// Сложная задача
// Дан массив чисел, например [10, 15, 3, 7, 20, 8, 25]. Найдите два числа, сумма которых равна 25, и выведите их. Если таких чисел нет, выведите сообщение об этом.
let numarr = [10, 15, 3, 7, 20, 8, 25]
let sum1 = 25
for (let i = 0; i < numarr.length; i++) {
    for (let j = i + 1; j < numarr.length; j++) {
        if (numarr[i] + numarr[j] === sum1) {
            console.log(numarr[i], numarr[j]);
            break;
        }
    }
}

// Средняя задача
// Напишите программу, которая принимает строку из букв и цифр (например, "a1b2c3d4"), и создает два массива отдельно с числами и отдельно с буквами из этой строки: [1, 2, 3, 4] [a, b , c, d]
//isNan
let numstrings = "a1b2c3d4"
let nums1 = []
let strings1 = []
for (let i = 0; i < numstrings.length; i++) {
    if (!isNaN(numstrings[i])) {
        nums1.push(parseInt(numstrings[i]))
    } else {
        strings1.push(numstrings[i])
    }
}
console.log(nums1);
console.log(strings1);

// Сложная задача
// Дан массив строк, например ["abcd", "def", "ghiab", "jklaf", "asdgdfhfgh"]. Объедините их в одну строку, добавив между ними символ -, но только между строками, где колиечство букв совпадает.
let strings = ["abcd", "def", "ghiab", "jklaf", "asdgdfhfgh"]
let result2 = ""
for (let i = 0; i < strings.length - 1; i++) {
    let str1 = strings[i]
    let str2 = strings[i + 1]
    console.log(str1);
    console.log(str2);

    if (str2 && str1.length === str2.length) {
        result2 += str1 + "-"
    } else {
        result2 += str1
    }
}
console.log(result2);

/*commit for my*/