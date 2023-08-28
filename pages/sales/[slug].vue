<template>
    <div class="px-10">
        <LazySalesBreadCrumbs />
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-6">
                <div class="text-2xl">لباس مردانه در حراج استایل</div>
                <div class="">
                    <Icon size="21" class="text-slate-500" name="uil:search" />
                    <input type="text" class="text-sm  mx-3 focus:border-none focus:outline-none" autofocus placeholder="جستجو در محصولات زیر ...">
                </div>
            </div>
            <div class="text-slate-500 text-md">8810 کالا</div>
        </div>
        <LazySalesChildrenSwiper />
        <div class="my-12 px-8">
            <div class="flex justify-between">
                <div class="flex gap-8">
                    <LazyFilterBrandFilter />
                    <LazyFilterCategoryFilter />
                    <LazyFilterSizeFilter />
                    <LazyFilterColorsFilter />
                    <LazyFilterPriceFilter />
                    <!-- <LazyFilterDiscountFilter  /> -->
                    <LazyFilterSellerFilter  />
                </div>
                <LazyFilterOne  />
            </div>
        </div>
        <div class="flex flex-wrap gap-x-4 mb-20">
            <LazyProductCard3 />
            <LazyProductCard3 />
            <LazyProductCard3 />
            <LazyProductCard3 />
            <LazyProductCard3 />
        </div>
    </div>
</template>

<script setup>

const route = useRoute()
definePageMeta({
    key: route => route.fullPath,
    layout: 'simple'
})

// const {public: {apiBase}} = useRuntimeConfig()

// const {data: subCategory} = await useFetch(`${apiBase}/getSubCategory`, {
//     query: {'slug' : route.params.slug}
// })
</script>