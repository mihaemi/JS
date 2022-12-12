class Product {
    constructor(id, category, name, image, price){
        this.id = id,
        this.category = category,
        this.name = name,
        this.image = image,
        this.price = price
    }
    log(){
        console.log(this.id, this.category, this.name, this.image, this.price);
    }
}

let productOne = new Product('123', 'electronics', 'headphones', 'image', '60');
let productTwo = new Product('456', 'hobby', 'book', 'image', '50');
let productThree = new Product('789', 'home', 'table', 'image', '100');

console.log(productOne);
