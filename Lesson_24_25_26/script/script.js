const categories = []
const navLinksElem = document.querySelector(".nav-links>nav>ul")
let activeCategory = "all"
let productsContainer = document.querySelector(".products-container")

async function getCategories() {
  try {
    const response = await fetch("https://dummyjson.com/products/categories")
    const data = await response.json()

    data.slice(0, 4).forEach(category => {       //slice(0, 7)мы выбрали кол-во категорий сами
      categories.push({
        name: category.name,
        slug: category.slug
      })
    });

    renderCategories()
  } catch (error) {
    console.log(`Get categories error: ${error}`)
  }
}

function renderCategories() {
  let content = `<li class="nav-link active" data-slug="all">All</li>`
  categories.forEach(category => {
    content += `<li class="nav-link" data-slug="${category.slug}">${category.name}</li>`
  })

  navLinksElem.innerHTML = content

  let navLinks = document.querySelectorAll(".nav-link")  //отрисовываем события кликов
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      /*navLinks.forEach(function (categoryElement) {
      categoryElement.classList.remove("active")*/
      navLinks.forEach(l => l.classList.remove("active"))
      this.classList.add("active")

      activeCategory = this.dataset.slug
      /*renderProducts()*/    //вызываем выбраную нами категорию кликом на категорию
    })
  })  
}

getCategories()

//отрисовка карточек=========
const products = []
const divProductsElem = document.querySelector(".products-container")
async function getProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products') //('https://dummyjson.com/products?limit=100')
    const data = await response.json()

    data.products.forEach(product => {
      products.push( {
        id: product.id,
        title: product.title,
        image: product.images[0],
        thumbnail: product.thumbnail,  //мелкие картинки
        description: product.description,
        price: product.price,
        category: product.category
      })
    });
    renderProducts() 
  } catch (error) {
    console.log(`Get products error: ${error}`);   
  }
} 

//отрисовка HTML с фильтрами и поиском=========
const searchInputElem = document.querySelector(".search-box")  //отрисовка поиск по набору в поиск
searchInputElem.addEventListener("input", renderProducts)

function renderProducts() {     // выбираем нужную нам категорию кликнув на определенную кнопку категории
  productsContainer.innerHTML = ""
  let searchValue = searchInputElem.value.toLowerCase()
  products.filter(function (product) {
    if (activeCategory === "all") {
      if (searchValue === "") return true
      return product.title.toLowerCase().includes(searchValue)
      }
      
      if (product.category === activeCategory) {
      if (searchValue === "") return true
      return product.title.toLowerCase().includes(searchValue)
      }
    }).forEach(product => {
    productsContainer.insertAdjacentHTML("beforeend", 
      `<div class="product-card">
      <div class="product-image-container">
        <img src="${product.thumbnail}" alt="product"
          class="product-image">
        <div class="product-category">${product.category}</div>
        <div class="product-select"></div>
      </div>
      <div class="product-info">
        <p class="product-title">${product.title}</p>
        <p class="product-price">$${product.price}</p>
      </div>
    </div>`)
  }
)}
getProducts()

//моё решения без фильтров============
/*function renderProducts() {
  let contentProduct = ``  
  products.forEach(product => { 
    contentProduct += `<div class="product-card">
      <div class="product-image-container">
        <img src="${product.thumbnail}" alt="product"
          class="product-image">
        <div class="product-category">${product.category}</div>
        <div class="product-select"></div>
      </div>
      <div class="product-info">
        <p class="product-title">${product.title}</p>
        <p class="product-price">$${product.price}</p>
      </div>
    </div>`
  })
  divProductsElem.innerHTML = contentProduct
}
getProducts()
*/
