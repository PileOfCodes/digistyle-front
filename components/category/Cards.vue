<template>
    <div class="text-2xl font-black ">دسته بندی ها</div>
    <div class="flex flex-wrap gap-4 justify-center items-center my-2">
        <NuxtLink :to="`/category/${category.slug}`" 
        class="rounded-md border border-slate-200 p-3 flex flex-col hover:border-black" 
        v-for="category in categories.data" :key="category.id">
            <div class="w-52">
                <img :src="category.primary_image" alt="">
            </div>
            <div class="my-2 text-xl font-black">{{ category.name }}</div>
        </NuxtLink>
    </div>
</template>

<script setup>
const route = useRoute()
const {public: {apiBase}} = useRuntimeConfig()

const {data: categories} = await useFetch(`${apiBase}/category-cards`, {
    query: {'slug': route.params.slug}
})


</script>