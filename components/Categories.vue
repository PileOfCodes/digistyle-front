<template>
    <div class="relative px-32 py-20">
        <div class="flex justify-center items-center gap-48">
            <div class="flex flex-col" v-for="category in data.data" :key="category.id">
                <NuxtLink :to="`/shop/${category.slug}`" class="text-xl font-bold mb-20" target="_blank">{{ category.name }}</NuxtLink>
                <div class="absolute top-[110px]">
                    <div class="flex flex-col mt-4" v-for="cat in category.singleCategories" :key="cat.id">
                        <NuxtLink :to="`/category/${cat.slug}`" target="_blank">{{ cat.name }}</NuxtLink >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const {public: {apiBase}} = useRuntimeConfig()
const data = await $fetch(`${apiBase}/landing/parentCategories`)
</script>