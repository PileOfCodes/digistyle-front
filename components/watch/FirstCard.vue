<template>
    <div class="bg-[#e9e9e9] w-full py-8 px-16">
        <div class="flex flex-col">
            <div class="flex items-center justify-center gap-2 h-10 overflow-hidden">
                <hr class="w-28 bg-black h-[2px]">
                <span class="text-2xl mx-4 font-black"> خوش وقتی در 10:10  </span>
                <hr class="w-28 bg-black h-[2px]">
            </div>
            <div class="container mt-10">
                <LazyWatchFirstCardSlider :watches="watches.data" />
            </div>
        </div>
    </div>
</template>

<script setup>

const {public: {apiBase}} = useRuntimeConfig()
const {data: watches} = await useFetch(`${apiBase}/watch/get-watches`)

</script>

