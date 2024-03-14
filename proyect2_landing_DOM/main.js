// import './style.css'

/*productos de la web */
const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image: './assets/pr1.png',
    id: 1
  },
  {
    name: 'PcComp Revolt 4070 Intel Core i7-13700HX/RTX',
    price: 1859,
    stars: 5,
    reviews: 13,
    seller: 'PcComponentes',
    image: './assets/pr2.png',
    id: 2
  },
  {
    name: 'MSI Thin GF63 12UC-688XES Inter Core i7 - 12650H/16GB/1TB',
    price: 789,
    stars: 5,
    reviews: 143,
    seller: 'PcComponentes',
    image: './assets/pr3.png',
    id: 3
  },
  {
    name: 'ASUS ROG Strix G16 G614JI-N3163 Intel Core i7-13650HX/32GB/1TB',
    price: 1599,
    stars: 4,
    reviews: 78,
    seller: 'MediaMarket',
    image: './assets/pr4.png',
    id: 4
  },
  {
    name: 'MSI Pulse 15 B13VGK-433XES Intel Core i9-13900H/32GB/1TB',
    price: 1649,
    stars: 4,
    reviews: 73,
    seller: 'Fnac',
    image: './assets/pr5.png',
    id: 5
  },
  {
    name: 'HP Victus 16-s001ns AMD Ryzen 7 7840HS/32GB/1TB',
    price: 1139,
    stars: 5,
    reviews: 44,
    seller: 'MediaMarket',
    image: './assets/pr6.png',
    id: 6
  },
  {
    name: 'ASUS TUF Gaming F17 FX707ZV4HX004 Intel Core i7-1200H/32GB/1TB',
    price: 1999,
    stars: 5,
    reviews: 34,
    seller: 'Fnac',
    image: './assets/pr7.png',
    id: 7
  },
  {
    name: 'PcCom Revolt 4060 Intel Core i7-13700H/32GB/500GB',
    price: 1389,
    stars: 3,
    reviews: 35,
    seller: 'Fnac',
    image: './assets/pr8.png',
    id: 8
  },
  {
    name: 'Lenovo IdeaPAd Gaming 3 15IAH7 Intel Core i5-12450H/16GB/512GB',
    price: 679,
    stars: 3,
    reviews: 21,
    seller: 'Mr. Computers',
    image: './assets/pr9.png',
    id: 9
  },
  {
    name: 'Acer Nitro V 15 ANV15-51PQ Intel Corei5-13420H/16GB/1TB',
    price: 759,
    stars: 3,
    reviews: 152,
    seller: 'Mr. Computers',
    image: './assets/pr10.png',
    id: 10
  }
]
const sellers = []
const prices = []
const menuOptions = ['Home', 'PcComponents', 'About']
/*crear una funcion para generar una lista de vendedores  */
const GetSellers = () => {
  products.forEach(function (current) {
    /* obtener el vendedor y guardarlo en una lista */
    if (!sellers.includes(`${current.seller}`)) {
      sellers.push(current.seller)
    }
  })
  sellers.sort()
}
/* crear una funcion que obtenga los precios */
const GetProductsPrice = () => {
  products.forEach(function (current) {
    /* obtener el vendedor y guardarlo en una lista */
    prices.push(current.price)
  })
  /*añadir valores máximo y mínimo al input */
  const selectorPrecio = document.querySelector('#price-selector')
  selectorPrecio.min = Math.min(...prices)
  selectorPrecio.max = Math.max(...prices)
  selectorPrecio.placeholder = ` min price ${Math.min(...prices)}€`
  /* TODO: Revisar esta asignación de ancho */
  selectorPrecio.setAttribute(
    'size',
    selectorPrecio.getAttribute('placeholder').length
  )
}
/* Crear una función para insertar los vendedores */
const addOptionsSellerPicker = () => {
  const filtro = document.querySelector('.filters-seller')
  const selectorFiltro = document.querySelector('#selector')
  for (let seller of sellers) {
    const sellerfilter = document.createElement('option')
    // sellerfilter.value = seller
    sellerfilter.innerHTML = seller
    selectorFiltro.append(sellerfilter)
  }
  filtro.appendChild(selectorFiltro)
}
const AddproductsTosection = (products) => {
  products.forEach(function (current) {
    /* obtener el vendedor y guardarlo en una lista */
    const seccionProducts = document.querySelector('.products')
    const sellerfilter = document.querySelector('#selector')
    /*creamos un article*/
    const productArticle = document.createElement('article')
    productArticle.id = current.id
    productArticle.className = 'ficha'
    /* cada article tendra  */
    /* una imagen */
    const articleImg = document.createElement('img')
    articleImg.setAttribute('src', current.image)
    productArticle.appendChild(articleImg)
    /* una descripción */
    const articleDescriptionDiv = document.createElement('div')
    const articleDescription = document.createElement('p')
    articleDescription.innerHTML = current.name
    articleDescriptionDiv.appendChild(articleDescription)
    productArticle.appendChild(articleDescriptionDiv)
    /* un precio */
    const priceAndSellerDiv = document.createElement('div')
    priceAndSellerDiv.id = 'PriceSellerDiv'
    const ArticlePrice = document.createElement('h2')
    const ArticleSeller = document.createElement('h2')
    ArticleSeller.id = 'articleSeller'
    ArticleSeller.innerHTML = `${current.seller}`
    ArticlePrice.id = 'articlePrice'
    ArticlePrice.innerHTML = `${current.price}€`
    priceAndSellerDiv.appendChild(ArticleSeller)
    priceAndSellerDiv.appendChild(ArticlePrice)
    productArticle.appendChild(priceAndSellerDiv)
    /* número de estrellas y comentarios */
    const divOpinion = document.createElement('div')
    divOpinion.id = 'estrellas-div'
    for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement('div')
      estrella.className = 'estrella'
      if (current.stars >= i) {
        estrella.classList.add('rellena')
      }
      divOpinion.appendChild(estrella)
    }
    const Opinion = document.createElement('p')
    Opinion.id = 'Opinion-number'
    Opinion.innerHTML = `(${current.reviews})`
    divOpinion.appendChild(Opinion)
    productArticle.appendChild(divOpinion)
    seccionProducts.appendChild(productArticle)
  })
}

