let product = {
    title: "Велосипед",
    img: "ссылка на картинку",
    count: 10,
    favorite: false
}
//Счётчик=================
const btnMinus = document.querySelector("#minus")
const btnPlus = document.querySelector("#plus")
const counterElem = document.querySelector("#counter")
let counter = localStorage.getItem("count") !== null ? +localStorage.getItem("count") : product.count
counterElem.innerText = counter;

btnMinus.addEventListener("click", function() {
    if (counter > 0) {
    counter--
    counterElem.innerText = counter 
    localStorage.setItem("count", counter) 
    } 
});

btnPlus.addEventListener("click", function() {
    if (counter < 10) {
    counter++
    counterElem.innerText = counter
    localStorage.setItem("count", counter)
    }
});

//JSON. Меняем свойства. Кнопка объекта. 
if (!localStorage.getItem("product")) {
    localStorage.setItem("product", JSON.stringify(product))
}

const button = document.querySelector(".star")

let initialProduct =  JSON.parse(localStorage.getItem("product")) || product
    if (initialProduct.favorite) {
       // button.classList.add("favorite-active")
        document.body.setAttribute("favorite", "dark")
    }else {
        document.body.setAttribute("favorite", "light")
    }

    button.addEventListener("click", function() {
        let currentProduct = JSON.parse(localStorage.getItem("product")) || product

    currentProduct.favorite = !currentProduct.favorite
    localStorage.setItem("product", JSON.stringify(currentProduct));

    if (currentProduct.favorite) {
        //button.classList.add("favorite-active")
        document.body.setAttribute("favorite", "dark")
    }else {
        //button.classList.remove("favorite-active")
        document.body.setAttribute("favorite", "light")
    }
});  
