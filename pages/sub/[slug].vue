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
                <div class="flex gap-8 flex-wrap w-[800px]" :class="bigCard ? 'overflow-hidden h-[50px]' : '' ">
                    <LazyFilterBrandFilter v-if="brandFilter == 'brand'" :brands="brands" @search-item="input => searchBrand = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterCategoryFilter v-if="categoryFilter == 'category'" :categories="categories" @search-item="input => searchCategory = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterSizeFilter v-if="sizeFilter == 'size'"  :sizes="sizes" @search-item="input => searchSize = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
                    <LazyFilterColorsFilter v-if="colorFilter == 'color'" :colors="colors" @search-item="input => searchColor = input" @send-input="input => setFilter(input)" @open-card="input => bigCard = input" />
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
const searchCategory = ref(null)
var colors = ref([])
var brands = ref([])
var sizes = ref([])
var categories = ref([])
definePageMeta({
    key: route => route.fullPath
})
const title = computed(() => {
    if(route.params.slug == 'category-women-clothing') {
        return 'خرید جدیدترین لباس مجلسی، لباس اداری،راحتی و لباس اسپرت زنانه'
    }else if(route.params.slug == 'category-men-clothing') {
        return 'خرید لباس مردانه مجلسی،لباس راحتی، اداری و لباس مردانه اسپرت' 
    }else if(route.params.slug == 'category-women-bags') {
        return 'خرید اینترنتی انواع کیف زنانه اسپرت، مجلسی، اداری، رودوشی و دستی' 
    }else if(route.params.slug == 'category-women-shoes') {
        return ' خرید اینترنتی انواع کفش زنانه چرمی، رسمی، روزمره، اسپرت و اداری ' 
    }else if(route.params.slug == 'category-women-accessories') {
        return ' خرید اینترنتی اکسسوری زنانه، زیورآلات، عینک، ساعت، شال و روسری ' 
    }else if(route.params.slug == 'category-women-watches') {
        return ' خرید اینترنتی ساعت مچی زنانه عقربه ای، دیجیتال و ست ساعت ' 
    }else if(route.params.slug == 'category-women-jewelry') {
        return ' خرید اینترنتی انواع زیورآلات زنانه فانتزی، اسپرت و بدلیجات زنانه ' 
    }else if(route.params.slug == 'category-women-sports') {
        return ' ورزشی زنانه ' 
    }else if(route.params.slug == 'category-men-bags') {
        return '  خرید اینترنتی کیف مردانه رودوشی، پاسپورتی، کیف دستی و اداری ' 
    }else if(route.params.slug == 'category-men-bags') {
        return '  خرید اینترنتی کیف مردانه رودوشی، پاسپورتی، کیف دستی و اداری ' 
    }else if(route.params.slug == 'category-men-shoes') {
        return '  خرید اینترنتی انواع کفش مردانه اسپرت، مجلسی، نیم بوت و کفش ورزشی ' 
    }else if(route.params.slug == 'category-men-accessories') {
        return '  خرید اینترنتی انواع اکسسوری مردانه، زیورآلات، ساعت و کیف پول مردانه ' 
    }else if(route.params.slug == 'category-men-watches') {
        return '  خرید اینترنتی انواع ساعت مردانه دیجیتال، عقربه ای و ست زوجی ' 
    }else if(route.params.slug == 'category-men-jewelry') {
        return '  خرید اینترنتی انواع زیورآلات مردانه  ' 
    }else if(route.params.slug == 'category-men-sports') {
        return '  ورزشی مردانه  ' 
    }else if(route.params.slug == 'category-kids-clothing') {
        return '   خرید اینترنتی انواع پوشاک نوزادی دخترانه و پسرانه  ' 
    }else if(route.params.slug == 'category-girls-clothes') {
        return '  خرید آنلاین لباس دخترانه مجلسی، لباس راحتی و لباس اسپرت دخترانه  ' 
    }else if(route.params.slug == 'category-boys-clothes') {
        return '  خرید آنلاین لباس پسرانه مجلسی، لباس راحتی و لباس اسپرت پسرانه  ' 
    }else if(route.params.slug == 'category-kids-shoes') {
        return '  خرید آنلاین  انواع کفش مجلسی و ورزشی نوزاد دختر و پسر  ' 
    }else if(route.params.slug == 'category-girls-clothes') {
        return '  خرید اینترنتی  کفش دخترانه مجلسی، اسپرت، بوت، کفش ورزشی و صندل  ' 
    }else if(route.params.slug == 'category-boys-shoes') {
        return '  خرید اینترنتی  کفش پسرانه مجلسی، اسپرت، بوت، کفش ورزشی و صندل  ' 
    }else if(route.params.slug == 'category-kids-accessories') {
        return ' اکسسوری نوزاد ' 
    }else if(route.params.slug == 'category-girls-accessories') {
        return ' اکسسوری دخترانه ' 
    }else if(route.params.slug == 'category-boys-accessories') {
        return ' اکسسوری پسرانه ' 
    }else if(route.params.slug == 'category-men-perfume') {
        return '  خرید انواع عطر و ادکلن مردانه ' 
    }else if(route.params.slug == 'category-women-perfume') {
        return '  خرید انواع عطر و ادکلن زنانه ' 
    }else if(route.params.slug == 'category-face') {
        return '  خرید اینترنتی انواع لوازم آرایشی صورت زنانه و دخترانه ' 
    }else if(route.params.slug == 'category-eye-and-eyebrow') {
        return '  خرید اینترنتی انواع لوازم آرایشی چشم و ابرو ' 
    }else if(route.params.slug == 'category-nail-care') {
        return '  خرید اینترنتی انواع لوازم بهداشت، زیبایی و آرایشی ناخن دست و پا ' 
    }else if(route.params.slug == 'category-face-and-body-cream') {
        return '  خرید اینترنتی محصولات مراقبت پوست آقایان، خانم ها و محصولات مراقبت پوست کودکان ' 
    }else if(route.params.slug == 'category-hair-products') {
        return '  خرید اینترنتی انواع محصولات و پک کامل لوازم آرایش مو زنانه و مردانه ' 
    }else if(route.params.slug == 'category-hair-care') {
        return '  شامپو، کرم و سرم مراقبت مو ' 
    }else if(route.params.slug == 'category-electrical-personal-care') {
        return '  خرید انواع لوازم شخصی ' 
    }else if(route.params.slug == 'category-dental-hygienist') {
        return '  خرید اینترنتی انواع محصولات و دستگاه شستشوی بهداشت دهان و دندان ' 
    }else if(route.params.slug == 'category-body-care') {
        return '  بهداشت و مراقبت بدن ' 
    }
})
useHead({
    title: title.value
})
const {public: {apiBase}} = useRuntimeConfig()

