<template>
    <div class="relative mx-12">
        <div class="flex gap-1 text-xs my-12">
            <NuxtLink to="/" class="text-slate-500"> فروشگاه اینترنتی لباس دیجی استایل </NuxtLink>
        </div>
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-6">
                <div class="text-3xl">{{ products.data.collection.name }}</div>
                <div class="">
                    <Icon size="21" class="text-slate-500" name="uil:search" />
                    <input v-model.trim="search" type="text" id="productSearch" class="text-sm  mx-3 focus:border-none focus:outline-none" autofocus placeholder="جستجو در محصولات زیر ...">
                </div>
            </div>
            <div class="text-slate-500 text-md">{{ products.data.products.length }} کالا</div>
        </div>
        <div class=" sticky top-0 py-4 shadow-sm z-[20000] bg-white my-12 w-full " v-if="products.data.products.length > 0">
            <div class="flex justify-between items-start">
                <div class="flex gap-12 flex-wrap w-[800px]" :class="bigCard ? 'overflow-hidden h-[50px]' : '' ">
                    <!-- <LazyFilterBrandFilter v-if="brandFilter == 'brand'" :brands="brands" @search-item="input => searchBrand = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" /> -->
                    <LazyFilterSizeFilter v-if="sizeFilter == 'size'" :sizes="sizes" @search-item="input => searchSize = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterColorsFilter v-if="colorFilter == 'color'" :colors="colors" @search-item="input => searchColor = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterWeight v-if="weightFilter == 'weight'" :weights="weights" @search-item="input => searchWeight = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <!-- <LazyFilterPriceFilter v-if="priceFilter == 'price'" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" /> -->
                    <!-- <LazyFilterSellerFilter v-if="sellerFilter == 'seller'" :sellers="sellers" @search-item="input => searchSeller = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterTypeFilter v-if="typeFilter == 'type'" :types="types" @search-item="input => searchType = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterFasten v-if="fastenFilter == 'fasten'" :fasten="fasten" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterDesignFilter v-if="designFilter == 'design'" :designs="designs" @search-item="input => searchDesign = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterClothType v-if="clothTypeFilter == 'clothType'" :clothTypes="clothTypes" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterHeightFilter v-if="heightFilter == 'height'" :heights="heights" @search-item="input => searchHeight = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterSeasonFilter v-if="seasonFilter == 'season'" :seasons="seasons" @search-item="input => searchSeason = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterStartCountry v-if="countryFilter == 'startCountry'" :startCountry="startCountry" @search-item="input => searchStartCountry = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterMaterialFilter v-if="materialFilter == 'material'" :materials="materials" @search-item="input => searchMaterial = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterSpecialFilter v-if="specialFilter == 'specialAttributes'" :specialAttributes="specialAttributes" @search-item="input => searchSpecialAttributes = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" /> -->
                </div>
                <div class="flex gap-20">
                    <div class="flex items-center gap-2 cursor-pointer" v-if="filters.data.length > 7"  @click="makeBigger">
                        <span>تمام فیلترها</span>
                        <Icon v-if="bigCard" size="32" name="uil:plus" />
                        <Icon v-else size="32" name="uil:minus" />
                    </div>
                    <LazyFilterOne @send-item="input => searchItem(input)" />
                </div>
            </div>
        </div>
        <div class="flex flex-wrap gap-x-4 " v-if="products.data.products.length > 0">
            <div  v-for="product in products.data.products" :key="product.id">
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
import queryString from 'query-string'
import { debounce } from 'lodash';

const query = ref({})
const search = ref(null)
const bigCard = ref(true)
const router = useRouter()
const route = useRoute()
const searchColor = ref(null)
const searchSize = ref(null)
const searchWeight = ref(null)
var sizes = ref([])
var weights = ref([])
var colors = ref([])
definePageMeta({
    key: route => route.fullPath
})

const {public: {apiBase}} = useRuntimeConfig()

const {data: filters} = await useFetch(`${apiBase}/collection/getFilters`, {
    params: {slug : route.params.slug}
})

const brandFilter = computed(() => filters.value.data.filter(filter => filter == 'brand'))
const sizeFilter = computed(() => filters.value.data.filter(filter => filter == 'size'))
const colorFilter = computed(() => filters.value.data.filter(filter => filter == 'color'))
const heightFilter = computed(() => filters.value.data.filter(filter => filter == 'height'))
const sellerFilter = computed(() => filters.value.data.filter(filter => filter == 'seller'))
const typeFilter = computed(() => filters.value.data.filter(filter => filter == 'type'))
const fastenFilter = computed(() => filters.value.data.filter(filter => filter == 'fasten'))
const designFilter = computed(() => filters.value.data.filter(filter => filter == 'design'))
const clothTypeFilter = computed(() => filters.value.data.filter(filter => filter == 'clothType'))
const seasonFilter = computed(() => filters.value.data.filter(filter => filter == 'season'))
const countryFilter = computed(() => filters.value.data.filter(filter => filter == 'startCountry'))
const materialFilter = computed(() => filters.value.data.filter(filter => filter == 'material'))
const specialFilter = computed(() => filters.value.data.filter(filter => filter == 'specialAttributes'))
const weightFilter = computed(() => filters.value.data.filter(filter => filter == 'weight'))

watch(search, debounce(async() => {
    searchItem({search : search.value})
},1500))

query.value = {...route.query}

const {data : products, refresh, pending} = await useFetch(() => `${apiBase}/collection/getProducts`, {
        params: {slug : route.params.slug},
        query
})

function setFilter(input) { 
    let items = queryString.stringify({...input}, {arrayFormat: 'index'})
    query.value = {...route.query, items}
    router.replace({
        path: `/collection/${route.params.slug}`,
        query: query.value
    })
}

function searchItem(input) { 
    query.value = {...input}
    router.replace({
        path: `/collection/${route.params.slug}`,
        query: query.value
    })
}

function makeBigger() {
    bigCard.value = ! bigCard.value
}

var {data : colors}  = await useFetch(`${apiBase}/collection/get-colors`,{
    query: {'slug' : route.params.slug,'search' : searchColor}
})

var {data: sizes} = await useFetch(`${apiBase}/collection/get-sizes`, {
  query: {'slug' : route.params.slug,'search' : searchSize }
})

var {data: weights} = await useFetch(`${apiBase}/collection/get-weights`, {
  query: {'slug' : route.params.slug,'search' : searchWeight }
})

watch(searchWeight, debounce(async() => {
  const data = await $fetch(`${apiBase}/collection/get-weights`,{
    query: {'slug' : route.params.slug,'search' : searchWeight}
  })
weights.value = data
}, 500))

watch(searchColor, debounce(async() => {
  const data = await $fetch(`${apiBase}/collection/get-colors`,{
    query: {'slug' : route.params.slug,'search' : searchColor}
  })
colors.value = data
}, 500))

watch(searchSize, debounce(async() => {
  const data = await $fetch(`${apiBase}/collection/get-sizes`, {
  query: {'slug' : route.params.slug,'search' : searchSize }
})
sizes.value = data
}, 500))

</script>
