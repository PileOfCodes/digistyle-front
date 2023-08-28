<template>
    <div class="flex items-center p-12 justify-center bg-[#f5f5f5]">
        <tabs nav-class="flex items-center justify-center text-3xl gap-12 text-gray-500" 
        nav-item-active-class="border-b-4 text-black border-b-black" 
        :options="{ useUrlFragment: false, disableScrollBehavior: true }">
        <hr class="w-full h-[3px] mb-12 bg-white">
            <tab :name="category.name" v-for="category in categories">
                <div v-for="(single, index) in category.singleCategories">
                    <NuxtLink :to="`/category/${single.slug}`"  class="group" v-if="index == 0" target="_blank">
                        <div class="relative w-full overflow-hidden">
                            <div class="bg-[#f5f5f5] text-gray-500 absolute right-0 bottom-0 text-xl px-6 py-3 z-10 group-hover:transition-all group-hover:duration-700 duration-700 group-hover:ease-in-out group-hover:text-black">{{ single.name }}</div>
                            <img :src="single.image" class="group-hover:scale-[102%] hover:transition-all hover:duration-700 hover:ease-in-out duration-700" alt="">
                        </div>
                    </NuxtLink>
                </div>
                <div class="flex gap-4 space-y-4">
                    <div v-for="(single, index) in category.singleCategories">
                        <NuxtLink :to="`/category/${single.slug}`"  class="group" v-if="index != 0" target="_blank">
                            <div class="relative w-full overflow-hidden">
                                <div class="bg-[#f5f5f5] text-gray-500 absolute right-0 bottom-0 text-xl px-6 py-3 z-10 group-hover:transition-all group-hover:duration-700 duration-700 group-hover:text-black">{{ single.name }}</div>
                                <img :src="single.image" class="hover:scale-[102%] hover:transition-all hover:duration-700 hover:ease-in-out duration-700" alt="">
                            </div>
                        </NuxtLink>
                    </div>
                </div>
            </tab>
        </tabs>
    </div>
</template>

<script setup>
import {Tabs, Tab} from 'vue3-tabs-component';
const {public : {apiBase}} = useRuntimeConfig()

const {data: categories} = await $fetch(`${apiBase}/landing/parentCategories`)

</script>