const {data: filters} = await useFetch(`${apiBase}/parent/getFilters`, {
    params: {slug : route.params.slug}
})

const {data: children} = await useFetch(`${apiBase}/parent/get-sliderChildren`, {
  query: {'slug' : route.params.slug }
})

const brandFilter = computed(() => filters.value.data.filter(filter => filter == 'brand'))
const sizeFilter = computed(() => filters.value.data.filter(filter => filter == 'size'))
const colorFilter = computed(() => filters.value.data.filter(filter => filter == 'color'))
const sellerFilter = computed(() => filters.value.data.filter(filter => filter == 'seller'))
const categoryFilter = computed(() => filters.value.data.filter(filter => filter == 'category'))

watch(search, debounce(async() => {
    searchItem({search : search.value})
},1500))

query.value = {...route.query}

const {data : details, refresh, pending} = await useFetch(() => `${apiBase}/parent/getDetails`, {
        params: {slug : route.params.slug},
        query
})
console.log(details.value.data)
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

var {data : colors}  = await useFetch(`${apiBase}/parent/getColors`,{
    query: {'slug' : route.params.slug,'search' : searchColor}
})

watch(searchColor, debounce(async() => {
  const data = await $fetch(`${apiBase}/parent/getColors`,{
    query: {'slug' : route.params.slug,'search' : searchColor}
  })
  colors.value = data
}, 500))

var {data : sizes}  = await useFetch(`${apiBase}/parent/getSizes`,{
    query: {'slug' : route.params.slug,'search' : searchSize}
})

watch(searchSize, debounce(async() => {
  const data = await $fetch(`${apiBase}/parent/getSizes`,{
    query: {'slug' : route.params.slug,'search' : searchSize}
  })
sizes.value = data
}, 500))

var {data : brands}  = await useFetch(`${apiBase}/parent/getBrands`,{
    query: {'slug' : route.params.slug,'search' : searchBrand}
})

watch(searchCategory, debounce(async() => {
  const data = await $fetch(`${apiBase}/parent/get-childCategories`, {
  query: {'slug' : route.params.slug, 'search' : searchCategory }
})
categories.value = data
}, 500))

var {data: categories} = await useFetch(`${apiBase}/parent/get-childCategories`, {
  query: {'slug' : route.params.slug, 'search' : searchCategory }
})

watch(searchBrand, debounce(async() => {
  const data = await $fetch(`${apiBase}/parent/getBrands`,{
    query: {'slug' : route.params.slug,'search' : searchBrand}
  })
brands.value = data
}, 500))


</script>
