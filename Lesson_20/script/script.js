// 1.
let person = {
    name: "Сергей",
        getNormFunc: function () {
            // this = person
            return function () {
            // this = Window
                console.log(this.name)
            }
        },
        getArrowFunc: function () {
            // this = person
            return () => {
            // this = person
                console.log(this.name)
            }
        }
    }
    let normFunc = person.getNormFunc()
    let arrowFunc = person.getArrowFunc()
    normFunc() // "" <=> undefined
    arrowFunc() // Сергей


    // 2.
    const obj = {
        value: "outer",
        createInnerObject: function () {
            // this = obj
            return {
            value: "inner",
            getArrowValue: () => {
                console.log(this.value)
            },
            getNormValue: function () {
            // this = внутренный объект
                    console.log(this.value)
                }
            }
        }
    }   
    let innerObj = obj.createInnerObject()
    innerObj.getArrowValue() // outer
    innerObj.getNormValue() // inner

// Создайте объект calcualtor, который содержит свойство value (начальное значение = 0) и реализует методы для выполнения базовых математических операций: сложение, вычитание, умноженте, деление. Кадлый метод должен получить параметр num, изменять значение value согласно своей операции и возвращает this.
// add(num)
// sub(num)
// mul(num)
// div(num)
const calculator = {
    value: 0,
    add(num) {
        this.value += num
        return this 
    },

    sub(num) {
        this.value -= num
        return this 
    },

    mul(num) {
        this.value *= num
        return this 
    },

    div(num) {
        this.value /= num
        return this
    },

    print() {
        console.log(this.value);
    }
}
//let result = calculator.add(10).sub(5).mul(6).div(2);
//console.log(result.value); // 15
//calculator.print()
let step1 = calculator.add(10)  // to print()
let step2 = step1.sub(5)
let step3 = step2.mul(6)
let step4 = step3.div(2)
step4.print()

// =========== call, apply, bind  =============

// const sum = (a, b) => a + b  //стрелочная функция
// function sum(a, b) {
// return a + b
// }
function sum(username) {
    console.log(this.a + this.b)  // складываем 2 параметра одного объекта
    console.log(`Hello ${username}`)
}

let obj1 = {
    a: 5,
    b: 6,
}

let obj2 = {
    a: 1,
    b: 7
}
//apply() полезен, когда у вас есть массив или массивоподобный объект, который вы хотите передать в функцию как отдельные аргументы.
//call() используется, когда вы хотите передать каждый аргумент функции вручную, не используя ма
//  ниже функции работют только не со стрелочными 
sum.call(obj1, "John")  //объединяет 2 функции обращение к одному объекту массива)
sum.call(obj2, "Jane")

//let args = ["John", "Doe"]
//sum.apply(obj1, args)
sum.apply(obj1, ["John", "Doe"])  //объединяет 2 функции, но записывает в виде массива)
sum.apply(obj2, ["Jane", "Doe"])


function greet() {
    console.log(`hello from ${this.fullname()}`);   
}

let jane = {
    firstname: 'Jane',
    lastname: 'Doe',
    fullname: function () {
        return `${this.firstname} ${this.lastname}`
    }
}

let john = {
    firstname: 'John',
    lastname: 'Doe',
    fullname: function () {
        return `${this.firstname} ${this.lastname}`
    }
}

//  Call и aplly запускают функцию немедленно а bind возвращает функцию со строго закрепленным this
let johnGreet = greet.bind(john)  //
johnGreet()
let janeGreet = greet.bind(jane)
johnGreet()

function userGetToDo(job, job2) {
    console.log(arguments);
    console.log(`${this.fullname()} собирается ${job}, а потом ${job2}`);    
}
const jhonJob = userGetToDo.bind(john)
//jhonJob('бегать')
//jhonJob('учиться')
const janeJob = userGetToDo.bind(jane, 'учиться')
//janeJob()
//janeJob()
janeJob('бегать')
janeJob('кататься')

function increment(num1, num2) {
    console.log(num1 + num2)
  }
  
  const incrementBy5 = increment.bind(null, 5)
  incrementBy5(10) // num1 = 5 num2 = 10
  incrementBy5(20) // num1 = 5 num2 = 20
  
  const incrementBy10 = increment.bind(null, 10)
  incrementBy10(50) // num1 = 10 num2 = 50
  
  const incrementStrogo = increment.bind(null, 10, 12)

  incrementStrogo(50) // num1 = 10 num2 = 12 




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

const btn1 = document.querySelector('.btn_1');
const btn2 = document.querySelector('.btn_2');
const btn3 = document.querySelector('.btn_3');
const btn4 = document.querySelector('.btn_4');
const textcounter = document.querySelector('.counter');
let counter = 0;
function incrementCounter() {
  this.innerText = counter;
  counter++;
}
function dincrementCounter() {
  this.innerText = counter;
  counter--;
}
function multCounter() {
  this.innerText = counter;
  counter*=2;
}
function divCounter() {
  this.innerText = counter;
  counter/=2;
}

// // При клике на btn2 показать счетчик внутри p с классом
// counter используя call либо apply в связке с функцией incrementCounter

btn2.addEventListener('click', function () {
  incrementCounter.call(textcounter);
});

btn3.addEventListener('click', dincrementCounter.bind(textcounter));

btn1.addEventListener('click', multCounter.bind(textcounter));

btn4.addEventListener('click', divCounter.bind(textcounter));
