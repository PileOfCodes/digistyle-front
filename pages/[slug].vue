<template>
    <div class="relative mx-12">
        <div class="flex gap-x-1 text-xs my-12">
            <NuxtLink to="/" class="text-slate-500"> فروشگاه اینترنتی لباس دیجی استایل / </NuxtLink>
            <NuxtLink :to="`/shop/${childCategory.data.subCategory.category.parent.slug}`" class="text-slate-500">{{ childCategory.data.subCategory.category.parent.name }} / </NuxtLink>
            <NuxtLink :to="`/sub/${childCategory.data.subCategory.slug}`" class="text-slate-500">{{ childCategory.data.subCategory.name }} / </NuxtLink>
            <div>{{ childCategory.data.bread }} </div>
        </div>
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-6">
                <div class="text-3xl">{{ childCategory.data.bread }}</div>
                <div class="">
                    <Icon size="21" class="text-slate-500" name="uil:search" />
                    <input v-model.trim="search" type="text" id="productSearch" class="text-sm mx-3 focus:border-none focus:outline-none" autofocus placeholder="جستجو در محصولات زیر ...">
                </div>
            </div>
            <div class="text-slate-500 text-md">{{ products.data.products.length }} کالا</div>
        </div>
        <div class="sticky top-0 py-4 shadow-sm z-[20000] bg-white my-12 w-full " v-if="products.data.products.length > 0">
            <div class="flex justify-between items-start">
                <div class="flex gap-x-12 gap-y-4 flex-wrap w-[800px]" :class="bigCard ? 'overflow-hidden h-[50px]' : '' ">
                    <FilterBrandFilter v-if="brandFilter == 'brand'" :brands="brands" @search-item="input => searchBrand = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <FilterSizeFilter v-if="sizeFilter == 'size'" :sizes="sizes" @search-item="input => searchSize = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <FilterColorsFilter v-if="colorFilter == 'color'" :colors="colors" @search-item="input => searchColor = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <!-- <FilterPriceFilter v-if="priceFilter == 'price'" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" /> -->
                    <FilterSellerFilter v-if="sellerFilter == 'seller'" :sellers="sellers" @search-item="input => searchSeller = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <FilterTypeFilter v-if="typeFilter == 'type'" :types="types" @search-item="input => searchType = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <FilterFasten v-if="fastenFilter == 'fasten'" :fasten="fasten" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <FilterDesignFilter v-if="designFilter == 'design'" :designs="designs" @search-item="input => searchDesign = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <FilterClothType v-if="clothTypeFilter == 'clothType'" :clothTypes="clothTypes" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <FilterHeightFilter v-if="heightFilter == 'height'" :heights="heights" @search-item="input => searchHeight = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <FilterSeasonFilter v-if="seasonFilter == 'season'" :seasons="seasons" @search-item="input => searchSeason = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <FilterStartCountry v-if="countryFilter == 'startCountry'" :startCountry="startCountry" @search-item="input => searchStartCountry = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <FilterMaterialFilter v-if="materialFilter == 'material'" :materials="materials" @search-item="input => searchMaterial = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <FilterSpecialFilter v-if="specialFilter == 'specialAttributes'" :specialAttributes="specialAttributes" @search-item="input => searchSpecialAttributes = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                </div>
                <div class="flex gap-20">
                    <div class="flex items-center gap-2 cursor-pointer" v-if="filters.data.length > 7"  @click="makeBigger">
                        <span>تمام فیلترها</span>
                        <Icon v-if="bigCard" size="32" name="uil:plus" />
                        <Icon v-else size="32" name="uil:minus" />
                    </div>
                    <FilterOne @send-item="input => searchItem(input)" />
                </div>
            </div>
        </div>
        <div class="flex flex-wrap gap-x-8 " v-if="products.data.products.length > 0">
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
const searchSpecialAttributes = ref(null)
const searchSeller = ref(null)
const searchType = ref(null)
const searchClothType = ref(null)
const searchDesign = ref(null)
const searchHeight = ref(null)
const searchSeason = ref(null)
const searchStartCountry = ref(null)
const searchMaterial = ref(null)
var colors = ref([])
var sizes = ref([])
var brands = ref([])
var specialAttributes = ref([])
var sellers = ref([])
var types = ref([])
var fasten = ref([])
var clothTypes = ref([])
var designs = ref([])
var heights = ref([])
var seasons = ref([])
var startCountry = ref([])
var materials = ref([])
definePageMeta({
    key: route => route.fullPath
})

const {public: {apiBase}} = useRuntimeConfig()

