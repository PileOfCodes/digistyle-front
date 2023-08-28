<template>
    <div class="mx-4">
        <div class="w-full my-2">  
            <img src="/promotion.jpg" >
        </div>
        <div class="flex gap-x-4 gap-y-12 flex-wrap">
            <div v-for="product in products.data" :key="product.id">
                <div class="bg-white w-[300px] relative h-[500px] shadow-lg px-3 py-4 rounded-sm group">
                    <div class="flex flex-col ">
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
                            <NuxtLink :to="`/brand/${product.brand.slug}`">
                                <span class="absolute right-0 top-0 bg-white p-2">{{ product.brand ? product.brand.name : null }}</span>
                            </NuxtLink>
                            </div>
                            <NuxtLink :to="`/product/${product.slug}`">
                                <img :src="product.primary_image" width="300" height="200" alt="">
                            </NuxtLink>
                            <div class="absolute bottom-0 left-0 w-14 p-3 bg-gray-900 text-white group-hover:transition-all group-hover:duration-300 group-hover:bottom-10 group-hover:ease-in-out duration-300">{{ product.sellers[0].discount.percent }}%</div>
                            <div v-if="product.property == 'size'">
                                <NuxtLink :to="`/product/${product.slug}?size=${size.size}`" 
                                v-for="size in product.sizes"
                                class="relative -bottom-8 -z-10 w-[280px] gap-6 bg-white p-2 group-hover:transition-all group-hover:duration-300 group-hover:bottom-[-30px] group-hover:z-10 group-hover:ease-in-out duration-300">
                                    {{ size.size }}
                            </NuxtLink>
                            </div>
                        </div>
                        <div class="flex justify-between items-center mt-2 mb-8">
                            <div class="">{{ product.title }}</div>
                        </div>
                        <div class="flex gap-16 items-center absolute left-2 bottom-4">
                            <div class="flex gap-x-2 items-center ">
                                <del class="text-slate-500">{{ numberFormat(product.sellers[0].price) }}</del>
                                <span>{{ numberFormat(roundIt(countDiscount(product.sellers[0].price, product.sellers[0].discount.percent))) }} تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown';
function transformSlotProps(props) {
      const formattedProps = {};

      Object.entries(props).forEach(([key, value]) => {
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });
      return formattedProps;
}
const {public: {apiBase}} = useRuntimeConfig()
const {data: products} = await useFetch(`${apiBase}/promotion/getProducts`)

</script>