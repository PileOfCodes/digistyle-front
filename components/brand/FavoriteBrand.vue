<template>
    <div class="py-6">
        <div class="flex justify-between items-center px-20 py-4">
            <div class="text-2xl">محبوب ترین برندها</div>
            <div class="flex justify-center items-center gap-2">
                <div>
                    <NuxtLink to="/brand/">مشاهده همه برندها</NuxtLink>
                </div>
                <div class="favoriteBrand text-center"></div>
            </div>
        </div>
    </div>
    <div class="relative">
        <div class="flex flex-col w-full ">
            <div class="bg-[#E9E9E9] py-24 px-32 "></div>
            <div class="bg-white h-[400px]"></div> 
        </div>
        <div class="absolute top-12 right-32">
            <div class="flex gap-20">
                <div class="flex flex-col items-center space-y-2">
                    <img :src="firstBrand.brand_image" width="70" alt="">
                    <div class="flex items-center gap-x-2">
                        <NuxtLink :to="`/brand/${firstBrand.slug}`">مشاهده همه محصولات</NuxtLink>
                        <div class="favoriteBrand text-center"></div>
                    </div>
                </div>
                <div class="flex gap-x-6">
                    <div v-for="product in firstBrand.products" :key="product.id">
                        <ProductCard3 :product="product" />
                    </div>
                </div> 
            </div>
        </div>
    </div>
    <div class="relative">
        <div class="flex flex-col w-full ">
            <div class="bg-[#E9E9E9] py-24 px-32 "></div>
            <div class="bg-white h-[400px]"></div> 
        </div>
        <div class="absolute top-12 right-32">
            <div class="flex gap-20">
                <div class="flex gap-x-6">
                    <div v-for="product in secondBrand.products" :key="product.id">
                        <ProductCard3 :product="product" />
                    </div>
                </div> 
                <div class="flex flex-col items-center space-y-2">
                    <img :src="secondBrand.brand_image" width="70" alt="">
                    <div class="flex items-center gap-x-2">
                        <NuxtLink :to="`/brand/${secondBrand.slug}`">مشاهده همه محصولات</NuxtLink>
                        <div class="favoriteBrand text-center"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const {public: {apiBase}} = useRuntimeConfig()
const {data: details} = await useFetch(`${apiBase}/landing/fbrands`)

const firstBrand = computed(() => details.value.data[0])
const secondBrand = computed(() => details.value.data[1])
</script>