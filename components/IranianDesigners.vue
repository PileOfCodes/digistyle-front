<template>
    <div class="py-6">
        <div class="flex justify-between items-center px-20 py-4">
            <div class="text-2xl"> طراحان ایرانی</div>
            <NuxtLink to="/landings/designers" class="flex justify-center gap-2" target="_blank">
                <div>مشاهده خانه طراحان ایرانی</div>
                <div class="favoriteBrand text-center"></div>
            </NuxtLink>
        </div>
    </div>
    <div class="px-20 text-gray-400 py-4">
        <Tabs nav-class="text-lg flex flex-col w-full space-y-6" wrapper-class="flex gap-32"
        nav-item-active-class="text-2xl text-black"
        :options="{ useUrlFragment: false, disableScrollBehavior: true }">
            <Tab :name=" brand.name " v-for="brand in data.data.brands" :key="brand.id">
                <div class="grid grid-cols-3 gap-6">
                    <NuxtLink :to="`/brand/${brand.slug}`" class="col-span-2 shadow-xl" target="_blank">
                        <img :src="brand.category_image" >
                    </NuxtLink>
                    <NuxtLink  :to="`/product/${product.slug}`" class="shadow-xl" v-for="product in brand.products" :key="product.id" target="_blank">
                        <img :src="product.primary_image" >
                    </NuxtLink>
                </div>
            </Tab>
        </Tabs>
    </div>
</template>

<script setup>
import {Tabs, Tab} from 'vue3-tabs-component';

const {public : {apiBase}} = useRuntimeConfig()

const data = await $fetch(`${apiBase}/landing/iranian-designers`)

</script>