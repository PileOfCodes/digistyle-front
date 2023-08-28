<template>
    <div class="flex flex-col items-center space-y-12">
        <div class="flex flex-wrap items-center justify-center gap-4">
            <NuxtLink :to="`/brand/${brand.slug}`" v-for="brand in brands.data">
                <img :src="brand.brand_image" width="120" alt="">
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const {public: {apiBase}} = useRuntimeConfig()

const {data: brands} = await useFetch(`${apiBase}/watches/get-brands`)

</script>

