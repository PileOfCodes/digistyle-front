<template>
    <swiper
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
      <swiper-slide v-for="watch in props.watches" :key="watch.id">
        <LazyProductHugeCard  :product="watch" />
      </swiper-slide>  

  </swiper>
</template>

<script setup>

const props = defineProps(['watches'])

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
}

:deep(.swiper-button-prev) {
  background-color: #fff !important;
  color: black;
}


</style>