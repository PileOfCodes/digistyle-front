<template>
    <div>
        <div v-if="items.length == 0" class="text-gray-600 text-sm mt-4">محصولی در لیست علاقه مندی های شما موجود نمی باشد</div>
        <div v-else>
            <div>
                لیست علاقه مندی ها <span>({{ items.length }})</span>
                <button @click="removeItems(authUser.id)" class="border-b border-black mr-4 text-xs">حذف تمام محصولات از لیست</button>
            </div>
            <table class="custome-table mt-4 w-full">
                <thead>
                    <tr>
                        <th>مشخصات محصول</th>
                        <th>قیمت</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in items" :key="item.product.id" >
                        <td class="py-6 pr-4 pl-16">
                            <div class="flex gap-8">
                                <img :src="item.product.primary_image" width="100" height="100" alt="">
                                <div class="flex flex-col items-start space-y-5">
                                    <NuxtLink :to="`/product/${item.product.slug}`" class="flex flex-col items-start space-y-3">
                                        <span class="text-lg font-bold">{{ item.product.brand ? item.product.brand.name : null  }}</span>
                                        <span class="text-sm text-gray-600 w-[450px] text-justify">{{ item.product.title }}</span>
                                    </NuxtLink>
                                    <button @click="removeItem(item.product.slug, authUser.id)" class="border-b border-black text-xs">حذف  محصول از لیست</button>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="flex justify-center gap-20 p-4 items-center">
                                <span>قیمت نهایی</span>
                                <div>
                                    <span v-if="item.product.sellers[0].discount">{{ numberFormat(roundIt(countDiscount(item.product.sellers[0].price, item.product.sellers[0].discount.percent))) }} تومان</span>
                                    <span v-else>{{ numberFormat(item.product.sellers[0].price) }} تومان</span>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useLikeStore } from '~~/store/like'
const likeStore = useLikeStore()
const {authUser} = useAuth()

const items = computed(() => likeStore.getList(authUser.value.id))

function removeItem(slug, userId) {
    likeStore.removeItem(slug, userId)
}

function removeItems(userId) {
    likeStore.removeItems(userId)
}



</script>

<style scoped>
.custome-table {
    border: 1px solid #f0f3f6;
    border-collapse: collapse;
}
.custome-table th{
    padding: 10px;
    background-color: #f0f3f6;
    border: 1px solid #f0f3f6;
    text-align: center;
}
.custome-table td{
    border: 1px solid #f0f3f6;
}
</style>