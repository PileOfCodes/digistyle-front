<template>
    <div class="text-sm">
        <Head>
            <Meta name="description" content="فروشگاه اینترنتی لباس دیجی استایل در تمام دسته بندی ها ارائه دهنده انواع برندهای ایرانی و خارجی "  />
        </Head>
        <div class="flex  mr-32 ml-12 my-8">
            <div class="flex gap-4 w-[350px] ">
                <div class="relative">
                    <div @mouseenter="stayIn"  @mouseleave="stayOut">
                        <ClientOnly>
                            <div class="bg-[#ef5a88] -top-2 left-4 text-center px-1 text-xs text-white absolute rounded-full">{{ countItems }}</div>
                        </ClientOnly>
                        <div class="shopping-bag"></div>
                        <div v-if="showCartBox" @mouseenter="stayIn" class="absolute z-10">
                            <div class="bg-white shadow-lg w-6 h-6 absolute top-1 rotate-45"></div>
                            <div class="absolute top-2 transition-all shadow-lg duration-1000 -right-2 bg-white w-[350px] rounded-[4px]">
                                <div v-if="countItems == 0">
                                    <div class="flex flex-col items-center justify-center p-4">
                                        <div class="mt-4">
                                            <img src="/basket.png" width="140" height="140" alt="">
                                        </div>
                                        <div class="text-lg mt-3">سبد خرید شما خالی است.</div>
                                        <div class="text-xs text-gray-400 mt-6"> شاید این صفحات برای شما جذاب باشند</div>
                                        <div class="flex gap-4 pb-4 text-[12px] mt-4 text-blue-400">
                                            <NuxtLink to="sale-landing" target="_blank">حراج استایل</NuxtLink>
                                            <span class="text-gray-400 "> | </span>
                                            <NuxtLink to="/brand" target="_blank"> برندهای برتر </NuxtLink>
                                            <span class="text-gray-400 "> | </span>
                                            <NuxtLink to="/landings/designers" target="_blank"> خانه طراحان ایرانی </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                                <div v-else>
                                    <div class="flex flex-col text-xs p-4">
                                        <div class="flex justify-between items-center pb-4">
                                            <div>{{ countItems }} کالا</div>
                                            <NuxtLink to="/cart" class="text-[#6aced2] flex items-center gap-1">
                                                <span>مشاهده سبد خرید</span>
                                                <Icon size="21" name="uil:angle-left" />
                                            </NuxtLink>
                                        </div>
                                        <div :class="{'overflow-y-scroll h-[300px]' : countItems > 3}" >
                                            <div class="flex gap-4 border-t border-gray-200 py-2" v-for="product in allItems">
                                                <div>
                                                    <img :src="product.primary_image" width="50" height="50" alt="">
                                                </div>
                                                <div class="flex flex-col space-y-2">
                                                    <div class="flex w-[250px]">
                                                        <div class="basis-full">
                                                            <div class="text-[10px]" v-if="product.brand != null">{{product.brand.name}}</div>
                                                        </div>
                                                        <Icon @click="removeItemFromCart(product.id, product.sellingProperty)" class="text-gray-400 cursor-pointer" size="19" name="ci:close-small" />
                                                    </div>
                                                    <div class="text-xs">{{ product.title }}</div>
                                                    <div class="flex justify-between items-center ">
                                                        <div class="flex gap-1 text-gray-400 text-[10px]">
                                                            <span>{{ product.qty }} عدد</span>
                                                            <span>|</span>
                                                            <span>سایز {{ product.sellingProperty }}</span>
                                                        </div>
                                                        <div class="flex gap-1 items-center ">
                                                            <span>{{ numberFormat(product.sellingPrice * product.qty) }} تومان</span>
                                                            <span class="bg-black text-white p-1 ">{{ product.sellingDiscount }} %</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="border-t border-gray-200 py-2">
                                            <div class="flex justify-between items-center">
                                                <div class="flex flex-col space-y-1">
                                                    <span class="text-[12px]">مبلغ قابل پرداخت:</span>
                                                    <span class="text-[#ef5a88] text-lg font-bold">{{ numberFormat(totalPrice) }}<span class="font-thin text-[12px]">تومان</span></span>
                                                </div>
                                                <NuxtLink to="/shipping" class="bg-[#ef5a88] py-2 px-6 text-lg text-white">ثبت سفارش</NuxtLink >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="authUser" id="login" title="مشاهده حساب کاربری">
                    <UserprofileProfile />
                </div>
                <NuxtLink to="/user/login" v-else id="login" title="مشاهده حساب کاربری">وارد شوید</NuxtLink>
            </div>
            <div class="ml-[200px] flex flex-col items-center justify-center space-y-8">
                <div class="text-[50px] ">
                    <NuxtLink to="/">
                        <img src="/digi.svg" alt="">
                    </NuxtLink>
                </div>
                <hr class="w-[400px] h-[2px] bg-black" />
            </div>
            <div class="flex flex-col space-y-2 relative">
                <div class="flex items-center">
                    <input 
                    type="text"
                    id="landingSearch"
                    @click="showSearchCard" autofocus 
                    class="mr-6 w-[200px] border-none outline-none" 
                    :placeholder="`جستجوی محصولات از ${allbrands.data.length} برند`">
                    <Icon  class="absolute right-0" name="uil:search" />
                </div>
                <hr class="bg-black h-[2px]">
            </div>
        </div>
        <div class="container mx-auto">
            <div class="flex justify-center items-center ">
                <ul class="w-1/3">
                    <li @mouseleave="hideListCard" class="flex justify-center gap-8" v-for="(parents, index) in parentCategories" :key="index">
                        <NuxtLink :to="`/shop/${parent.slug}`" @mouseover="showListCard(parent.id)" v-for="parent in parents" :key="parent.id" class="text-slate-800 hover:text-black hover:font-bold">
                            <span > {{ parent.name }}</span>
                            <div v-if="showList && showIndex == parent.id && showBrand == false"  class="absolute w-full left-0 right-0 top-[160px]  h-[600px] z-[30000] bg-white ">
                                <ul class="flex items-center justify-center gap-20 pt-3 border-b border-t border-t-slate-200 border-b-slate-200">
                                    <li v-for="(category, i) in parent.categories" :key="i">
                                        <div class="flex pb-3 items-center justify-center transition-all gap-2 duration-200 ease-in-out" @mouseover="showSubCategories(i)" :class="catIndex == i   ? 'border-b-2 opacity-100 font-bold  border-b-sky-600' : 'opacity-70'">
                                            <img :src="category.icon" width="20" height="20" alt="">
                                            {{category.name}}
                                            <div class="absolute top-20 right-28" v-if="catIndex == i">
                                                <div class="flex gap-4">
                                                    <div class="" v-for="sub in category.subCategories" :key="sub.id">
                                                        <div class=""  v-if="sub.category_id == category.id">
                                                            <NuxtLink :to="'/sub/' + sub.slug " class="flex w-[160px]">
                                                                 <span>{{ sub.name }}</span>
                                                                <Icon size="19" name="uil:arrow-left" />
                                                            </NuxtLink>
                                                        </div>
                                                        <div class="flex flex-wrap space-x-[40px] flex-col h-[400px] text-xs">
                                                            <div class="w-[150px] py-2 opacity-60 hover:opacity-100" v-for="child in sub.children" :key="child.id">
                                                                <NuxtLink :to="child.slug">
                                                                    <span >{{ child.name }}</span>
                                                                </NuxtLink>
                                                            </div>
                                                            <div class="flex flex-col space-y-2 pt-2">
                                                                <a href="#" class="text-red-500">
                                                                    <span>حراج استایل</span>
                                                                </a>
                                                                <a href="#" class="opacity-70 hover:opacity-100">
                                                                    <span >جدیدترین ها</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="w-[500px] border-r border-slate-400 mr-28">
                                                        <div class="flex flex-col mr-8">
                                                            <div>برترین برندهای {{ category.brand_name }}</div>
                                                            <div class="flex flex-wrap gap-4 mt-4">
                                                                <template v-for="brand in brandCategories.data" :key="brand.id">
                                                                    <NuxtLink :to="`/brand/${brand.slug}/${brand.category_slug}`" v-if="brand.category_id == category.id">
                                                                        <img :src="brand.image" width="200" alt="">
                                                                    </NuxtLink>
                                                                </template>
                                                            </div>
                                                            <NuxtLink to="/brand" class="flex gap-2 justify-end ml-20 mt-2 items-center">
                                                                <span> مشاهده تمام برندها</span>
                                                                <Icon size="19" name="uil:arrow-left" />
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div> 
                        </NuxtLink>
                    </li>
                </ul>
                <div class="text-lg "> | </div>
                <ul class="flex justify-center gap-8 items-center w-1/3">
                    <li><NuxtLink to="/sale-landing" class="text-red-500">حراج استایل</NuxtLink></li>
                    <li @mouseover="showBrandCard" @mouseleave="hideBrandCard">
                        <NuxtLink to="/brand" class="text-slate-800 hover:text-black hover:font-bold">برندها</NuxtLink>
                        <div v-if="showBrand"  class="absolute w-full left-0 right-0 top-[165px]  h-[600px] z-10 bg-white " @mouseleave="showBrand = false">
                            <ul class="flex items-center justify-center  ">
                                <li>
                                    <div class="mt-10">
                                        <div class="flex gap-12">
                                            <div class="flex flex-col">
                                                <div class="">
                                                     جدیدترین برندها
                                                </div>
                                                <div class="flex flex-col ">
                                                    <div class="w-full py-2 text-sm opacity-40 hover:opacity-100" v-for="brand in brands.data.newBrands">
                                                        <NuxtLink :to="`/brand/${brand.slug}`">
                                                            <span>{{ brand.name }}</span>
                                                        </NuxtLink>
                                                    </div>
                                                    <div>
                                                        <NuxtLink to="/brand" class="flex items-center">
                                                            <span>مشاهده همه برندها </span>
                                                            <Icon size="19" name="uil:arrow-left" />
                                                        </NuxtLink>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="w-[500px] border-r border-slate-400">
                                                <div class="flex flex-col mr-8">
                                                    <div>برترین طراحان ایرانی</div>
                                                    <div class="flex flex-wrap gap-2 mt-4">
                                                        <div v-for="brand in brands.data.iranianDesigners" :key="brand.id">
                                                            <NuxtLink :to="`/brand/${brand.slug}`">
                                                                <img :src="brand.slider_image" width="200" height="120" alt="">
                                                            </NuxtLink>
                                                        </div>
                                                    </div>
                                                    <NuxtLink to="/landings/designers" class="flex gap-2 justify-end ml-20 mt-2 items-center">
                                                        <span> مشاهده خانه طراحان ایرانی</span>
                                                        <Icon size="19" name="uil:arrow-left" />
                                                    </NuxtLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div> 
                    </li>
                    <li><NuxtLink to="/landings/watch" class="text-slate-800 active:text-black active:font-bold">خانه ساعت</NuxtLink></li>
                    <li><NuxtLink to="/landings/sustainable-fashion" class="text-slate-800 active:text-black active:font-bold">مد پایدار</NuxtLink></li>
                </ul>
            </div>
        </div>
        <div v-if="showSearch">
          <SearchBox @show-search="(val) => showSearch = val" />
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '~~/store/cart'

