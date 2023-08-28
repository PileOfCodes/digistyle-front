<template>
    <swiper
        :spaceBetween="30"
        :centeredSlides="true"
        :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        }"
        :pagination="{
        clickable: true,
        }"
        :navigation="true"
        :modules="[SwiperNavigation, SwiperAutoplay]"
        >
        <swiper-slide v-for="slider in sliders.data" :key="slider.id">
            <NuxtLink :to="`/collection/${slider.collection.slug}`">
                <img :src="slider.image" alt="">
            </NuxtLink>
        </swiper-slide>

    </swiper>
</template>

<script setup>
const {public: {apiBase}} = useRuntimeConfig()
const {data: sliders} = await useFetch(`${apiBase}/watch/brand-sliders`)

</script>

<style scoped>

:deep(.swiper-button-prev)  {
    color: var(--swiper-navigation-color, #fff);
    background-color: transparent !important;
    padding: 0  !important;
    right: 10px !important;
}

:deep(.swiper-button-next) {
    color: var(--swiper-navigation-color, #fff);
    background-color: transparent !important;
    padding: 0  !important;
    left: 10px !important;
}

</style>