const {data: childCategory} = await useFetch(`${apiBase}/getChildCategory`, {
    params: {slug : route.params.slug}
})
const title = computed(() => childCategory.value.data.bread)
useHead({
  title : `فروش اینترنتی ${title.value}`
})

const {data: filters} = await useFetch(`${apiBase}/getFilters`, {
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

watch(search, debounce(async() => {
    searchItem({search : search.value})
},1500))

query.value = {...route.query}

const {data : products, refresh, pending} = await useFetch(() => `${apiBase}/getProducts`, {
        params: {slug : route.params.slug},
        query
})

function setFilter(input) { 
    let items = queryString.stringify({...input}, {arrayFormat: 'index'})
    query.value = {...route.query, items}
    router.replace({
        path: `/${route.params.slug}`,
        query: query.value
    })
}

function searchItem(input) { 
    query.value = {...input}
    router.replace({
        path: `/${route.params.slug}`,
        query: query.value
    })
}

function makeBigger() {
    bigCard.value = ! bigCard.value
}

var {data : colors}  = await useFetch(`${apiBase}/child-category-colors`,{
    query: {'slug' : route.params.slug,'search' : searchColor}
})

watch(searchColor.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/child-category-colors`,{
    query: {'slug' : route.params.slug,'search' : searchColor}
  })
colors.value = data
}, 500))

var {data : brands}  = await useFetch(`${apiBase}/child-category-brands`,{
    query: {'slug' : route.params.slug,'search' : searchBrand}
})

watch(searchBrand.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/child-category-brands`,{
    query: {'slug' : route.params.slug,'search' : searchBrand}
  })
brands.value = data
}, 500))

var {data : sizes}  = await useFetch(`${apiBase}/child-category-sizes`,{
    query: {'slug' : route.params.slug,'search' : searchSize}
})

watch((searchSize.value), debounce(async() => {
  const data = await $fetch(`${apiBase}/child-category-sizes`,{
    query: {'slug' : route.params.slug,'search' : searchSize}
  })
sizes.value = data
}, 500))

var {data : specialAttributes}  = await useFetch(`${apiBase}/child-category-specialAttributes`,{
    query: {'slug' : route.params.slug,'search' : searchSpecialAttributes}
})

watch(searchSpecialAttributes.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/child-category-specialAttributes`,{
    query: {'slug' : route.params.slug,'search' : searchSpecialAttributes}
  })
specialAttributes.value = data
}, 500))

var {data : types}  = await useFetch(`${apiBase}/child-category-types`,{
    query: {'slug' : route.params.slug,'search' : searchType}
})

watch(searchType.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/child-category-types`,{
    query: {'slug' : route.params.slug,'search' : searchType}
  })
types.value = data
}, 500))

var {data : fasten}  = await useFetch(`${apiBase}/child-category-fasten`,{
    query: {'slug' : route.params.slug}
})

var {data : clothTypes}  = await useFetch(`${apiBase}/child-category-clothType`,{
    query: {'slug' : route.params.slug}
})

var {data : designs}  = await useFetch(`${apiBase}/child-category-designs`,{
    query: {'slug' : route.params.slug,'search' : searchDesign}
})

watch(searchDesign.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/child-category-designs`,{
    query: {'slug' : route.params.slug,'search' : searchDesign}
  })
designs.value = data
}, 500))

var {data : heights}  = await useFetch(`${apiBase}/child-category-heights`,{
    query: {'slug' : route.params.slug,'search' : searchHeight}
})

watch(searchHeight.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/child-category-heights`,{
    query: {'slug' : route.params.slug,'search' : searchHeight}
  })
heights.value = data
}, 500))

var {data : seasons}  = await useFetch(`${apiBase}/child-category-seasons`,{
    query: {'slug' : route.params.slug,'search' : searchSeason}
})

watch(searchSeason.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/child-category-seasons`,{
    query: {'slug' : route.params.slug,'search' : searchSeason}
  })
seasons.value = data
}, 500))

var {data : startCountry}  = await useFetch(`${apiBase}/child-category-startCountry`,{
    query: {'slug' : route.params.slug,'search' : searchStartCountry}
})

watch(searchStartCountry.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/child-category-startCountry`,{
    query: {'slug' : route.params.slug,'search' : searchStartCountry}
  })
startCountry.value = data
}, 500))

var {data : materials}  = await useFetch(`${apiBase}/child-category-materials`,{
    query: {'slug' : route.params.slug,'search' : searchMaterial}
})

watch(searchMaterial.value, debounce(async() => {
  const data = await $fetch(`${apiBase}/child-category-materials`,{
    query: {'slug' : route.params.slug,'search' : searchMaterial}
  })
materials.value = data
}, 500))


</script>
