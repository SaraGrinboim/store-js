let store
function load() {
    store = localStorage.getItem('store')
    store = JSON.parse(store)
    // add products///////////////
    console.log(store);
    store = Store.fromJSON(store)
    const milk = new Product(1, 'milk', 'Dairy products', 4.90, 30);
    store.addProduct(milk)
    // const milk2 = new Product(1, 'milk2', 'Dairy products', 4.90, 30);
    // store.addProduct(milk2)
    const cheese = new Product(2, 'cheese', 'Dairy products', 8, 20);
    store.addProduct(cheese)
    const Yellow_cheese = new Product(3, 'Yellow cheese', 'Dairy products', 30, 3);
    store.addProduct(Yellow_cheese)

    const tomato = new Product(11, 'tomato', 'Fruits and Vegetables', 4.90, 900);
    store.addProduct(tomato)
    const cucumber = new Product(12, 'cucumber', 'Fruits and Vegetables', 5.90, 750);
    store.addProduct(cucumber)
    const Onion = new Product(13, 'Onion', 'Fruits and Vegetables', 6.90, 700);
    store.addProduct(Onion)

    const Microwave = new Product(21, 'Microwave', 'electronics', 300, 5);
    store.addProduct(Microwave)
    const Oven = new Product(22, 'Oven', 'electronics', 1200, 2);
    store.addProduct(Oven)
    const toaster = new Product(23, 'toaster', 'electronics', 80, 10);
    store.addProduct(toaster)
    const AirConditioner = new Product(24, 'Air-Conditioner', 'electronics', 2500, 0);
    store.addProduct(AirConditioner)
    getCategoriesHTML();
    ///////////////////////////

    drow(store.getProducts)

    document.getElementById("mainTitle").innerHTML = `${store.getStoreName} `;
    document.getElementById("nameManager").innerHTML = `Hello to the respectable manager: ${store.getManager.firstName} ${store.getManager.lastName}`
    document.getElementById("logo").src = store.getLogoUrl;
}
function addProduct() {
    const id = Number(document.getElementById('id').value);
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const stockQuantity = document.getElementById('stockQuantity').value;
    const newProduct = new Product(id, name, category, price, stockQuantity);
    store.addProduct(newProduct)
    console.log(store)

    getCategoriesHTML();
    drow(store.getProducts)

}
function findProductHTML() {
    currentProduct = store.findProductById(Number(document.getElementById('idSearch').value))
    showLastDetailes(currentProduct)
}
function showLastDetailes(currentProduct) {
    document.getElementById('id-edit').value = currentProduct.getId;
    document.getElementById('name-edit').value = currentProduct.getName;
    document.getElementById('category-edit').value = currentProduct.getCategory;
    document.getElementById('price-edit').value = currentProduct.getPrice;
    document.getElementById('stockQuantity-edit').value = currentProduct.getStockQuantity;
}
function editProduct() {
    const id = document.getElementById('id-edit').value;
    currentProduct.setId = id
    const name = document.getElementById('name-edit').value;
    currentProduct.setName = name
    const category = document.getElementById('category-edit').value;
    currentProduct.setCategory = category
    const price = document.getElementById('price-edit').value;
    currentProduct.setPrice = price
    const stockQuantity = document.getElementById('stockQuantity-edit').value;
    currentProduct.setStockQuantity = stockQuantity

    alert(`saved your change ${currentProduct}`)
    drow(store.getProducts)
}

function getCategoriesHTML() {
    let select = document.getElementById('select-category');
    select.innerHTML = ''
    let categories = store.getCategories();
    categories.forEach((category) => {
        let opt = document.createElement('option');
        opt.value = category;
        opt.innerHTML = category;
        select.appendChild(opt);
    })
}
function searchProductByName() {
    const prods = store.findProductByName(document.getElementById('name-search').value);
    console.log(prods)
    drow(prods)
}
function searchProductByPrice() {
    const prods = store.findProductByPrice(Number(document.getElementById('from-price').value),
        Number(document.getElementById('to-price').value));
    console.log(prods)
    drow(prods)

}
function searchProductByCategory(category) {
    const prods = store.findProductByCategory(document.getElementById('select-category').value)
    console.log(prods)
    drow(prods)
}
function searchProductAlmostOut() {
    const prods = store.findProductAlmostOut()
    console.log(prods);
    drow(prods)
}
function searchProductOutStock() {
    const prods = store.findProductOutStock()
    console.log(prods);
    drow(prods)
}

function drow(prods) {
    clear()
    prods.forEach((p) => {
        const tmp = document.getElementsByTagName("template")[0];
        const element = tmp.content.cloneNode(true);

        element.querySelector(".id").innerText = p.getId
        element.querySelector(".name").innerText = p.getName
        element.querySelector(".category").innerHTML = p.getCategory
        element.querySelector(".price").innerHTML = p.getPrice
        element.querySelector(".stockQuantity").innerHTML = p.getStockQuantity;

        const c = document.getElementById("tbody")
        c.appendChild(element);
    })

}
function clear() {
    document.getElementById("tbody").innerHTML = "";
}



