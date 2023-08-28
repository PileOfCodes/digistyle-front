<template>
    <swiper
    :style="{
        '--swiper-theme-color': '#000',
        '--swiper-navigation-size': '20px'
    }"
    :cssMode="true"
    :navigation="true"
    :slides-per-view="2"
    :slides-per-group="1"
    :space-between="20"
    :effect="'creative'"
    :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
    }"
    :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
    }"
    :mousewheel="true"
    :keyboard="true"
    :modules="[SwiperNavigation]"
    >
        <swiper-slide  v-for="product in props.products" :key="product.id">
            <LazyProductCard3 :product="product" />
        </swiper-slide>  
    </swiper>
</template>

<script setup>
const props = defineProps(['products'])
</script>

<style>

:deep(.swiper-slide) {
    margin: unset !important;
}
:deep(.swiper-button-prev.swiper-button-disabled) {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
}

:deep(.swiper-button-next.swiper-button-disabled) {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
}

:deep(.swiper-button-next) {
    background-color: white !important;
    padding: 30px !important;
    left: 40px !important;
}

:deep(.swiper-button-prev) {
    background-color: white !important;
    padding: 30px !important;
    right: 0px !important;
}

</style>