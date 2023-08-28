<template>
    <swiper
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
      <swiper-slide v-for="watch in watches.data">
        <LazyProductCard3 :product="watch" />
      </swiper-slide>  
      <swiper-slide v-for="watch in watches.data">
        <LazyProductCard3 :product="watch" />
      </swiper-slide>  
      <swiper-slide v-for="watch in watches.data">
        <LazyProductCard3 :product="watch" />
      </swiper-slide>  
      <swiper-slide v-for="watch in watches.data">
        <LazyProductCard3 :product="watch" />
      </swiper-slide>  
  </swiper>
</template>

<script setup>
const {public: {apiBase}} = useRuntimeConfig()
const {data: watches} = await useFetch(`${apiBase}/watch/get-discounted-watches`)

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
  background-color: #fff !important;
  color: black;
  padding: 30px !important;
  left: 0 !important;
}

:deep(.swiper-button-prev) {
  background-color: #fff !important;
  color: black;
  padding: 30px !important;
  right: 0 !important;
}


</style>