// ДЗ
// Легкие задачи:
// 1. Дан массив чисел [12, 5, 8, 130, 44]. Создайте новый массив, содержащий только числа 
// больше 10.
let arr = [12, 5, 8, 130, 44]
let newarr = arr.filter (function (value, index) {
    if (value > 10) {
        return value;
    }
}) 
console.log(newarr);

// 2. Напишите программу, которая принимает массив строк и возвращает массив длин этих строк
//  по возрастанию.
// ["one", "three", "two"] -> [3, 5, 3] -> [3, 3, 5]

let string = ["one", "three", "two"]
let length = string.map(function (value, index) {
    return value.length;
})
console.log(length);
let newlength = length.sort(function (a, b) {
    return a - b;
})
console.log(newlength);

// 3. Есть массив строк. Отсортируйте строки по их длине (от самой короткой к самой длинной) 
// и выведите результат.
// ['hello', 'world', 'javascript', 'code'] => ['code', 'hello', 'world', 'javascript']
let strings = ['hello', 'world', 'javascript', 'code']
let newStrings = strings.sort(function (a, b) {
    return a.length - b.length;
})
console.log(newStrings);

// Средной сложности задачи:
// 4. Подсчитайте количество гласных букв в строке. Выведите результат.
// // let vowels = [a, e, i, o, u]
// "hello" -> 2
// "javascript" -> 3
// "world" -> 1
let vowels = ['a', 'e', 'i', 'o', 'u']
function countVowels(str) {
const vowels = ['a', 'e', 'i', 'o', 'u'];
let count = 0;
// Преобразуем строку в нижний регистр и проверяем каждую букву
for (let char of str.toLowerCase()) {
if (vowels.includes(char)) {
    count++;
      }
    }   
    return count;
}
console.log(countVowels("hello"));      
console.log(countVowels("javascript"));  
console.log(countVowels("world"));       

// 5. Дана строка. Отсортировать её символы в алфавитном порядке.
// "javascript"-> "aacijprstv"
// "hello" -> "ehllo"
function sortString(str) {
    // Преобразуем строку в массив, сортируем и снова объединяем в строку
    return str.split('').sort().join('');
}
console.log(sortString("javascript")); 
console.log(sortString("hello"));      
  //split('') — превращает строку в массив символов.
  //sort() — сортирует массив символов в алфавитном порядке.
  //join('') — соединяет отсортированные символы обратно в строку.
    
// Сложные задачи:
// 6. Есть произвольная строка, определите, сколько раз каждый символ встречается в этой 
// строке. Выведите результат в формате: "Символ X => Y".
// // "hello"
// Символ h => 1
// Символ e => 1
// Символ l => 2
// Символ o => 1
let word = "hello";
function repeatChar(word) {
    let charCount = {};  // Объект для хранения количества каждого символа.    
    // Проходим по каждому символу строки.
    for (let i = 0; i < word.length; i++) {
        let char = word[i];  // Берем символ из строки
        // Если символ уже встречался, увеличиваем счетчик, иначе инициализируем его.
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    // Формируем строку результата и выводим.
    for (let char in charCount) {
        console.log(`Символ ${char} => ${charCount[char]}`);
    }
}
repeatChar(word);

// 7. Дан массив чисел [3, 1, 4, 1, 5, 9]. Найдите сумму квадратов всех четных чисел.
/*let arr1 = [3, 1, 4, 1, 5, 9]
let sumOfEven = arr1.filter(function(value) {
    if (value % 2 === 0) {
        return true
    }})
    .map(function(even) {
        return even ** 2
    })
    .reduce(function(acc, evenPower) {
        return acc + evenPower
    }, 0)
    console.log(sumOfEven);
*/

let arr2 = [3, 1, 4, 1, 5, 9]
let sumOfEven2 = arr2.filter(function(value) {
    return value % 2 === 0
    })
    .map(function(even) {
        return even ** 2
    })
    .reduce(function(acc, evenPower) {
        return acc + evenPower
    }, 0)
    console.log(sumOfEven2);  

// 8. Дан массив чисел. Проверить, упорядочены ли элементы по возрастанию.
// [1, 5, 9, 12, 36] => true
// [1, 5, 12, 9, 36, -5] => false
let nums1 = [1, 5, 9, 12, 36];
let nums2 = [1, 5, 12, 9, 36, -5];
function toTop(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {           
            return false; // Если текущий элемент больше следующего, то массив не упорядочен            
        }
    }
    return true; // Если все элементы правильно упорядочены
}
console.log(`[1, 5, 9, 12, 36] => ${toTop(nums1)}`);
console.log(`[1, 5, 12, 9, 36, -5] => ${toTop(nums2)}`);
    
// 9. Дан массив слов. Создайте объект, где ключами будут первые буквы слов, а значениями — 
// массивы слов, начинающихся на эти буквы. Например։
// ['apple', 'banana', 'apricot', 'blueberry', 'cherry'] -> 
// {
//    a: ['apple', 'apricot'], 
//    b: ['banana', 'blueberry'], 
//    c: ['cherry']
// }
let fruits = ['apple', 'banana', 'apricot', 'blueberry', 'cherry']
let object = {}
fruits.forEach( function(fruit) {
    // Получаем первую букву текущего слова, в нижнем регистрe.
    let firstLetter = fruit[0].toLowerCase()
     // Если такой буквы еще нет в объекте, создаем новый массив
    if (!object[firstLetter]) {
        object[firstLetter] = []
    }
    // Добавляем слово в соответствующий массив
    object[firstLetter].push(fruit)
})
console.log(object);


