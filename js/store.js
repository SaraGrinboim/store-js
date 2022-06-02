class Product {
    #id;
    #name;
    #category;
    #price;
    #stockQuantity;
    constructor(id, name, category, price, stockQuantity) {
        this.#id = id;
        this.#name = name;
        this.#category = category;
        this.#price = price;
        this.#stockQuantity = stockQuantity;
    }
    toJSON() {
        return {
            id: this.#id, name: this.#name, category: this.#category,
            price: this.#price, stockQuantity: this.#stockQuantity
        };
    };
    get getId() {
        return this.#id
    }
    set setId(id) {
        this.#id = id;
    }
    get getName() {
        return this.#name
    }
    set setName(name) {
        this.#name = name;
    }
    get getPrice() {
        return this.#price
    }
    set setPrice(price) {
        if (price > 0)
            this.#price = price;
    }
    get getCategory() {
        return this.#category
    }
    set setCategory(category) {
        this.#category = category;
    }
    get getStockQuantity() {
        return this.#stockQuantity
    }
    set setStockQuantity(stockQuantity) {
        if (stockQuantity > -1)
            this.#stockQuantity = stockQuantity;
    }
    toString() {
        return `id: ${this.#id} name: ${this.#name} category: ${this.#category} price: ${this.#price} stockQuantity: ${this.#stockQuantity}`
    }
}

class Store {
    #products;
    #manager;
    #users;
    #storeName;
    #storeDescription;
    #logoUrl
    constructor(manager, storeName, storeDescription, logoUrl) {
        if (typeof (manager) === User)
            this.#manager = manager
        this.#products = [];
        this.#manager = manager
        this.#storeName = storeName;
        this.#storeDescription = storeDescription;
        this.#logoUrl = logoUrl;
    }
    toJSON() {
        return {
            products: this.#products, manager: this.#manager, users: this.#users,
            storeName: this.#storeName, storeDescription: this.#storeDescription, logoUrl: this.#logoUrl
        };
    }
    static fromJSON(json) {
        return new Store(json.manager, json.storeName, json.storeDescription, json.logoUrl);
    }
    set setStoreName(storeName) {
        this.#storeName = storeName
    }
    get getManager() {
        return this.#manager
    }
    get getProducts() {
        return this.#products
    }
    get getStoreName() {
        return this.#storeName
    }
    get getLogoUrl() {
        return this.#logoUrl
    }
    getCategories() {
        let allCategories = this.#products.map(p => p.getCategory);
        let unique = [...new Set(allCategories)];
        return unique;
    }
    addProduct(prod) {
        const a = this.#products.find((p) => p.getId === Number(prod.getId))

        // if(a)
        if (this.#products.find((p) => p.getId === Number(prod.getId)))
            alert('Sorry, the product ID must be unique, A product with this ID already exists')
        else
            this.#products.push(prod)
    }
    findProductById(id) {
        return this.#products.find((prod) => prod.getId === id)
    }

    findProductByName(name) {
        const ans = []
        ans.push(this.#products.find((prod) => prod.getName === name));
        return ans
    }
    findProductByPrice(from, to) {
        return this.#products.filter((prod) => prod.getPrice > from && prod.getPrice < to);
    }
    findProductByCategory(category) {
  
        return this.#products.filter((prod) => prod.getCategory === category)

    }
    findProductAlmostOut() {
    
        return this.#products.filter((prod) => prod.getStockQuantity < 4);
      
    }
    findProductOutStock() {
        const ans = []
        ans.push(this.#products.find((prod) => prod.getStockQuantity === 0));
        return ans
    }
}