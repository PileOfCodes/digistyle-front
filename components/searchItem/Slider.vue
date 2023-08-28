<template>
    <swiper
    :style="{
        '--swiper-navigation-size': '20px'
    }"
    :cssMode="true"
    :navigation="true"
    :slides-per-view="3"
    :slides-per-group="3"
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
    <swiper-slide v-for="product in props.products" :key="product.id">
        <div class=" w-full">
            <NuxtLink :to="`/product/${product.slug}`" class="flex items-center rounded-sm gap-1 p-2 bg-white">
                <img :src="product.primary_image" alt="" width="32" height="20">
                <span class="w-40 text-sm truncate">{{ product.title }}</span>
                <icon size="21" name="uil:angle-left" />
            </NuxtLink>
        </div>
    </swiper-slide>  
    </swiper>
</template>

<script setup>
const props = defineProps(['products'])
</script>

<style scoped>
:deep(.swiper-button-prev.swiper-button-disabled) {
    opacity: 0 !important;
    cursor: auto !important;
    pointer-events: none !important;
}

:deep(.swiper-button-next.swiper-button-disabled) {
    opacity: 0 !important;
    cursor: auto !important;
    pointer-events: none !important;
}

:deep(.swiper-button-next) {
    background-color: unset !important;
    color: black;
    font-weight: bold;
}

:deep(.swiper-button-prev) {
    background-color: unset !important;
    font-weight: bold;
    color: black;
}


</style>