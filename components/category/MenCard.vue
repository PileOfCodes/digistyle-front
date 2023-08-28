<template>
    <div class="bg-[#e9e9e9] w-full py-8 px-16">
        <div class="flex flex-col">
            <div class="flex justify-between">
                <div>
                    <span class="text-sm" style="font-family: irsLight;">تا</span>
                    <span class="font-black text-2xl pr-1">19%</span>
                    <div class="text-sm heading" style="font-family: irsLight;">تخفیف</div>
                </div>
                <div class="flex items-center justify-center gap-2 h-10 overflow-hidden">
                    <span><img src="/short.png" width="50" height="100" alt=""></span>
                    <span  class="text-2xl font-black"> لباس زیر مردانه </span>
                </div>
                <div class="flex items-center justify-center gap-2 border border-black px-6 hover:bg-black hover:text-white cursor-pointer duration-150">
                    <div>نمایش تمام کالاها</div>
                    <Icon name="material-symbols:arrow-back-ios-new-rounded" />
                </div>
            </div>
            <div class="container mt-10">
                <LazyMvSlider :products="underwear" />
            </div>
        </div>
    </div>
</template>

<script setup>

const {public: {apiBase}} = useRuntimeConfig()

const {data: underwear} = await $fetch(`${apiBase}/parent/men-underwear`)
useHead({
    title: ` فروش آنلاین محصولات مردانه `
})
</script>

