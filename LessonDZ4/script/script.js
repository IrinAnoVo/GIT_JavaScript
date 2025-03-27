//1. Создайте класс Car с свойствами mark (марка), model (модель) и year (год выпуска). Добавьте метод age(), который вычисляет возраст автомобиля (на основе текущего года).
class Car {
    constructor(mark, model, year) {
        this.mark = mark
        this. model = model
        this.year = year
    }
    age() {
        let currentYear = new Date().getFullYear()
        return currentYear - this.year    
    }
}
let car = new Car('Hyunday', 'Getz', 2000)
console.log(`возраст автомобиля: ${car.mark}, ${car.model}, ${car.year}`);

//2. Модифицируйте класс Person, добавив новое свойство email и метод change_email(newEmail), который меняет email только если новый email содержит символ "@" и ".", иначе выбрасывает исключение. 
class Person {
    constructor(username, age = 18, email) {   //18 - по умолчанию
        this.username = username
        this.age = age
        this.email = email
    }
    change_email(newEmail) {           
        if (newEmail.includes('@') && newEmail.includes('.')) {
            this.email = newEmail;
        } else {
            throw new Error('not @ orr .')
        }
    }
}
let person = new Person('ghg@vvv.cl')
try {
    person.change_email('ghgjjhh.hh')
    console.log(`newEmail: ${person.email}`);   
}catch (error) {
    console.error(error.message);
}

//3. Создайте класс Library, который хранит статический массив книг. Каждая книга – это объект с свойствами title и author. Добавьте статический метод addBook(book), который добавляет книгу в библиотеку, и статический метод listBooks(), который выводит список книг в консоль.
class Library {
    static books = []
    static addBook(title, author) {
        this.books.push({title, author})
    }
    static listBooks() {
        if(this.books.length === 0) {
            console.log('нет книг');            
        }else {
            console.log('список книг :');           
                this.books.forEach((book, i) => {
                console.log(`${i + 1}. ${book.title}, ${book.author}`); 
            })          
        }
    }
} 
Library.addBook('Если наступит завтра', 'С.Шелдон')
Library.addBook('Граф Монте Кристо', 'А.Дюма')
Library.listBooks()
//4. Создайте класс Rectangle с приватными свойствами #width и #height. Реализуйте геттеры и сеттеры для этих свойств, чтобы ширина и высота могли устанавливаться только положительными числами. Добавьте метод area(), который возвращает площадь прямоугольника.
class Rectangle {
    #width
    #height
    constructor(width, height) {
        this.#width = width
        this.#height = height
    }
    get width() {
        return this.#width
    }
    set width(value) {
        if (value > 0) {
            this.#width = value
        }else {
            throw new Error("number < 0")           
        }
    }
    get height() {
        return this.#height
    }
    set height(value) {
        if (typeof value === 'number' && value > 0) {
            this.#width = value
        }else {
            throw new Error("number < 0")           
        }
    }
    area() {
        return this.#width * this.#height
    }
}
let rectangle = new Rectangle(5, 3)
console.log(rectangle.width);
console.log(rectangle.height);
let rectangle1 = new Rectangle(4, 6)
console.log(rectangle1.area());

//5. Создайте класс BankAccount с приватным свойством #balance. Реализуйте методы для депозита и снятия средств. Добавьте геттер для получения текущего баланса. При попытке снять сумму, большую чем баланс, выбрасывайте исключение. Затем создайте статический метод, который ведёт учёт всех созданных счетов (например, массив accounts) и статический метод для расчёта общего баланса всех счетов.
class BankAccount {
    #balance
    static account = []
    constructor(username, balance) {
        this.#balance = balance
        this.username = username
        BankAccount.account.push(this)
    }
    get balance() {
        return this.#balance
    }
    addDeposit(amount) {
        if (typeof amount === 'number' && amount > 0) {
            this.#balance += amount
        }else {
            throw new Error("number < 0")
        }
    }
    evenDeposit(amount) {
        if (typeof amount === 'number' && amount > 0 && amount <= this.#balance) {
            this.#balance -= amount
        } else {
            throw new Error('number < balance')    
        }   
    }
    static getTotalBalance() {
        return BankAccount.account.reduce((acc, username) =>
            acc + username.balance, 0) 
    }
}
let bancAccount = new BankAccount('Peter', 5000)
console.log(bancAccount.balance);
bancAccount.addDeposit(1000)
console.log(bancAccount.balance);
bancAccount.evenDeposit(2000)
console.log(bancAccount.balance);
let totalBalance = BankAccount.getTotalBalance()
console.log(totalBalance);


// class Animal {
// move() {
// // ...
// console.log("Животное двигается")
// }
// }

// class Bacteria extends Animal {

// }

// class Dog extends Animal {
// move() {
// super.move()
// console.log("Животное ходит")
// }
// }

// class Taxa extends Animal {
// move() {
// super.move()
// console.log("Такса ходит")
// }
// }

// class Fish extends Animal {
// move() {
// console.log("Животное плывет")
// }
// }

// const bobik = new Taxa()
// const nemo = new Fish()
// const bacteria = new Bacteria()

// bobik.move()
// nemo.move()
// bacteria.move()


