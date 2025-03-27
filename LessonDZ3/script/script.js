/*
*Rating AVG - это среднее арифметическое значение всех rating в массиве reviews у объекта продукта 
   
  rewiew
 let m = document.querySelector('main') 
 m.innerHTM = ''


  1 уровень сложности: https://i.imgur.com/Ip9BsRu.png

  1.Создать поле ввода (туда надо ввести id продукта) и кнопку сверху
  2.Создать функцию getProductByID, которая первым параметром получает id,
  вторым параметром получает callback функцию, которую вызывает на ответе 
  запроса по адресу https://dummyjson.com/products/${product id} (https://dummyjson.com/products/2)
  3.При клике на кнопку забрать из поля ввода id продукта и вызвать функцию getProductByID
  4.Внутри callback функции, при вызове getProductByID, создать карточку продукта по такому шаблону 
  (размеры и цвет выберите сами) из javascript 
  5.Каждый раз при клике на кнопку "показать" вместо старого продукта показать новый 
*/

document.getElementById('showProductBtn').addEventListener('click', function() {
  const productId = document.getElementById('productIdInput').value;
  if (productId) {
      getProductById(productId, displayProduct);
  } else {
      alert('Введите ID продукта');
  }
});

function getProductById(id, callback) {
  fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        return response.json()
      })
      .then((data)=> {
        callback(data)
      })
      .catch((error) => {
        console.log(error);
      })
}

function displayProduct(product) {
  const mainBlock = document.querySelector('main')
  mainBlock.innerHTML = '';
  
  const productContainer = document.createElement('div')
  productContainer.classList.add('productContainer')
  //productContainer.innerHTML = ''; // Очищаем контейнер перед добавлением нового продукта

  const imageElem = document.createElement('img')
  imageElem.setAttribute('src', `${product.images}`)
  imageElem.setAttribute('alt', 'image')

  const titleElem = document.createElement('h2')
  titleElem.innerText = product.title

  const stockP = document.createElement('p')
  const stockBold = document.createElement('b')
  stockBold.innerText = 'Stock : '
  stockP.innerText = `${product.stock}`
  stockP.prepend(stockBold)

  const priceP = document.createElement('p')
  const priceBold = document.createElement('b')
  priceBold.innerText = 'Price : '
  priceP.innerText = `$${product.price}`
  priceP.prepend(priceBold)

  const ratingP = document.createElement('p')
  const ratingBold = document.createElement('b')
  ratingBold.innerText = `Rating AVG : `

  let ratingAvg = product.reviews.reduce((acc, review) => {
    return acc + review.rating
  }, 0) / product.reviews.length

  ratingP.innerText = ratingAvg.toFixed(1)
  ratingP.prepend(ratingBold)
  
  const categoryP = document.createElement('p')
  const categoryBold = document.createElement('b')
  categoryBold.innerText = 'Category : '
  categoryP.innerText = `${product.category}`
  categoryP.prepend(categoryBold)

  productContainer.append(imageElem, titleElem, stockP, priceP, ratingP, categoryP);

  mainBlock.appendChild(productContainer)
}