const store = useCartStore()
const showSearch  = ref(false)
const showCartBox  = ref(false)
const timeOut = ref(null)
const cartTimeOut = ref(null)
const categoryId = ref(null)
const showList = ref(false)
const showIndex = ref(1)
const catIndex = ref(0)
const showBrand = ref(false)
const {authUser} = useAuth()
const {public: {apiBase}} = useRuntimeConfig()

function removeItemFromCart(id, size) {
    store.removeItemFromCart(id, size)
}

const allItems = computed(() => store.allItems)
const countItems = computed(() => store.countItems)
const totalPrice = computed(() => store.totalPrice)


function stayIn() {
    clearTimeout(timeOut.value)
    showCartBox.value = true
}

function stayOut() {
    timeOut.value = setTimeout(() => {
        showCartBox.value = false
    }, 2000);
}

function showSearchCard() {
    showSearch.value = true
}

function showListCard(index) {
    clearTimeout(cartTimeOut.value)
    showIndex.value = index
    showList.value = true
    showBrand.value = false
}

function hideListCard() {
    cartTimeOut.value = setTimeout(() => {
        showList.value = false
        catIndex.value = 0
        categoryId.value = 1
    }, 100);
}

function showBrandCard() {
    clearTimeout(cartTimeOut.value)
    showBrand.value = true
}

function hideBrandCard() {
    cartTimeOut.value = setTimeout(() => {
        showBrand.value = false
    }, 100);
}

function showSubCategories(index ,id) {
    catIndex.value = index
    categoryId.value = id
}

const {data : parentCategories} = await useFetch(`${apiBase}/all-parent-categories`)
const {data: brands} = await useFetch(`${apiBase}/navbar-brands`)
const {data: allbrands} = await useFetch(`${apiBase}/landing/get-allbrands`)
const {data: brandCategories} = await useFetch(`${apiBase}/all-brand-categories`)
</script>