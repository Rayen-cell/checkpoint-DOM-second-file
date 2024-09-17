// product class
class Product {
	constructor(name, description, price) {
		this.name = name;
		this.description = description;
		this.price = price;
	}
}

// cardItem  class
class cardItem {
	constructor(product, quantity) {
		this.product = product;
		this.quantity = quantity;
	}
}