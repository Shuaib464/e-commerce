export function getDiscountedPrice(price, discountPercent){
    var discountPrice = (price - (price * (discountPercent/100)));
    return discountPrice.toFixed(2);
}