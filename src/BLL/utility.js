export function getDiscountedPrice(price, discountPercent){
    var discountPrice = (price - (price * (discountPercent/100)));
    return discountPrice.toFixed(2);
}

export function getCartTotalItems(arrCart) {
    let totalItems = 0
    for (const e of arrCart) {
        totalItems += e.quantity;
    }
    return totalItems;
}

export function getCartTotalAmount(arrCart) {
    let totalAmount = 0;
    for (const e of arrCart) {
        let discountPrice = getDiscountedPrice(e.product.price, e.product.discountPercentage) * e.quantity;
        totalAmount += discountPrice;
    }
    return totalAmount;
}