<template>
    <div class="bg-white w-full py-8 ">
    <div class="flex w-full gap-4">
        <div class="flex flex-col w-1/5 items-center space-y-[200px]">
            <div class="w-24 text-center text-2xl mt-6">پر فروش ترین های اخیر</div>
            <button class="bg-white border hover:bg-black hover:text-white border-black text-black w-[140px] px-3 py-2 transition-all duration-150 ease-in-out">مشاهده همه</button>
        </div>
        <LazyMvSlider :products="data.data.products" />
    </div>
</div>
</template>

<script setup>
const {public: {apiBase}} = useRuntimeConfig()
const data = await $fetch(`${apiBase}/mostSells`)
</script>