<template>
    <LazySlider />
    <div class="my-6">
        <LazyShegeft />
    </div>
    <LazyWeekStyle />
    <div class="my-20">
        <LazyCategoryList />
    </div>
    <LazyMostViewed />
    <LazyProductBanner />
    <LazyMostSells />
    <LazyBrandFavoriteBrand />
    <LazyBeautyAndHealth />
    <LazyNewest />
    <LazyIranianDesigners />
    <LazyGiftBanner />
    <LazyCategories />
</template>

<script setup>
definePageMeta({
    layout: 'landing',
    key: route => route.fullPath
})
</script>