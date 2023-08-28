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
    <swiper-slide v-for="product in props.products" :key="product.id">
      <div class="bg-white w-[300px] h-[500px] shadow-lg px-3 py-4 rounded-sm group">
          <div class="flex flex-col">
              <div class="relative bg-white shadow-sm h-[340px] my-2">
                <div v-if="product.brand">
                  <NuxtLink :to="`/brand/${product.brand.slug}`" target="_blank">
                     <span class="absolute right-0 top-0 bg-white p-2">{{ product.brand ? product.brand.name : null }}</span>
                 </NuxtLink>
                </div>
                  <NuxtLink :to="`/product/${product.slug}`" target="_blank">
                      <img :src="product.primary_image" width="300" height="200" alt="">
                  </NuxtLink>
                  <div v-if="product.sellers[0].discount" class="absolute bottom-0 left-0 w-14 p-3 bg-gray-900 text-white group-hover:transition-all group-hover:duration-300 group-hover:bottom-10 group-hover:ease-in-out duration-300">{{ product.sellers[0].discount.percent }}%</div>
                  <div v-if="product.property == 'size' && product.sizes.length == 1" class="absolute bottom-0 right-0 shadow-md mb-[3px] w-20 p-3 bg-white text-gray-900 group-hover:transition-all group-hover:duration-300 group-hover:bottom-12 group-hover:ease-in-out duration-300"> تک سایز </div>
                  <div v-if="product.property == 'size'">
                    <NuxtLink :to="`/product/${product.slug}?size=${size.size}`" 
                    v-for="size in product.sizes"
                    class="relative -bottom-8 -z-10 w-[280px] gap-6 bg-white p-2 group-hover:transition-all group-hover:duration-300 group-hover:bottom-[-30px] group-hover:z-10 group-hover:ease-in-out duration-300" target="_blank">
                        {{ size.size }}
                  </NuxtLink>
                  </div>
              </div>
              <div class="flex justify-between items-center mt-2 mb-8">
                <div class="">{{ product.title }}</div>
              </div>
              <div v-if="product.sellers[0].discount" class="flex justify-end gap-16 items-center">
                    <div class="flex gap-2 items-center absolute bottom-4">
                        <del class="text-slate-500">{{ numberFormat(product.sellers[0].price) }}</del>
                        <span v-if="product.sellers[0].discount">{{ numberFormat(roundIt(countDiscount(product.sellers[0].price, product.sellers[0].discount.percent))) }} تومان</span>
                    </div>
              </div>
              <div v-else class="flex justify-end gap-16 items-center">
                <span class="absolute bottom-4">{{ numberFormat(product.sellers[0].price) }} تومان</span>
              </div>
          </div>
      </div>
    </swiper-slide>  
    </swiper>
</template>

<script setup>
const props = defineProps(['products'])
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