function RemoveFilters() {
  const sellerFilter = document.querySelector('#selector')
  const priceFilter = document.querySelector('#price-selector')
  const RemoveBtn = document.querySelector('#btn-remove-filter')

  RemoveBtn.addEventListener('click', (event) => {
    if (sellerFilter.value != 'All' || Number(priceFilter.value) != 0) {
      /* restablecer todos los productos */
      const productSection = document.querySelector('.products')
      productSection.innerHTML = ''
      AddproductsTosection(products)
      /* resetear el filtro de precio */
      priceFilter.value = ''
      /* establecer valor "All" en filtro de vendedor */
      sellerFilter.innerHTML = ''
      if (!sellers.includes('All')) {
        sellers.unshift('All')
      }
      addOptionsSellerPicker()
    }
  })
}
const AddOptionsToHeader = (menuOptions) => {
  const headerArea = document.querySelector('#header')
  const headerNavPc = document.createElement('nav')
  headerNavPc.id = 'header-nav'
  headerNavPc.className = 'Pc'
  const headerNavUl = document.createElement('ul')
  const headerImg = document.createElement('img')
  const headerLogin = document.createElement('img')
  const headerLorry = document.createElement('img')

  const BurgerMenuLabel = document.createElement('label')
  BurgerMenuLabel.className = 'burger-menu-icon'
  BurgerMenuLabel.htmlFor = 'checkbox'

  const headerBurgerMenu = document.createElement('img')
  headerBurgerMenu.id = 'burger-menu'
  headerBurgerMenu.className = 'mobile'
  headerBurgerMenu.src =
    'https://res.cloudinary.com/df7b0dj9r/image/upload/v1707251762/menu_fhmh3b.png'
  const burgerMenuInput = document.createElement('input')
  burgerMenuInput.id = 'checkbox'
  burgerMenuInput.type = 'checkbox'
  burgerMenuInput.addEventListener('change', function () {
    if (this.checked) {
      console.log(this)
      headerNavPc.className = 'mobile-nav'
    }
  })
  headerImg.src =
    'https://cdn.pccomponentes.com/img/logos/logo-pccomponentes.svg'
  headerImg.id = 'logo'
  BurgerMenuLabel.appendChild(headerBurgerMenu)
  headerArea.appendChild(headerImg)
  headerArea.appendChild(BurgerMenuLabel)
  headerArea.appendChild(burgerMenuInput)

  for (let menuOption of menuOptions) {
    const headerNavUlLi = document.createElement('li')
    const headerNavulLiA = document.createElement('a')
    headerNavulLiA.innerHTML = menuOption
    headerNavUlLi.appendChild(headerNavulLiA)
    headerNavUl.appendChild(headerNavUlLi)
  }
  const DivforIcons = document.createElement('div')
  DivforIcons.id = 'div-icons'
  headerNavPc.appendChild(headerNavUl)
  headerArea.appendChild(headerNavPc)
  headerLogin.src =
    'https://res.cloudinary.com/df7b0dj9r/image/upload/v1707251762/login-icon_fjksws.png'
  headerLogin.id = 'loginImage'
  headerLorry.src =
    'https://res.cloudinary.com/df7b0dj9r/image/upload/v1707251763/carrito-icon_mfmxuz.png'
  headerLorry.id = 'lorryImage'
  DivforIcons.appendChild(headerLogin)
  DivforIcons.appendChild(headerLorry)
  headerArea.appendChild(DivforIcons)
}

