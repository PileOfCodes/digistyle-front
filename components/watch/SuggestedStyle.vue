<template>
    <div class="relative py-10 ">
        <div class="flex justify-center items-center">
            <div class="relative border border-black w-[1100px] h-[750px]"> 
                <div class="absolute top-8 bg-white text-[40px] -right-12">استایل هفته</div>
                <button class="absolute top-8 bg-white -left-8 px-6 py-2 border border-black hover:bg-black hover:text-white transition-all duration-200">خرید همه</button>
            </div>
        </div>
        <div class=" absolute top-40 ">
            <div class="w-[400px] h-full relative right-20 ">
                <img :src="ws.data.image" class="w-full max-w-[400px] object-cover overflow-clip" alt="">
            </div>
            <div class="absolute top-0 right-[500px] ">
                <div class="w-[800px] px-3 py-4 rounded-sm bg-white ">
                    <div >
                        <LazyProductSwiper :products="ws.data.products" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const {public : {apiBase}} = useRuntimeConfig()
const {data: ws} = await useFetch(`${apiBase}/watch/weekstyle-watches`)

</script>