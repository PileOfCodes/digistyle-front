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
      <swiper-slide  v-for="product in watches.data" :key="product.id">
        <div class="p-4 rounded-sm bg-white shadow-lg">
            <div class="flex flex-col">
                <div class="flex justify-between ">
                <div class="text-[#F04D7D] font-bold">پیشنهاد شگفت آویز</div>
                    <ClientOnly>
                      <div style="direction: ltr;" class="text-sm text-[#F04D7D]">
                          <vue-countdown :time="product.sellers[0].discount.expired_at" :transform="transformSlotProps" v-slot="{hours, minutes, seconds }">
                          {{ hours }} : {{ minutes }} : {{ seconds }}
                          </vue-countdown>
                      </div>
                    </ClientOnly>
                </div>
                <div class="flex items-center justify-center relative h-[340px] my-2">
                    <NuxtLink :to="`/brand/${product.brand.slug}`">
                        <span class="absolute right-0 top-0 bg-white p-2">{{ product.brand.name }}</span>
                    </NuxtLink>
                    <NuxtLink :to="`/product/${product.slug}`" class="flex items-center justify-center">
                        <img :src="product.primary_image" class="w-[300px]" alt="">
                    </NuxtLink>
                    <div class="absolute bottom-0 left-0  w-14 p-3 bg-gray-900 text-white group-hover:transition-all group-hover:duration-500 group-hover:bottom-10 group-hover:ease-in-out duration-500">{{ product.sellers[0].discount.percent }}%</div>
                </div>
                <div class="flex justify-between items-center  py-2">
                    <div class=""> {{ product.title }} </div>
                </div>
                <div class="flex justify-end  gap-8 py-4">
                    <div class="flex gap-2 items-center">
                    <del class="text-slate-500">{{ numberFormat(product.sellers[0].price) }}</del>
                    <span>{{ numberFormat(roundIt(countDiscount(product.sellers[0].price, product.sellers[0].discount.percent))) }} تومان</span>
                    </div>
                </div>
            </div>
        </div>
      </swiper-slide>   
      <swiper-slide  v-for="product in watches.data" :key="product.id">
        <div class="p-4 rounded-sm bg-white shadow-lg">
            <div class="flex flex-col">
                <div class="flex justify-between ">
                <div class="text-[#F04D7D] font-bold">پیشنهاد شگفت آویز</div>
                    <ClientOnly>
                      <div style="direction: ltr;" class="text-sm text-[#F04D7D]">
                          <vue-countdown :time="product.sellers[0].discount.expired_at" :transform="transformSlotProps" v-slot="{hours, minutes, seconds }">
                          {{ hours }} : {{ minutes }} : {{ seconds }}
                          </vue-countdown>
                      </div>
                    </ClientOnly>
                </div>
                <div class="flex items-center justify-center relative h-[340px] my-2">
                    <NuxtLink :to="`/brand/${product.brand.slug}`">
                        <span class="absolute right-0 top-0 bg-white p-2">{{ product.brand.name }}</span>
                    </NuxtLink>
                    <NuxtLink :to="`/product/${product.slug}`" class="flex items-center justify-center">
                        <img :src="product.primary_image" class="w-[300px]" alt="">
                    </NuxtLink>
                    <div class="absolute bottom-0 left-0  w-14 p-3 bg-gray-900 text-white group-hover:transition-all group-hover:duration-500 group-hover:bottom-10 group-hover:ease-in-out duration-500">{{ product.sellers[0].discount.percent }}%</div>
                </div>
                <div class="flex justify-between items-center  py-2">
                    <div class=""> {{ product.title }} </div>
                </div>
                <div class="flex justify-end  gap-8 py-4">
                    <div class="flex gap-2 items-center">
                    <del class="text-slate-500">{{ numberFormat(product.sellers[0].price) }}</del>
                    <span>{{ numberFormat(roundIt(countDiscount(product.sellers[0].price, product.sellers[0].discount.percent))) }} تومان</span>
                    </div>
                </div>
            </div>
        </div>
      </swiper-slide>   
      <swiper-slide  v-for="product in watches.data" :key="product.id">
        <div class="p-4 rounded-sm bg-white shadow-lg">
            <div class="flex flex-col">
                <div class="flex justify-between ">
                <div class="text-[#F04D7D] font-bold">پیشنهاد شگفت آویز</div>
                    <ClientOnly>
                      <div style="direction: ltr;" class="text-sm text-[#F04D7D]">
                          <vue-countdown :time="product.sellers[0].discount.expired_at" :transform="transformSlotProps" v-slot="{hours, minutes, seconds }">
                          {{ hours }} : {{ minutes }} : {{ seconds }}
                          </vue-countdown>
                      </div>
                    </ClientOnly>
                </div>
                <div class="flex items-center justify-center relative h-[340px] my-2">
                    <NuxtLink :to="`/brand/${product.brand.slug}`">
                        <span class="absolute right-0 top-0 bg-white p-2">{{ product.brand.name }}</span>
                    </NuxtLink>
                    <NuxtLink :to="`/product/${product.slug}`" class="flex items-center justify-center">
                        <img :src="product.primary_image" class="w-[300px]" alt="">
                    </NuxtLink>
                    <div class="absolute bottom-0 left-0  w-14 p-3 bg-gray-900 text-white group-hover:transition-all group-hover:duration-500 group-hover:bottom-10 group-hover:ease-in-out duration-500">{{ product.sellers[0].discount.percent }}%</div>
                </div>
                <div class="flex justify-between items-center  py-2">
                    <div class=""> {{ product.title }} </div>
                </div>
                <div class="flex justify-end  gap-8 py-4">
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

const {data: watches} = await useFetch(`${apiBase}/watch/get-shegeft`)

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