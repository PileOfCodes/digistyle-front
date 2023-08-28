<template>
    <div class="my-10 ">
    <swiper
    :cssMode="true"
    :navigation="true"
    :slides-per-view="3"
    :slides-per-group="3"
    :space-between="400"
    :effect="'creative'"
        :autoplay="{
        delay: 8000,
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
    <swiper-slide>
      <div class="flex flex-col ">
        <div class="w-24">
            <img src="/woman-tshirt.jpg" alt="">
        </div>
        <div class="text-xs w-28 text-center opacity-80 hover:opacity-100">لباس مردانه </div>
      </div>
    </swiper-slide>  
    <swiper-slide>
      <div class="flex flex-col ">
        <div class="w-24">
            <img src="/woman-tshirt.jpg" alt="">
        </div>
        <div class="text-xs w-28 text-center opacity-80 hover:opacity-100">لباس مردانه </div>
      </div>
    </swiper-slide>  
    <swiper-slide>
      <div class="flex flex-col ">
        <div class="w-24">
            <img src="/woman-tshirt.jpg" alt="">
        </div>
        <div class="text-xs w-28 text-center opacity-80 hover:opacity-100">لباس مردانه </div>
      </div>
    </swiper-slide>  
    <swiper-slide>
      <div class="flex flex-col ">
        <div class="w-24">
            <img src="/woman-tshirt.jpg" alt="">
        </div>
        <div class="text-xs w-28 text-center opacity-80 hover:opacity-100">لباس مردانه </div>
      </div>
    </swiper-slide>  
    <swiper-slide>
      <div class="flex flex-col ">
        <div class="w-24">
            <img src="/woman-tshirt.jpg" alt="">
        </div>
        <div class="text-xs w-28 text-center opacity-80 hover:opacity-100">لباس مردانه </div>
      </div>
    </swiper-slide>  
    <swiper-slide>
      <div class="flex flex-col ">
        <div class="w-24">
            <img src="/woman-tshirt.jpg" alt="">
        </div>
        <div class="text-xs w-28 text-center opacity-80 hover:opacity-100">لباس مردانه </div>
      </div>
    </swiper-slide>  
    <swiper-slide>
      <div class="flex flex-col ">
        <div class="w-24">
            <img src="/woman-tshirt.jpg" alt="">
        </div>
        <div class="text-xs w-28 text-center opacity-80 hover:opacity-100">لباس مردانه </div>
      </div>
    </swiper-slide>  
    <swiper-slide>
      <div class="flex flex-col ">
        <div class="w-24">
            <img src="/woman-tshirt.jpg" alt="">
        </div>
        <div class="text-xs w-28 text-center opacity-80 hover:opacity-100">لباس مردانه </div>
      </div>
    </swiper-slide>  
    <!-- <swiper-slide v-for="child in children.data" :key="child.id">
      <div class="flex flex-col justify-center items-center">
        <div class="w-24">
            <img src="/woman-tshirt.jpg" alt="">
        </div>
        <div class="text-xs w-28 text-center opacity-80 hover:opacity-100">{{ child.name }} </div>
      </div>
    </swiper-slide>   -->
    </swiper>
    </div>
</template>


<!-- <script setup>

const route = useRoute()
const {public: {apiBase}} = useRuntimeConfig()
const {data: children} = await useFetch(`${apiBase}/get-sliderChildren`, {
  query: {'slug' : route.params.slug }
})

</script> -->



<style scoped>


</style>