<template>
        <swiper
            :style="{
                '--swiper-theme-color': '#000 !important',
                '--swiper-navigation-size': '14px !important'
            }"
            :cssMode="true"
            :navigation="true"
            :slides-per-view="4"
            :space-between="100"
            :effect="'creative'"
            :autoplay="{
                delay: 9000,
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
        <swiper-slide v-for="product in otherDesigns">
            <img :src="product.image" alt="">
        </swiper-slide>     
    </swiper>
</template>

<script setup>

const prosp = defineProps(['otherDesigns'])
</script>

<style scoped>
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

:deep(.swiper-slide) {
    margin: 0px 10px !important;
    width: 80px !important;
    height: 100px !important;
    border: 1px solid black;
}

:deep(.swiper-button-next) {
    background-color: unset !important;
    padding: 0 !important;
    left: 0px !important;
}

:deep(.swiper-button-prev) {
    background-color: unset !important;
    padding: 0 !important;
    right: 0 !important;
}
</style>