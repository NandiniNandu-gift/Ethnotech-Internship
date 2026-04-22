class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Cart {
    constructor() {
        this.items = [];
        this.discount = 0;
    }

    addItem(product, quantity = 1) {
        this.items.push({ product, quantity });
    }

    removeItem(name) {
        this.items = this.items.filter(item => item.product.name !== name);
    }

    applyCoupon(code) {
        if (code === "SAVE10") {
            this.discount = 10;
            console.log("Coupon Applied: ₹10 OFF");
        }
    }

    showCart() {
        console.log("Cart Items:");
        this.items.forEach(item => {
            console.log(item.product.name, "x", item.quantity);
        });
    }

    getTotal() {
        let total = 0;

        this.items.forEach(item => {
            total += item.product.price * item.quantity;
        });

        total = total - this.discount;

        console.log("Total Price:", total);
    }
}


// 🚀 RUN
const p1 = new Product("Shoes", 2000);
const p2 = new Product("Bag", 1000);

const cart = new Cart();

cart.addItem(p1, 2);
cart.addItem(p2, 1);

cart.showCart();

cart.applyCoupon("SAVE10");

cart.getTotal();

cart.removeItem("Bag");

cart.showCart();