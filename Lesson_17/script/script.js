/*function Person(name, age) {
    return {
        name: name,
        age: age
    }
}
*/
// // return 5 // не влияет на результат
// // return {
// // test: "test object"
// // }
/*function Person(name, age) {
    //let this = {}
    this.name = name
    this.age = age 
    //return this   
}
const user1 = new Person('John', 25)
console.log(user1);
*/
class Person {
constructor(username, age = 18) {   //18 - по умолчанию
    this.name = username
    this.age = age
    }
//setName(username) {       //для изменения имени в дальнейшем 
    // this.name = username
    //}
incrementAge() {   //увеличение возраста на 1
    this.age++
    }
}

let user1 = new Person('John')     //если не указать возрат, стаботает по умолчанию (если есть)
console.log(user1);
//user1.setName = 'Jack'        //вызов изменения имени из конструктора (если есть в конструкторе)
let user2 = new Person('Anna', 26)
user2.incrementAge()    //вызов увеличения возраста из конструктора (если есть)
console.log(user2);

// Создать класс для создания продукта, у которого есть имя, описание, цена, количество. Создать методы для изменения цены и метод sale() который уменьшает на 1 колисечство продукта 
class Product {
    constructor(title, description, price, count) {
        this.title = title
        this.description = description
        this.price = price
        this.count = count
    }
    
    sale() {
        if (this.count !== 0) {
            this.count--
            return
        }
        throw new Error("Продукта больше нет")  // перехват ошибки
    }
    
    setPrice(price) {
        if (price >= 0) {
            this.price = price
            return
        }
        throw new Error("Отрицательная цена не принимается")  
    }
}
let notebook = new Product("Notebook", "asgasg", 1000, 15)  // перехват ошибки
console.log(notebook)
notebook.sale()
console.log(notebook)
notebook.setPrice(100)
console.log(notebook)

class Person1 {
    static roles = ['student', 'lecturer', 'employer']
    static createdPersons = [] ///

    #card = ' ' //this.card = card //так можно задать приватные данные по умолчанию

    constructor(firstname, lastname, role, age, balance, cardData) { 
        this.firstname = firstname
        this.lastname = lastname
        this.role = role
        this.age = age
        this.balance = balance ///
        this.#card = cardData //++
        
        Person1.createdPersons.push(this) ///
    }

    get card() {    //// для чтения
        //++ '008 456 1243' = '008', '464', '1243']
        return this.#card.split(' ')[0]
    }

    set card(value) {   //// для доступа на изменения
        this.#card = value
    }

    static getTotalBalance() {
        return Person1.createdPersons.reduce((acc, user) =>
            acc + user.balance, 0)  ///
    }

    setRole(role) {
        console.log(role);
        if (Person1.roles.includes(role)) {   //находит нужную role
            this.role = role
            return
        }
        throw new Error("Не допустимая роль")  // перехват ошибки   
    }

    incrementAge() {   //увеличение возраста на 1
        this.age++
    }
}
let person1 = new Person1('John', 'doe', 'student', 25, 100, '008 524 3698') //++

person1.incrementAge()
person1.setRole('student')
console.log(Person1.roles);
//// person1.card = 'new card'   //// вызов set.card = 'new card'
console.log(person1);
console.log(person1.card);

let person2 = new Person1('Anna', 'doe', 'student', 27, 120, '008 258 2547')  /// //++
console.log(person2.card); //++

let person3 = new Person1('Anna', 'doe', 'student', 27, 120)  ///
let person4 = new Person1('Anna', 'doe', 'student', 27, 120)  ///

let totalBalance = Person1.getTotalBalance() ///
console.log(totalBalance);  ///

