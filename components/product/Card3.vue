<template>
          <div class=" bg-white w-[300px] h-[500px] shadow-lg px-3 py-4 rounded-sm group">
            <div class="flex flex-col">
                <div class="relative bg-white shadow-sm h-[340px] my-2">
                  <div v-if="props.product.brand">
                    <NuxtLink :to="`/brand/${props.product.brand.slug}`" target="_blank">
                      <span class="absolute right-0 top-0 bg-white p-2">{{ props.product.brand ? props.product.brand.name : null }}</span>
                    </NuxtLink>
                  </div>
                    <NuxtLink :to="`/product/${props.product.slug}`" target="_blank">
                        <img :src="props.product.primary_image" width="300" height="200" alt="">
                    </NuxtLink>
                    <div v-if="props.product.sellers[0].discount" :class="props.product.property != null  ? 'group-hover:bottom-10' : ''" class="absolute bottom-0 left-0 w-14 p-3 bg-gray-900 text-white group-hover:transition-all group-hover:duration-300 group-hover:ease-in-out duration-300">{{ props.product.sellers[0].discount.percent }}%</div>
                    <div v-if="props.product.property == 'size' && props.product.sizes.length == 1" class="absolute bottom-0 right-0 shadow-md mb-[3px] w-20 p-3 bg-white text-gray-900 group-hover:transition-all group-hover:duration-300 group-hover:bottom-12 group-hover:ease-in-out duration-300"> تک سایز </div>
                    <div v-if="props.product.property == 'size'">
                      <NuxtLink :to="`/product/${props.product.slug}?size=${size.size}`" 
                      v-for="size in props.product.sizes"
                      class="relative -bottom-8 -z-10 w-[280px] gap-6 bg-white p-2 group-hover:transition-all group-hover:duration-300 group-hover:bottom-[-30px] group-hover:z-10 group-hover:ease-in-out duration-300" target="_blank">
                          {{ size.size }}
                      </NuxtLink>
                    </div>
                    <div v-if="props.product.property == 'weight'">
                      <NuxtLink :to="`/product/${props.product.slug}?weights=${weight.weight_value}`" 
                      v-for="weight in props.product.weights"
                      class="relative -bottom-8 -z-10 w-[280px] gap-6 bg-white p-2 group-hover:transition-all group-hover:duration-300 group-hover:bottom-[-30px] group-hover:z-10 group-hover:ease-in-out duration-300" target="_blank">
                          {{ weight.weight_value }} گرم
                      </NuxtLink>
                    </div>
                </div>
                <div class="flex justify-between items-center text-sm mt-2 mb-8">
                  <div class="">{{ props.product.title }}</div>
                </div>
                <div v-if="props.product.sellers[0].discount" class="flex justify-end gap-x-16 items-center">
                      <div class="flex gap-2 items-center absolute bottom-4">
                          <del class="text-slate-500">{{ numberFormat(props.product.sellers[0].price) }}</del>
                          <span v-if="props.product.sellers[0].discount">{{ numberFormat(roundIt(countDiscount(props.product.sellers[0].price, props.product.sellers[0].discount.percent))) }} تومان</span>
                      </div>
                </div>
                <div v-else class="flex justify-end gap-x-16 items-center">
                  <span class="absolute bottom-4">{{ numberFormat(props.product.sellers[0].price) }} تومان</span>
                </div>
            </div>
          </div>
</template>

<script setup>

const props = defineProps(['product'])


</script>