<template>
    <div class="">
        <div v-for="(slider, index) in sliders.data " :key="index">
            <NuxtLink :to="`collection/${slider.collection.slug}`" v-show="selectedImage == index" target="_blank">
                <img :src="slider.image" alt="">
            </NuxtLink>
        </div>
        <div class="flex gap-[7px] absolute right-16 bottom-36">
            <div v-for="(slider, index) in sliders.data" :key="index"
            @click="selectItem(index)"
            :style="index == selectedImage ? 'background-color: black' : ''"
            class="w-2 h-2 border-1 bg-transparent border cursor-pointer border-black rounded-full"></div>
        </div>
        <div class="flex gap-7 absolute bottom-24 right-14">
            <Icon size="42" class="cursor-pointer" @click="move(-1)"  name="uil:arrow-right" />
            <Icon size="42" class="cursor-pointer" @click="move(1)" name="uil:arrow-left" />
        </div>
    </div>
</template>


<script setup>

const selectedImage = ref(0)
const {public: {apiBase}}  = useRuntimeConfig()

const {data: sliders} = await useFetch(`${apiBase}/landing/slider`)

function move(n) {
    if(selectedImage.value + n < 0 ) {
        selectedImage.value = sliders.value.data.length -1
    }else if(selectedImage.value + n >= sliders.value.data.length ) {
        selectedImage.value = 0
    }else {
        selectedImage.value += n
    }
}
function selectItem(n) {
    selectedImage.value = n
}
const interval = setInterval(() => {
    selectedImage.value++
    if(selectedImage.value >= sliders.value.data.length) {
        selectedImage.value = 0
    }
}, 7000);

onUnmounted(() => {
    clearInterval(interval)
})
</script>