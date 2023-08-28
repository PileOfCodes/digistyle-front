<template>
    <div class="my-10 ">
    <swiper
    :style="{
        '--swiper-theme-color': '#000',
        '--swiper-navigation-size': '20px '
    }"
    :cssMode="true"
    :navigation="true"
    :slides-per-view="5"
    :slides-per-group="3"
    :space-between="50"
    :effect="'creative'"
        :autoplay="{
        delay: 10000,
        disableOnInteraction: true,
        }"
        :creative-effect="{
        prev: {
            shadow: false,
            translate: ['0%', 0, -1],
        },
        next: {
            translate: ['100%', 0, 0],
        },
    }"
    :mousewheel="true"
    :keyboard="true"
    :modules="[SwiperNavigation]"
  >
    <swiper-slide v-for="child in children.data" :key="child.id">
      <div class="flex flex-col justify-center items-center">
        <div class="w-24">
            <img src="/woman-tshirt.jpg" alt="">
        </div>
        <div class="text-xs w-28 text-center opacity-80 hover:opacity-100"> {{ child.bread }} </div>
      </div>
    </swiper-slide>  
  </swiper>
   </div>
</template>


<script setup>

const route = useRoute()
const {public: {apiBase}} = useRuntimeConfig()
const {data: children} = await useFetch(`${apiBase}/brand/single-brand/brandCategories`, {
  query: {'slug' : route.params.slug }
})

</script>


<style scoped>

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
    /* padding: 10px !important; */
    left: 0px !important;
}

:deep(.swiper-button-prev) {
    /* padding: 10px !important; */
    right: 0px !important;
}

</style>