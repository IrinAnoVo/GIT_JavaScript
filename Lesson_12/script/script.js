// При клике на кнопку switch-theme если data-theme у body равно light то сделать dark и наоборот
// Сохранить тему в localStoarge и при открытии страницы првоерить если в localstorage есть уже выбранная тема то поменять switch-theme на это значение
// 1 Получить элемент body в переменной bodyEleme
// 2 Проверить есть ли значение по ключу "theme" в localStorage
// 3 Если есть значение то установить значение аттрибута data-theme = (значение из localStorage), а если нет то установить значение аттрибута data-theme = "light"
// 4 Получить элемент кнопки
// 5 Перехватить событие клика по кнокпе
// 6 Поменять при клике значение аттрибута data-theme у body на противополжное значение 
// 7 Сохранить новое значение в localStorage
const bodyElem = document.querySelector("body")
 
if (localStorage.getItem("theme") !== null) {
    bodyElem.setAttribute("data-theme", localStorage.getItem("theme"))
}else {
    bodyElem.setAttribute("data-theme", "light")
    localStorage.setItem("theme", "light")
}
const button = document.querySelector(".switch-theme")
button.addEventListener("click", function () {
    const themeAttribute = bodyElem.getAttribute("data-theme")
    if (themeAttribute === "light") {
        bodyElem.setAttribute("data-theme", "dark")
        localStorage.setItem("theme", "dark")
    }else {
        bodyElem.setAttribute("data-theme", "light")
        localStorage.setItem("theme", "light") 
    }
})








