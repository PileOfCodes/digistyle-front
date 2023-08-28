<template>
    <div class="relative mx-10">
        <div class="text-xs mt-12  ">فروشگاه اینترنتی لباس دیجی استایل</div>
        <div class="flex items-center justify-between">
            <div class="mt-6">
                <Icon size="21" class="text-slate-500" name="uil:search" />
                <input type="text" class="text-sm w-[300px]  mx-3 focus:border-none focus:outline-none" autofocus placeholder="جستجو در محصولات دیجی کالا ...">
            </div>
            <div class="text-slate-500 text-md">{{ products.data.length }} کالا</div>
        </div>
        <div class="flex justify-between items-cetner mt-6">
            <div class="flex items-center gap-2">
                <span class="text-xl">{{ seller.data.name }}</span>
                <span class="text-xs text-blue-600 bg-blue-100 py-1 px-4 rounded-full ">فروشنده برگزیده</span>
                <span class="rounded-full w-[5px] h-[5px] bg-gray-200 "></span>
                <span class="text-xs">عضویت از {{ seller.data.membership_time }}</span>
            </div>
            <button @click="doCopy(`/localhost:3000/seller/${$route.params.slug}`)" class="flex items-center gap-2 text-sm bg-gray-100 py-1 px-2 ">
                <span>{{ `/localhost:3000/seller/${$route.params.slug}` }}</span>
                <Icon size="21" v-if="changeIcon" name="uil:check-circle" />
                <Icon size="21" v-else name="uil:copy" />
            </button>
        </div>
        <div class="flex flex-col ">
            <div class="text-xs mt-6">عملکرد فروشنده: <span class="text-green-600 bg-green-200 py-1 px-2 text-sm rounded-md"><span>4.2</span> از <span>5</span></span></div>
            <div class="text-xs mt-4 flex gap-1 items-center ">
                <span> 100% تامین به موقع </span>
                <span class="rounded-full w-[5px] h-[5px] bg-gray-200 "></span>
                <span> 100% تعهد ارسال </span>
                <span class="rounded-full w-[5px] h-[5px] bg-gray-200 "></span>
                <span> 99% بدون مرجوعی </span>
            </div>
        </div>
        <div class="sticky top-0 py-4 shadow-sm z-[20000] bg-white my-12 w-full " v-if="products.data.length > 0">
            <div class="flex justify-between items-start">
                <div class="flex gap-x-12 gap-y-4 flex-wrap w-[800px]">
                    <FilterBrandFilter :brands="brands" @search-item="input => searchBrand = input" @send-input="input => setFilter(input)" />
                    <FilterSizeFilter :sizes="sizes" @search-item="input => searchSize = input" @send-input="input => setFilter(input)" />
                    <FilterColorsFilter :colors="colors" @search-item="input => searchColor = input" @send-input="input => setFilter(input)" />
                    <!-- <FilterColorsFilter :categories="categories" @search-item="input => searchCategory = input" @send-input="input => setFilter(input)" /> -->
                </div>
                <div class="flex gap-20">
                    <FilterOne @send-item="input => searchItem(input)" />
                </div>
            </div>
        </div>
        <div class="flex flex-wrap gap-4" v-if="products.data.length > 0">
            <div  v-for="product in products.data" :key="product.id">
                <LazyProductCard3 :product="product" />
            </div>
        </div> 
        <div v-else class="mt-20">
            <span>محصولی یافت نشد</span>
        </div>
    </div>
    <LoadingSppiner  v-if="pending" />
</template>

<script setup>
import { debounce } from 'lodash';
import queryString from 'query-string'
import { toClipboard } from '@soerenmartius/vue3-clipboard'

const changeIcon = ref(false)

function doCopy(value) {
    toClipboard(value)
    changeIcon.value = ! changeIcon.value
}

const query = ref({})
const search = ref(null)
const router = useRouter()
const route = useRoute()
const searchColor = ref(null)
const searchSize = ref(null)
const searchBrand = ref(null)
const searchCategory = ref(null)
var colors = ref([])
var sizes = ref([])
var brands = ref([])
var categories = ref([])
const {public: {apiBase}} = useRuntimeConfig()

definePageMeta({
    key: route => route.fullPath
})


watch(search, debounce(async() => {
    searchItem({search : search.value})
},1500))

query.value = {...route.query}

const {data : seller} = await useFetch(() => `${apiBase}/seller/get-seller`, {
    params: {slug : route.params.slug}
})

const {data : products, refresh, pending} = await useFetch(() => `${apiBase}/seller/getProducts`, {
        params: {slug : route.params.slug},
        query
})

function setFilter(input) { 
    let items = queryString.stringify({...input}, {arrayFormat: 'index'})
    query.value = {...route.query, items}
    router.replace({
        path: `/seller/${route.params.slug}`,
        query: query.value
    })
}

function searchItem(input) { 
    query.value = {...input}
    router.replace({
        path: `/seller/${route.params.slug}`,
        query: query.value
    })
}

var {data : colors}  = await useFetch(`${apiBase}/seller/get-colors`,{
    query: {'slug' : route.params.slug,'search' : searchColor}
})

watch(searchColor.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/seller/get-colors`,{
    query: {'slug' : route.params.slug,'search' : searchColor}
  })
colors.value = data
}, 500))

var {data : brands}  = await useFetch(`${apiBase}/seller/get-brands`,{
    query: {'slug' : route.params.slug,'search' : searchBrand}
})

watch(searchBrand.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/seller/get-brands`,{
    query: {'slug' : route.params.slug,'search' : searchBrand}
  })
brands.value = data
}, 500))

var {data : sizes}  = await useFetch(`${apiBase}/seller/get-sizes`,{
    query: {'slug' : route.params.slug,'search' : searchSize}
})

watch(searchSize.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/seller/get-sizes`,{
    query: {'slug' : route.params.slug,'search' : searchSize}
  })
sizes.value = data
}, 500))

var {data : categories}  = await useFetch(`${apiBase}/seller/get-categories`,{
    query: {'slug' : route.params.slug,'search' : searchCategory}
})

watch(searchCategory.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/seller/get-categories`,{
    query: {'slug' : route.params.slug,'search' : searchCategory}
  })
categories.value = data
}, 500))





</script>