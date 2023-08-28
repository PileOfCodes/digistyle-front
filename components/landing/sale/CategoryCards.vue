<template>
    <div class="flex items-center px-12 pt-2 justify-center ">
        <tabs nav-class="flex items-center justify-center text-xl gap-12 my-4 text-black" 
        nav-item-active-class="text-white bg-[#dc3165] py-4 px-6 rounded-full " 
        :options="{ useUrlFragment: false, disableScrollBehavior: true }">
            <tab :name="category.name" v-for="category in categories.data" :key="category.id">
                <div class="flex items-center justify-center gap-4">
                        <div v-for="cat in category.singleCategories" :key="cat.id">
                        <NuxtLink :to="`/category/${cat.slug}`" class="rounded-md border border-slate-200 p-3 flex flex-col hover:text-[#dc3165]  hover:border-[#dc3165]">
                            <div class="w-52">
                                <img :src="cat.primary_image" alt="">
                            </div>
                            <div class="my-2 text-lg font-black">{{ cat.name }}</div>
                            <div class="my-2 text-sm ">{{ cat.product_count }} کالا</div>
                        </NuxtLink>
                    </div>
                </div>
            </tab>
        </tabs>
    </div>
</template>

<script setup>
import {Tabs, Tab} from 'vue3-tabs-component';
const {public: {apiBase}} = useRuntimeConfig()

const {data: categories} = await useFetch(`${apiBase}/discounted/get-categories`)
console.log(categories.value);
</script>