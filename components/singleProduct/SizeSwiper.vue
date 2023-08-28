<template>
    <div class="flex flex-col">
        <div>سایز: {{ selectedOne }}</div>
        <swiper
            :style="{
                '--swiper-theme-color': '#000 ',
                '--swiper-navigation-size': '20px '
            }"
            :cssMode="true"
            :navigation="true"
            :slides-per-view="3"
            :space-between="50"
            :effect="'creative'"
            :autoplay="{
                delay: 9000,
                disableOnInteraction: true,
            }"
            :creative-effect="{
            prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
        }"
        :mousewheel="true"
        :keyboard="true"
        :modules="[SwiperNavigation]"
    >
        <swiper-slide v-for="att in props.attributes" :key="att.id">
            <div class="flex mt-2">
                <div 
                @click="selectItem(att.size, att.quantity)"
                :class="{'bg-black text-white': selectedOne == att.size }"
                class="w-10 h-10 flex items-center text-sm cursor-pointer justify-center border border-black text-black">{{ att.size }}</div>
            </div>
        </swiper-slide>   

    </swiper>
    </div>
</template>

<script setup>

const route = useRoute()
const emits  = defineEmits(['sendProperty','sendQuantity'])
const query = ref(null)
const selectedOne = ref(query)
const sizeQuantity = ref(null)
const props = defineProps(['attributes'])
query.value = route.query.size != undefined ? route.query.size : props.attributes[0].size


props.attributes.forEach(s => {
    if(s.size == selectedOne.value) {
        emits('sendQuantity', s.quantity)
        
    }
});


emits('sendProperty', selectedOne)

function selectItem(attribute, quantity) {
    selectedOne.value = attribute
    emits('sendQuantity', quantity)
}
</script>

<style scoped>

:deep(.swiper-slide) {
    margin: unset !important;
}

:deep(.swiper-button-prev.swiper-button-disabled) {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
}

:deep(.swiper-button-next.swiper-button-disabled) {
    opacity: 0;
    cursor: auto;
    pointer-events: none;
}

:deep(.swiper-button-next) {
    background-color: unset !important;
    padding: 10px !important;
    left: 0px !important;
}

:deep(.swiper-button-prev) {
    background-color: unset !important;
    padding: 10px !important;
    right: 0px !important;
}

</style>

