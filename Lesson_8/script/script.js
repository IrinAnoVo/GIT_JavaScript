/*находит все элементы по условию*/
let numArr = [5, 1, 6, 8, 10, 25, -5, 32, 12, -3]
let filtereArr = numArr.filter(function (value, index) {
    if (value < 0) {
        return value
    }
})
console.log(filtereArr);


/*находит только первый элемент по условию*/
let result = numArr.find(function (value, index) {
    if (value < 0) {  
        return value
    }
})
console.log(result);

////////////////////////////////
let person = {
    firstname:"John",
    lastname: "Doe",
    age: 18,
    hobbies: ["soccer", "gaming"],
    location: {
    city: "Berlin"
},
    carModel: "BMW"
}
console.log(person.firstname);
console.log(person.carModel);
person.salary = "1000$"
person.age = 24
person.hobbies[0] = "Handball"
console.log(person);


////////////////////////////////
let persons = [
    {
        firstname:"John",
        lastname: "Doe",
        age: 18,
        salary: 1000
      
    },
    {
        firstname:"Jane",
        lastname: "Doe",
        age: 24,
        salary: 700
    },
    {
        firstname:"Anna",
        lastname: "Doe",
        age: 32,
        salary: 1500
    },
    {
        firstname:"Maka",
        lastname: "Doe",
        age: 27,
        salary: 2700
    }
]


// создать новый массив пользователей, где у каждого пользователья появляется 
// новое поле fullname и увеличивается зарплата на 50%
let updatedPersons = persons.map(function (person, index) {
    //клонируем массив с объектами, чтобы исходный массив не терять исходные данные
    let newPerson = structuredClone(person)
    newPerson.fullname = `${newPerson.firstname} ${newPerson.lastname}`
    newPerson.salary += newPerson.salary / 2
    return newPerson
})
console.log(updatedPersons);

// создать новый массив где будут только пользователи из массива updatedPersons у 
// которых возраст больше 25 и зарплата больше 1000
let filteredPersons = updatedPersons.filter(function (person, index) {
   if (person.age > 25 && person.salary > 1000)
    return person
})
console.log(filteredPersons);

////   SORT  ////////////////
let unsortedArr = [1, 333, 2, 44, 5] // [1, 2, 5, 44, 333]
//unsortedArr.sort() // [1, 333, 2, 44, 5] = strArr["1", "333", "2", "44", "5"]
//console.log(unsortedArr);

//unsortedArr.sort(изменяет массив) == unsortedArr.toSorted(возвращает новый массив)
unsortedArr.sort(function (nextNumber, currentNumber) {
    console.log(`Number = ${currentNumber} | Currentnumber = ${nextNumber}`)
    // if (nextNumber < currentNumber) {
    // return -1
    // } else if (nextNumber == currentNumber) {
    // return 0
    // } else {
    // return 1
    // }
    return nextNumber - currentNumber // по возрастанию
    // return currentNumber - nextNumber // по убыванию
}) 
console.log(unsortedArr);
// [1, 333, 2, 44, 5]
// 1, 333 = 333 - 1 = 332 
// [1, 333, 2, 44, 5]
// 333, 2 = 2 - 333 = -331
// [1, 2, 333, 44, 5]
// 333, 44 = 44 - 333 = result < 0
// [1, 2, 44, 333, 5]
// 333, 5 = 5 - 333 = result < 0
// [1, 2, 44, 5, 333]

let newUsers = updatedPersons.toSorted(function (n, c) {
    return n.salary - c.salary
})
console.log(newUsers);

updatedPersons.sort(function (n, c) {
    return n.salary - c.salary
})
console.log(updatedPersons);

// сортировать пользователей по возрастанию зарплаты
// n = next
// c = current
// updatedPersons.sort(function (n, c) {
// return n.salary - c.salary
// })
// let newUsers = updatedPersons.toSorted(function (n, c) {
// return n.salary - c.salary
// })
let newUsers1 = updatedPersons.toSorted(function (n, c) {
    return n.firstname.localeCompare(c.firstname)
    })
    // a.localeCompare(b)
    // если a === b => 0
    // если a > b => 1
    // если a < b => -1
    console.log(updatedPersons)
    console.log(newUsers)

    ////////////////////////////////
    let arrOfNums = [1, 333, 2, 44, 5]
    let sum = arrOfNums.reduce(function (sum, value) {
        return sum + value
    }) 
    console.log(sum);
    

    