//ES6 class or vanila function constructor
class product {
    constructor(name, id, price, description) {
        this.productId = id;
        this.productName = name;
        this.price = price;
        this.description = description;
    }
}
module.exports = product