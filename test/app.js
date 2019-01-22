module.exports = class Checkout{
    constructor() {
        this.prices = new Object();
        this.items = new Object();
        this.discounts = new Object();
    }

    addItemPrice(item , price) {
        this.prices[item] = price
    }

    addItem(item) {
        if (this.prices[item] == undefined) {
            throw("No price defined for item " + item)
        }
        // addItemPrice 없이 addItem 먼저 되는 것을 방지한다.
        
        if (this.items[item] == undefined) {
            this.items[item] = 1;
        }
        else {
            this.items[item]++;
        }
    }

    calculateTotal() {
        let total = 0;
        for (let item in this.items) {
            total += this.calculateItemTotal(item);
        }
        return total;
    }

    calculateItemTotal(item) {
        let total = 0
        let discount = this.discounts[item]
        if (discount != undefined) {
            total += this.calculateDiscount(item , this.items[item], discount)
        } else {
            total += (this.prices[item] * this.items[item]);
        }
        return total;
    }

    calculateDiscount(item, itemCnt, discount) {
        let total = 0
        let nbrOfDiscounts = itemCnt / discount.cnt
        total += nbrOfDiscounts * discount.price
        let remainder = itemCnt % discount.cnt
        total += remainder * this.prices[item]

        return total;
    }

    addDisCount(item, itemCnt, discountPrice) {
        this.discounts[item] = {
            cnt : itemCnt, 
            price: discountPrice
        }
    }

}