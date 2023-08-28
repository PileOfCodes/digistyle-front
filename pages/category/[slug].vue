<template>
    <div class="relative mx-12">
        <div class="flex gap-1 text-xs my-12">
            <NuxtLink to="/" class="text-slate-500"> فروشگاه اینترنتی لباس دیجی استایل / </NuxtLink>
            <NuxtLink :to="`/shop/${details.data.categories.parent.slug}`" class="text-slate-500">{{ details.data.categories.parent.name }} / </NuxtLink>
            <div>{{ details.data.categories.name }} </div>
        </div>
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-6">
                <div class="text-3xl">{{ details.data.categories.name }}</div>
                <div class="">
                    <Icon size="21" class="text-slate-500" name="uil:search" />
                    <input v-model.trim="search" type="text" id="productSearch" class="text-sm  mx-3 focus:border-none focus:outline-none" autofocus placeholder="جستجو در محصولات زیر ...">
                </div>
            </div>
            <div class="text-slate-500 text-md">{{ details.data.products.length }} کالا</div>
        </div>
        <div>
            <LazySubChildrenSwiper :children="children" />
        </div>
        <div class=" sticky top-0 py-4 shadow-sm z-[20000] bg-white my-12 w-full " v-if="details.data.products.length > 0">
            <div class="flex justify-between items-start">
                <div class="flex gap-12 flex-wrap w-[800px]" :class="bigCard ? 'overflow-hidden h-[50px]' : '' ">
                    <LazyFilterBrandFilter v-if="brandFilter == 'brand'" :brands="brands" @search-item="input => searchBrand = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterCategoryFilter v-if="categoryFilter == 'category'" :categories="categories" @search-item="input => searchCategory = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterSizeFilter v-if="sizeFilter == 'size'"  :sizes="sizes" @search-item="input => searchSize = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterColorsFilter v-if="colorFilter == 'color'" :colors="colors" @search-item="input => searchColor = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <!-- <LazyFilterPriceFilter v-if="priceFilter == 'price'" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" /> -->
                    <LazyFilterSellerFilter v-if="sellerFilter == 'seller'" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                </div>
                <div class="flex gap-20">
                    <LazyFilterOne @send-item="input => searchItem(input)" />
                </div>
            </div>
        </div>
        <div class="flex flex-wrap gap-x-4 " v-if="details.data.products.length > 0">
            <div v-for="product in details.data.products" :key="product.id">
                <LazyProductCard3 :product="product" />
            </div>
        </div> 
        <div v-else>
            <span>محصولی یافت نشد</span>
        </div>
    </div>
    <LoadingSppiner  v-if="pending" />
</template>

<script setup>
import { debounce } from 'lodash';
import queryString from 'query-string'

const query = ref({})
const search = ref(null)
const bigCard = ref(true)
const router = useRouter()
const route = useRoute()
const searchColor = ref(null)
const searchSize = ref(null)
const searchBrand = ref(null)
const searchCategory = ref(null)
var colors = ref([])
var brands = ref([])
var sizes = ref([])
var categories = ref([])
definePageMeta({
    key: route => route.fullPath
})

const {public: {apiBase}} = useRuntimeConfig()

const {data: children} = await useFetch(`${apiBase}/singleCategory/get-sliderChildren`, {
  query: {'slug' : route.params.slug }
})

const {data: filters} = await useFetch(`${apiBase}/singleCategory/getFilters`, {
    params: {slug : route.params.slug}
})

const brandFilter = computed(() => filters.value.data.filter(filter => filter == 'brand'))
const sizeFilter = computed(() => filters.value.data.filter(filter => filter == 'size'))
const priceFilter = computed(() => filters.value.data.filter(filter => filter == 'price'))
const colorFilter = computed(() => filters.value.data.filter(filter => filter == 'color'))
const sellerFilter = computed(() => filters.value.data.filter(filter => filter == 'seller'))
const categoryFilter = computed(() => filters.value.data.filter(filter => filter == 'category'))

watch(search, debounce(async() => {
    searchItem({search : search.value})
},1500))

query.value = {...route.query}

const {data : details, refresh, pending} = await useFetch(() => `${apiBase}/singleCategory/getDetails`, {
        params: {slug : route.params.slug},
        query
})

const title = computed(() => details.value.data.categories.name)
useHead({
    title: ` فروش اینترنتی انواع ${title.value} `
})

function setFilter(input) { 
    let items = queryString.stringify({...input}, {arrayFormat: 'index'})
    query.value = {...route.query, items}
    router.replace({
        path: `/category/${route.params.slug}`,
        query: query.value
    })
}

function searchItem(input) { 
    query.value = {...input}
    router.replace({
        path: `/category/${route.params.slug}`,
        query: query.value
    })
}

var {data : colors}  = await useFetch(`${apiBase}/singleCategory/getColors`,{
    query: {'slug' : route.params.slug,'search' : searchColor}
})

watch(searchColor, debounce(async() => {
  const data = await $fetch(`${apiBase}/singleCategory/getColors`,{
    query: {'slug' : route.params.slug,'search' : searchColor}
  })
colors.value = data
}, 500))

var {data : sizes}  = await useFetch(`${apiBase}/singleCategory/getSizes`,{
    query: {'slug' : route.params.slug,'search' : searchSize}
})

watch(searchSize, debounce(async() => {
  const data = await $fetch(`${apiBase}/singleCategory/getSizes`,{
    query: {'slug' : route.params.slug,'search' : searchSize}
  })
sizes.value = data
}, 500))

var {data : brands}  = await useFetch(`${apiBase}/singleCategory/getBrands`,{
    query: {'slug' : route.params.slug,'search' : searchBrand}
})

watch(searchCategory, debounce(async() => {
  const data = await $fetch(`${apiBase}/singleCategory/get-childCategories`, {
  query: {'slug' : route.params.slug, 'search' : searchCategory }
})
categories.value = data
}, 500))

var {data: categories} = await useFetch(`${apiBase}/singleCategory/get-childCategories`, {
  query: {'slug' : route.params.slug, 'search' : searchCategory }
})

watch(searchBrand, debounce(async() => {
  const data = await $fetch(`${apiBase}/singleCategory/getBrands`,{
    query: {'slug' : route.params.slug,'search' : searchBrand.value}
  })
brands.value = data
}, 500))


</script>
