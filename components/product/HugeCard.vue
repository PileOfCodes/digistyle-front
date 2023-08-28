<template>
      <div class=" px-3 rounded-sm bg-white shadow-lg">
            <div class="flex flex-col">
                <div class="flex items-center justify-center relative h-[360px] my-2">
                    <div>

                    </div>
                    <NuxtLink :to="`/brand/${props.product.brand.slug}`" target="_blank">
                        <span class="absolute right-0 top-8 bg-white p-2 ">{{ props.product.brand.name }}</span>
                    </NuxtLink>
                    <NuxtLink :to="`/product/${props.product.slug}`" class="flex items-center justify-center mt-12" target="_blank">
                        <img :src="props.product.primary_image" class="w-[300px]" alt="">
                    </NuxtLink>
                    <div v-if="props.product.sellers[0].discount" class="absolute bottom-0 left-0  w-14 p-3 bg-gray-900 text-white group-hover:transition-all group-hover:duration-500 group-hover:bottom-10 group-hover:ease-in-out duration-500">{{ props.product.sellers[0].discount.percent }}%</div>
                </div>
                <div class="flex justify-between items-center text-md mt-2 pb-8">
                    <div class="">{{ props.product.title }}</div>
                </div>
                <div v-if="props.product.sellers[0].discount" class="flex justify-end items-center">
                    <div class="flex gap-2 items-center absolute bottom-4">
                        <del class="text-slate-500">{{ numberFormat(props.product.sellers[0].price) }}</del>
                        <span v-if="props.product.sellers[0].discount">{{ numberFormat(roundIt(countDiscount(props.product.sellers[0].price, props.product.sellers[0].discount.percent))) }} تومان</span>
                    </div>
                </div>
                <div v-else class="flex justify-end  items-center">
                    <span class="ml-2 mb-12">{{ numberFormat(props.product.sellers[0].price) }} تومان</span>
                </div>
            </div>
        </div>
</template>

<script setup>

const props = defineProps(['product'])

</script>