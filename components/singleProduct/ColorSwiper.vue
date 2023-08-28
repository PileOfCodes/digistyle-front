<template>
    <div class="flex flex-col">
        <div>رنگ: {{ selectedOne }}</div>
        <swiper
            :style="{
                '--swiper-theme-color': '#000 !important',
                '--swiper-navigation-size': '20px !important'
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
                @click="selectItem(att.name)"
                :class="`w-4 h-4 bg-[${att.color_value}]`"
                class="flex items-center cursor-pointer justify-center "></div>
            </div>
        </swiper-slide>   

    </swiper>
    </div>
</template>

<script setup>

const route = useRoute()
const emits  = defineEmits(['sendProperty'])
const query = ref(null)
const selectedOne = ref(query)
const props = defineProps(['attributes'])
query.value = route.query.color != undefined ? route.query.color : props.attributes[0].name
emits('sendProperty', selectedOne)

function selectItem(attribute) {
    selectedOne.value = attribute
}

</script>

<style scoped>

:deep(.swiper-slide) {
    margin: unset !important;
    /* margin-left: 10px !important; */
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

