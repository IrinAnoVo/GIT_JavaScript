// Создать класс с именем Transaction,который в конструкторе получает сумму транзакции(amount), описание транзакции(description), категорию(actegory), где поле amount является приватным. И создать геттер для получения amount
class Transaction {   //родительский прототип объекта
    #amount 
    constructor (amount, description, category) {
        if (typeof amount !== 'number') {
            throw new Error('Сумма должна быть числом')
        }
        this.#amount = amount   
        this.description = description
        this. category = category
    }
    get amount() {
        return this.#amount
    }
}
  //прототип объекта класса Transaction (super ссылается на constructor класса справа от extends)
class Income extends Transaction {
    static type = "Доход"
    constructor(amount, description) {
        super(amount, description, Income.type)
    }
}

// создать класс Expense который наследуется от Transaction, получает сумму расхода(положительное число при получении) и описание. А потом при вызове super передает в constructor Transaction отрицательное число. У класса есть свое приватное поле #amount (где хранится сумма расхода) и геттер для получения.
class Expense extends Transaction {
    #amount
    static type = "Расход"
    constructor(amount, description) {
        super(amount, description, Expense.type)
        this.#amount = -amount
    }
    get amount() {
        return this.#amount
    }
}

/// __proto__ это ссылка на prototype объекта от которого создан этот элемент
/// prototype это свойство которое есть у функции(кроме стрелочных) и у классов.

// Создать класс Account который при создании получает имя пользователья. Внутри класса Account есть статические свойсто accounts который является массивом, есть обычное свойство transactions который тоже является массивом и приватное свойство balance со значением по умолчанию 0. Каждый раз при создании экземпляра Account добавить нового пользователья в static массив accounts, выводить в консоли "Аккаунт создан для ${имя}"

// Создать метод addTransaction(trx) для класса Account который поулчает в себе параметры транзакцию, меняет баланс у Account, и выводит в консоли просто данные транзакции
class Account {
    #balance = 0
    static acounts = []
    transactions = []
    constructor(username) {
        this.username = username

        Account.acounts.push(this)
        console.log(`Аккаунт создан для ${username}`);
    }
    get balance() {
        return this.#balance
    }

    addTransaction(trs) {
        if (this.balance + TextTrack.amount < 0) {
            throw new Error("No credit-amount");           
        }
        this.#balance += trs.amount
        this.transactions.push(trs)
    }

    transfer(toUser, amount, description) {
        if (!(toUser instanceof Account)) {  //является ли toUser класса Account
            throw new Error("Error");           
        }
        this.addTransaction(new Expense(amount, description))
        toUser.addTransaction(new Income(amount, description))
    }

    get transactions() {
        return this.transactions
    }
    // newIncome(amount, description) {
  //   const trx = new Income(amount, description)
  //   this.#balance += trx.amount
  //   this.transactions.push(trx)
  // }
}
const paul = new Account('Paul')
paul.addTransaction(new Income(1500, 'Зарплата'))
// john.newIncome(1000, "Зарплата")
paul.addTransaction(new Income(300, 'Премия'))
paul.addTransaction(new Expense(100, 'Продукты'))

const jane = new Account('Jane')
paul.transfer(jane, 500, 'Вернул долги')

console.log(paul.balance);
console.log(paul.transactions);
console.log('jane balance:' + jane.balance);
console.log(jane.transactions);

// Создайте класс Library, который хранит статический массив книг. 
// Каждая книга – это объект с свойствами title и author. Добавьте 
// статический метод addBook(book), который добавляет книгу в библиотеку, 
// и статический метод listBooks(), который выводит список книг в консоль.
// class Library {
//   static books = []

//   static addBook(book) {

//   }

//   static listBooks() {

//   }
// }

// Library.addBook({
//   author: "sdfgsdfg",
//   title: "dsfgdfsgh"
// })

// Library.listBooks()

// class Animal {
//   move() {
//     // ...
//     console.log("Животное двигается")
//   }
// }

// class Bacteria extends Animal {

// }

// class Dog extends Animal {
//   move() {
//     super.move()
//     console.log("Животное ходит")
//   }
// }

// class Taxa extends Animal {
//   move() {
//     super.move()
//     console.log("Такса ходит")
//   }
// }

// class Fish extends Animal {
//   move() {
//     console.log("Животное плывет")
//   }
// }

// const bobik = new Taxa()
// const nemo = new Fish()
// const bacteria = new Bacteria()

// bobik.move()
// nemo.move()
// bacteria.move()

// nemo instanceof Fish => true
// nemo instanceof Dog  => false
// nemo instanceof Fish => true

console.log("===============================")

// контекст состоит из области видимости переменных и ключевого слова this
// this опредлеяется не во время написания функции, а во время выполнения этой функции
// nodejs      => global
// frontend_js => Window

// let person = {
//   firstname: "John",
//   greet: function () {
//     console.log("this", this)
//   },
// }
// person.greet()

// let greetFunc = person.greet
// greetFunc()

function uborka() {
  console.log(`Делаем уборку в комнате ${this.roomName}`)
}

let zal = {
  roomName: "Зал"
}

let kitchen = {
  roomName: "Кухнья"
}

zal.delatUborku = uborka
kitchen.delatUborku = uborka

zal.delatUborku()
kitchen.delatUborku()

// у стрелочных функций нет this, для них this определяется this_ом ближайшей нормальной функцией
// у стрелочных функций нет this, для них this определяется this_ом родительской ближайшей нормальной функцией

let person = {
    firstname: "John",
    hobbies: ['progarmming', 'running'],
    greetNormalFunc: function () {
    console.log(this.firstname)
},
    greetArrowFunc: () => {
    console.log(this.firstname)
},
    printHobbies: function () {
        this.hobbies.forEach((hobby) => {
            console.log(`${this.firstname} love ${hobby}`);
        })
    }
}
person.greetNormalFunc()
person.greetArrowFunc()

person.printHobbies()




