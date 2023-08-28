<template>
    <div class="bg-white w-[300px] h-[480px] shadow-lg px-3 py-4 rounded-sm group">
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
        <div class="flex justify-between items-center text-sm mt-2 mb-8">
          <div class="">{{ product.title }}</div>
        </div>
        <div v-if="product.sellers[0].discount" class="flex justify-end gap-16 items-center">
              <div class="flex gap-2 items-center absolute bottom-4">
                  <del class="text-slate-500">{{ numberFormat(product.sellers[0].price) }}</del>
                  <span v-if="product.sellers[0].discount">{{ numberFormat(roundIt(countDiscount(product.sellers[0].price, product.sellers[0].discount.percent))) }} تومان</span>
              </div>
        </div>
        <div v-else class="relative flex justify-end gap-16 items-center">
          <span class="absolute -bottom-8">{{ numberFormat(product.sellers[0].price) }} تومان</span>
        </div>
    </div>
</div>
</template>

<script setup>

const props = defineProps(['product'])

console.log(numberFormat(props.product.sellers[0].price));

</script>