const AplicarFiltroVendedor = (products) => {
  /* array para recoger los productos del vendedor vendedor */
  const FiltradosPorVendor = []
  console.log('products introducidos son: ' + products)
  /* selector de Vendedor */
  const sellerFilter = document.querySelector('#selector')
  /* productos actuales en la vista de usuario */
  const ProductosActuales = document.querySelector('.products')
  /* eliminar todos los usuarios */
  ProductosActuales.innerHTML = ''
  for (let product of products) {
    if (sellerFilter.value != 'All') {
      if (sellerFilter.value === product.seller) {
        console.log('the value pass seller filter')
        FiltradosPorVendor.push(product)
      }
    } else {
      console.log('all products will be added')
      FiltradosPorVendor.push(product)
    }
  }
  console.log(FiltradosPorVendor)
  return FiltradosPorVendor
}

const AplicarFiltroPrecio = (productsVendedor) => {
  /* array para recoger los productos del vendedor vendedor */
  const FiltradosPorPrecio = []
  /* selector de Vendedor */
  const priceFilter = document.querySelector('#price-selector')
  /* productos actuales en la vista de usuario */
  const ProductosActuales = document.querySelector('.products')
  /* eliminar todos los usuarios */
  ProductosActuales.innerHTML = ''
  for (let product of productsVendedor) {
    console.log(product)
    if (priceFilter.value != '') {
      console.log('tiene valor')
      if (Number(priceFilter.value) > 0) {
        console.log(`Valor ${priceFilter.value} es mayor que 0`)
        console.log(priceFilter.value < product.price)
        console.log('filtro introducido')
        if (product.price < priceFilter.value) {
          console.log('product pass price filter')
          FiltradosPorPrecio.push(product)
          // } else {
          //   console.log('all producs will be added')
          //   FiltradosPorPrecio.push(product)
        }
      }
    } else {
      console.log('all producs will be added')
      FiltradosPorPrecio.push(product)
    }
  }
  return FiltradosPorPrecio
}

///////////////////////////////////////////////////////////////////////////////
/* Función para aplicar los dos filtro (vendedor y precio máximo) */
const AmbosFiltros = (products) => {
  /* boton de aplicar filtro*/
  const priceFilterBtn = document.querySelector('#btn-price')
  /* Resultado de los filtros */

  /* cada vez que se haga click en el boton ...*/
  priceFilterBtn.addEventListener('click', () => {
    /* borrar todos los productos*/
    const ProductosActuales = document.querySelector('.products')
    ProductosActuales.innerHTML = ''
    const filtroVendedor = AplicarFiltroVendedor(products)
    const ResultadoAmbosFiltros = AplicarFiltroPrecio(filtroVendedor)
    console.log(ResultadoAmbosFiltros.lenght > 0)
    if (ResultadoAmbosFiltros.length > 0) {
      AddproductsTosection(ResultadoAmbosFiltros)
    } else {
      const Result = document.createElement('p')
      Result.innerHTML = '<b> No results found </b>'
      ProductosActuales.appendChild(Result)
    }
  })
}
//   const priceFilterBtn = document.querySelector('#btn-price')
//   const filtro = document.getElementById('price-selector')
//   const sellerfilter = document.querySelector('#selector')

//   priceFilterBtn.addEventListener('click', () => {
//     /* borrar todos los productos*/
//     const ProductosActuales = document.querySelector('.products')
//     ProductosActuales.innerHTML = ''
//     /*crear un array para filtar*/
//     const priceProducts = []
//     if (typeof Number(filtro.value) == 'number' && Number(filtro.value) != 0) {
//       productos.forEach(function (current) {
//         if (Number(current.price) <= filtro.value) {
//           if (sellerfilter.value != 'All') {
//             if (current.seller === sellerfilter.value) {
//               priceProducts.push(current)
//             }
//           } else {
//             priceProducts.push(current)
//           }
//         }
//       })
//     }
//   })
// }
//////////////////// Ejecución ///////////////////////
/* EJECUCIÓN */
AddOptionsToHeader(menuOptions)
/* obtener lista de vendedores*/
GetSellers()
/* obtener lista de precios y asignar máximo y mínimo al input*/
GetProductsPrice()
/* añádir vendedores al selector */
addOptionsSellerPicker()
/* añadir productos a la sección */
AddproductsTosection(products)
AmbosFiltros(products)
// ApplyPriceFilter(products)
RemoveFilters(products)
