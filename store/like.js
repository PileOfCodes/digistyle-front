import {defineStore} from 'pinia'

export const useLikeStore = defineStore('like',{
    state: () => {
        return{
            like: []
        }
    },
    getters: {
        getItem: (state) => {
            return (userId, slug) => {
                const item = state.like.find(item => item.user_id == userId && item.product.slug == slug)
                if(item){
                    return item.isLiked
                }else {
                    return false
                }
            }
        },
        getList: (state) => {
            return (userId) => {
                const item = state.like.filter(item => item.user_id == userId && item.isLiked == true)
                if(item){
                    return item
                }else {
                    return null
                }
            }
        }
    },
    persist: {
        storage: persistedState.localStorage,
        key: 'shopping-like'
    },
    actions: {
        getProductLike(data) {
            const item = this.like.find(like => like.user_id == data.user_id && like.product.slug == data.product.slug)
            if(item){
                item.isLiked = data.isLiked
            }else{
                this.like.push({...data})
            }
        },
        async removeItem(slug, userId) {
            this.like = this.like.filter(like => like.user_id == userId && like.product.slug != slug)
            await $fetch('/api/auth/updateLike',{
                method: "POST",
                body: {'slug' : slug}
            })
        },
        async removeItems(userId) {
            this.like = []
            await $fetch('/api/auth/unlike',{
                method: "POST",
                body: {'userId' : userId}
            })
        }
    }
})