<template>
    <div class="">
        <template v-for="(slider, index) in sliders.data " :key="index">
            <NuxtLink :to="`/collection/${slider.collection.slug}`" v-show="selectedImage == index">
                <img :src="slider.image" alt="">
            </NuxtLink>
        </template>
        <div class="flex gap-[7px] absolute bottom-24 right-1/2">
            <div v-for="(slider, index) in sliders.data" :key="index"
            @click="selectItem(index)"
            :style="index == selectedImage ? 'background-color: white' : ''"
            class="w-2 h-2 border-1 bg-transparent border cursor-pointer border-white rounded-full"></div>
        </div>
    </div>
</template>


<script setup>

const selectedImage = ref(0)

const {public: {apiBase}}  = useRuntimeConfig()

const {data: sliders} =  await useFetch(`${apiBase}/discounted/get-collection`)
console.log(sliders)
function selectItem(n) {
    selectedImage.value = n
}

const interval = setInterval(() => {
    selectedImage.value++
    if(selectedImage.value >= sliders.value.data.length ) {
        selectedImage.value = 0
    }
}, 7000);

onUnmounted(() => {
    clearInterval(interval)
})
</script>