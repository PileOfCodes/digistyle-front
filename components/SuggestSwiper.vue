<template>
  <swiper
    :style="{
        '--swiper-theme-color': '#000',
    }"
    :cssMode="true"
    :navigation="true"
    :slides-per-view="3"
    :slides-per-group="3"
    :space-between="50"
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
    <swiper-slide v-for="product in data.data.products" :key="product.id">
      <div class="bg-white w-[300px] h-[500px] shadow-lg px-3 py-4 rounded-sm group">
          <div class=" flex flex-col">
              <div class="flex justify-between items-center">
                  <div class="text-[#F04D7D] font-bold">پیشنهاد شگفت آویز</div>
                  <ClientOnly>
                      <div style="direction: ltr;" class="text-sm text-[#F04D7D]">
                          <vue-countdown :time="product.sellers[0].discount.expired_at" :transform="transformSlotProps" v-slot="{hours, minutes, seconds }">
                          {{ hours }} : {{ minutes }} : {{ seconds }}
                          </vue-countdown>
                      </div>
                  </ClientOnly>
              </div>
              <div class="relative bg-white shadow-sm h-[340px] my-2">
                <div v-if="product.brand">
                  <NuxtLink :to="`/brand/${product.brand.slug}`" target="_blank">
                     <span class="absolute right-0 top-0 bg-white p-2">{{ product.brand ? product.brand.name : null }}</span>
                 </NuxtLink>
                </div>
                  <NuxtLink :to="`/product/${product.slug}`" target="_blank">
                      <img :src="product.primary_image" width="300" height="200" alt="">
                  </NuxtLink>
                  <div class="absolute bottom-0 left-0 w-14 p-3 bg-gray-900 text-white group-hover:transition-all group-hover:duration-300 group-hover:bottom-10 group-hover:ease-in-out duration-300">{{ product.sellers[0].discount.percent }}%</div>
                  <div v-if="product.property == 'size'">
                    <NuxtLink :to="`/product/${product.slug}?size=${size.size}`" 
                    v-for="size in product.sizes"
                    class="relative -bottom-8 -z-10 w-[280px] gap-6 bg-white p-2 group-hover:transition-all group-hover:duration-300 group-hover:bottom-[-30px] group-hover:z-10 group-hover:ease-in-out duration-300" target="_blank">
                        {{ size.size }}
                    </NuxtLink>
                  </div>
              </div>
              <div class="flex justify-between items-center text-sm mt-2 mb-8">
                <div class="">{{ product.title }}</div>
              </div>
              <div class="flex gap-x-10 items-center absolute bottom-4 left-10">
                    <div class="flex gap-2 items-center">
                    <del class="text-slate-500">{{ numberFormat(product.sellers[0].price) }}</del>
                    <span>{{ numberFormat(roundIt(countDiscount(product.sellers[0].price, product.sellers[0].discount.percent))) }} تومان</span>
                    </div>
              </div>
          </div>
      </div>
    </swiper-slide>  
  </swiper>
</template>

<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';
const {public: {apiBase}} = useRuntimeConfig()
function transformSlotProps(props) {
      const formattedProps = {};

      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });
      return formattedProps;
}

const data = await $fetch(`${apiBase}/shegeft`);

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
    background-color: white !important;
    padding: 30px !important;
    left: 0px !important;
}

:deep(.swiper-button-prev) {
    background-color: white !important;
    padding: 30px !important;
    right: 0px !important;
}

</style>