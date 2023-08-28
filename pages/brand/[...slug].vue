<template>
    <div class="relative mx-12">
        <div class="text-xs mt-12 flex gap-2">
            <span>
                فروشگاه اینترنتی لباس دیجی استایل
            </span>
            <span>/</span>
            <span>{{ route.params.slug[0] }}</span>
        </div>
        <div class="flex items-center justify-between">
            <div class="mt-6">
                <Icon size="21" class="text-slate-500" name="uil:search" />
                <input type="text" class="text-sm w-[300px]  mx-3 focus:border-none focus:outline-none" autofocus placeholder="جستجو در محصولات دیجی کالا ...">
            </div>
            <div class="text-slate-500 text-md">{{ details.data.products.length }} کالا</div>
        </div>
        <img v-if="details.data.brand.primary_image" :src="details.data.brand.primary_image" />
        <div class="mt-6 bg-gray-100 p-6" v-if="details.data.brand.description">
            <div class="flex flex-col items-center justify-center space-y-6">
                <div class="text-xl">{{ details.data.brand.name }}</div>
                <div class="text-sm text-justify w-[700px]">{{ details.data.brand.description }}</div>
            </div>
        </div> 
        <LazyBrandChildrenCategory />
        <div class=" sticky top-0 py-4 shadow-sm z-[20000] bg-white my-12 w-full " v-if="details.data.products.length > 0">
            <div class="flex justify-between items-start">
                <div class="flex gap-12 flex-wrap w-[800px]" :class="bigCard ? 'overflow-hidden h-[50px]' : '' ">
                    <LazyFilterCategoryFilter  :categories="categories" @search-item="input => searchCategory = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterSizeFilter  :sizes="sizes" @search-item="input => searchSize = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterColorsFilter  :colors="colors" @search-item="input => searchColor = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                </div>
                <div class="flex gap-20">
                    <LazyFilterOne @send-item="input => searchItem(input)" />
                </div>
            </div>
        </div>
        <div class="flex flex-wrap gap-x-4 mb-20" v-if="details.data.products.length > 0">
            <div v-for="product in details.data.products" :key="product.id">
                <LazyProductCard3 :product="product" />
            </div>
        </div> 
        <div v-else class="mb-20">
            <span>محصولی یافت نشد</span>
        </div>
    </div>
    <LoadingSppiner  v-if="pending" />
</template>

<script setup>
import { debounce } from 'lodash';
import queryString from 'query-string'
definePageMeta({
    key: route => route.fullPath,
    layout: 'simple'
})
const {public: {apiBase}} = useRuntimeConfig()
const query = ref({})
const search = ref(null)
const route = useRoute()
const bigCard = ref(true)
const router = useRouter()
const searchColor = ref(null)
const searchSize = ref(null)
const searchCategory = ref(null)
var colors = ref([])
var sizes = ref([])
var categories = ref([])

const {data: filters} = await useFetch(`${apiBase}/brand/single-brand/getFilters`, {
    params: {slug : route.params.slug}
})

const {data: details, refresh, pending} = await useFetch(`${apiBase}/brand/single-brand/getDetails`, {
    params: {slug: route.params.slug}
})

useHead({
    title : ` فروش محصولات برند ${details.value.data.brand.name} `
})

watch(search, debounce(async() => {
    searchItem({search : search.value})
},1500))

query.value = {...route.query}
function setFilter(input) { 
    let items = queryString.stringify({...input}, {arrayFormat: 'index'})
    query.value = {...route.query, items}
    router.replace({
        path: `/brand/${route.params.slug}`,
        query: query.value
    })
}

function searchItem(input) { 
    query.value = {...input}
    router.replace({
        path: `/brand/${route.params.slug}`,
        query: query.value
    })
}

var {data : colors}  = await useFetch(`${apiBase}/brand/single-brand/getColors`,{
    params: {'slug' : route.params.slug},
    query: {'search' : searchColor.value}
})

watch(searchColor, debounce(async() => {
  const data = await $fetch(`${apiBase}/brand/single-brand/getColors`,{
    params: {'slug' : route.params.slug},
    query: {'search' : searchColor.value}
  })
colors.value = data
}, 500))

var {data : sizes}  = await useFetch(`${apiBase}/brand/single-brand/getSizes`,{
    params: {'slug' : route.params.slug},
    query: {'search' : searchSize.value}
})

watch(searchSize, debounce(async() => {
  const data = await $fetch(`${apiBase}/brand/single-brand/getSizes`,{
    params: {'slug' : route.params.slug},
    query: {'search' : searchSize.value}
  })
sizes.value = data
}, 500))

watch(searchCategory, debounce(async() => {
  const data = await $fetch(`${apiBase}/brand/single-brand/get-childCategories`, {
  params: {'slug' : route.params.slug},
  query: {'search' : searchCategory.value }
})
categories.value = data
}, 500))

var {data: categories} = await useFetch(`${apiBase}/brand/single-brand/get-childCategories`, {
  params: {'slug' : route.params.slug},
  query: {'search' : searchCategory.value }
})

</script>