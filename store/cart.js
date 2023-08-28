import {defineStore} from "pinia"


export const useCartStore = defineStore('cart', {
    state: () => {
        return {
            cart: []
        }
    },
    persist: {
        storage: persistedState.localStorage,
        key: 'shopping-cart'
    },
    getters: {
        totalDiscountPrice(state) {
            return state.cart.reduce((total, product) => {
                return (parseInt(product.originalPrice * product.qty) - countDiscount(product.originalPrice * product.qty, product.sellingDiscount)) + total
            }, 0)
        },
        totalOrderPrice(state) {
            return state.cart.reduce((total, product) => {
                return parseInt(product.originalPrice * product.qty) + total
            }, 0)
        },
        totalPrice(state) {
            return state.cart.reduce((total, product) => {
                return (product.sellingPrice * product.qty) + total
            }, 0)
        },
        allItems(state) {
            return state.cart
        },
        countItems(state) {
            return state.cart.length
        }
    },
    actions: {
        getProducts(product, count, property, price, discount,
             seller, quantity, originalPrice) {
            this.cart.push({
                ...product,
                qty: count,
                sellingProperty: property,
                sellingPrice: price,
                sellingDiscount: discount,
                sellingSeller: seller,
                sellingQuantity: quantity,
                originalPrice,
            })
        },
        removeProduct(id, property) {
            this.cart = this.cart.filter(p => p.id != id || p.id == id && p.sellingProperty != property)
        },
        removeItemFromCart(id, property) {
            this.cart = this.cart.filter(p => p.sellingProperty != property || p.id != id)
        },
        increment(id, size) {
            const item = this.cart.find(p => p.id == id && p.sellingProperty == size)
            if(item) {
                if(item.qty < item.sellingQuantity) {
                    item.qty++
                }
            }
        },
        decrement(id, size) {
            const item = this.cart.find(p => p.id == id && p.sellingProperty == size)
            if(item) {
                if(item.sellingQuantity > 1) {
                    item.qty--
                }
            }
        },
    }
})