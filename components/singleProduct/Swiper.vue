<template>
    <swiper
    :style="{
        '--swiper-theme-color': '#000'
    }"
        :cssMode="true"
        :navigation="true"
        :slides-per-view="1"
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
        <swiper-slide v-for="image in singleProduct.images">
            <img :src="image.image" @click="emit('showBigCard', true)" class="cursor-pointer" alt="">
        </swiper-slide>  
    </swiper>
</template>

<script setup>

const emit = defineEmits(['showBigCard'])
const props = defineProps(['singleProduct'])

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

:deep(.swiper-button-next) {
    background-color: unset !important;
}

:deep(.swiper-button-prev) {
    background-color: unset !important;
}

</style>