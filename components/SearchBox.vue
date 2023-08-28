<template>
    <div id="searchBox" class="absolute top-0 animatedSearchBox w-full z-30 shadow-xl  opacity-[0.98] bg-[#F2F3F4]">
        <div class="mx-52 mt-12">
            <Icon  size="32" @click="() => {emit('showSearch', false)}" class="float-left text-black cursor-pointer" name="ci:close-big" />
            <div class="flex flex-col space-y-4 relative top-20">
                <div class="flex items-center">
                    <input v-model="searchItem" type="text" autofocus class="mr-10 w-full border-none bg-transparent placeholder-black text-lg outline-none" placeholder="ُ جستجو کنید ...">
                    <Icon  size="32" class="absolute right-0 text-gray-500" name="uil:search" />
                </div>
                <hr class="bg-slate-500 h-[2px]">
            </div>
            <div v-if="items" class="mt-32">
                <div class="flex ">
                    <div v-if="items.categories">
                        <div v-for="category in items.categories" :key="category.id">
                            <NuxtLink :to="category.slug" class="w-[300px] flex gap-1">
                                <Icon  size="21" class=" text-gray-500" name="uil:search" />
                                <div class="text-gray-500"><span class="text-black">{{ category.bread }}</span></div>
                            </NuxtLink>
                        </div>
                    </div>
                    <div>
                        <div v-if="items.brands" class="flex flex-col ">
                            <div class="flex gap-1">
                                <Icon size="17" class=" text-gray-500" name="uil:tag" />
                                <span>برندها</span>
                            </div>
                            <div class="flex gap-4">
                                <div v-for="brand in items.brands" :key="brand.id">
                                    <NuxtLink :to="`/brand/${brand.slug}`" class="flex gap-1 bg-white px-4 py-2">
                                        <img :src="brand.brand_image" width="20" height="20" alt="">
                                        <span>{{ brand.name }}</span>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <div v-if="items.products" class="mt-20 w-[600px]">
                            <div class="flex gap-1 mb-2">
                                <Icon size="17" class=" text-gray-500" name="uil:heart-medical" />
                                <span>محصولات</span>
                            </div>
                            <LazySearchItemSlider  :products="items.products"  />
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="mt-32">
                <div class="flex items-center mt-4">
                    <Icon name="uil:fire" />
                    <div class="mr-2">بیشترین جستجوهای اخیر</div>
                </div>
                <div class="flex flex-wrap mx-12 gap-2">
                    <div class="bg-white rounded-full  mt-4 mb-1 px-4 py-2"> <span>#</span> آویز ساعت طلا زنانه</div>
                    <div class="bg-white rounded-full  mt-4 mb-1 px-4 py-2"> <span>#</span> آویز ساعت طلا زنانه</div>
                    <div class="bg-white rounded-full  mt-4 mb-1 px-4 py-2"> <span>#</span> آویز ساعت طلا زنانه</div>
                    <div class="bg-white rounded-full  mt-4 mb-1 px-4 py-2"> <span>#</span> آویز ساعت طلا زنانه</div>
                    <div class="bg-white rounded-full  mt-4 mb-1 px-4 py-2"> <span>#</span> آویز ساعت طلا زنانه</div>
                    <div class="bg-white rounded-full  mt-4 mb-1 px-4 py-2"> <span>#</span> آویز ساعت طلا زنانه</div>
                    <div class="bg-white rounded-full  mt-4 mb-1 px-4 py-2"> <span>#</span> آویز ساعت طلا زنانه</div>
                    <div class="bg-white rounded-full  mt-4 mb-1 px-4 py-2"> <span>#</span> آویز ساعت طلا زنانه</div>
                    <div class="bg-white rounded-full  mt-4 mb-1 px-4 py-2"> <span>#</span> آویز ساعت طلا زنانه</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { debounce } from 'lodash';

const searchItem = ref(null)
const items = ref([])
const emit = defineEmits(['showSearch'])
const {public: {apiBase}} = useRuntimeConfig()

watch(searchItem, debounce(async() => {
    handleSearchItem(searchItem.value)
},500), {immediate: true})

async function handleSearchItem(searchItem) {
    let data = await $fetch(`${apiBase}/landing/search`, {
        query: {q: searchItem}
    })
    items.value = data.data
}
</script>

<style>
.animatedSearchBox {
    animation-name: animatedBox;
    animation-duration: .5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
}
@keyframes animatedBox {
    from { height: 0}
    to {height: 500px}
}
</style>