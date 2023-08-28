<template>
      <swiper
        :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
        }"
        :spaceBetween="10"
        :direction="'vertical'"
        :scrollbar="{
            hide: false
        }"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="[FreeMode, Scrollbar, Thumbs]"
        class="mySwiper2"
        >
        <swiper-slide v-for="image in singleProduct.images">
            <div class="w-2/4">
                <img :src="image.image" class="" alt="product image">
            </div>
        </swiper-slide>
        </swiper>
        <swiper
            @swiper="setThumbsSwiper"
            :direction="'vertical'"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            :modules="[FreeMode, Scrollbar, Thumbs]"
            class="mySwiper"
        >
        <swiper-slide v-for="image in singleProduct.images">
            <img :src="image.image" alt="product image">
        </swiper-slide>
    </swiper>
</template>


<script setup>

import { FreeMode, Scrollbar, Thumbs } from 'swiper';

const thumbsSwiper = ref(false);
const props = defineProps(['singleProduct'])

const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
}
</script>


<style scoped>

.swiper {
  width: 100%;
  height: 100%;
  display: flex;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.mySwiper .swiper-slide img {
  width: 120px;
  height: 120px;
}
.mySwiper2 {
  height: 100%;
  width: 80%;
}

.mySwiper {
    width: 20%;
    height: 100%;
    box-sizing: border-box;
    margin-top: 40px;
}

.mySwiper .swiper-slide {
  width: 100%;
  height: 100%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
}
</style>