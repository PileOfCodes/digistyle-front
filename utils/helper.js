export const numberFormat = (number) => {
    return new Intl.NumberFormat().format(number)
}

export const countDiscount = (price, percent) => {
    return price - (price * percent / 100)
}

export const roundIt = (price) => {
    return Math.ceil(price / 1000) * 1000
}