<template>
     <div class="priceCard relative">
    <button @click="priceCard" :class=" showCard ? 'border border-black' : 'border border-white'" class="flex gap-2 p-2  cursor-pointer hover:border-black transition ease-in-out duration-150">
      قیمت
      <span class="ml-2 w-2">
          <Icon size="21" :name="showCard ?'material-symbols:keyboard-arrow-up-rounded' : 'material-symbols:keyboard-arrow-down-rounded' " />
      </span>
    </button>
    <Transition name="fade">
        <div v-if="showCard"
        class="flex flex-col border border-black bg-white absolute top-[50px] w-[340px] z-[1000] float-right m-0  min-w-max  overflow-hidden text-right ">
          <div class="flex items-center justify-between mx-2 my-6 ">
            <div class="relative flex items-center ">
              <input type="text" id="minPrice" @input="el => rangeValue[0] = el.target.value" :placeholder="rangeValue[0]" class="input1 border outline-none border-slate-400 w-36 p-2 ">
              <span class="absolute left-2 text-sm">تومان</span>
            </div>
            <div>تا</div>
            <div class="relative  flex items-center ">
              <input type="text" id="maxPrice" @input="el => rangeValue[1] = el.target.value" :placeholder="rangeValue[1]" class="input2 border outline-none border-slate-400 w-36 p-2" >
              <span class="absolute left-2 text-sm">تومان</span>
            </div>
          </div>
          <Slider v-model="rangeValue" :min="minPrice" @change="setOn = true" :tooltips="false" :lazy="false" :max="maxPrice" class="slider"  direction="rtl" />
          <div class="flex justify-end items-center mx-2 my-4 ">
              <div class="ml-2">
                <button @click="refreshCheckBoxes" class="border border-black opacity-40 hover:opacity-100 ml-2 p-3 transition-all duration-150 ">
                    <Icon size="26" name="ci:refresh" />
                </button>
                <button @click="setFilter" :class="setOn ?'activeBtn opacity-100' : 'disabledBtn opacity-40'"  :disabled="setOn ? disableBtn = false : disableBtn = true">اعمال</button>
              </div>
          </div>
        </div>
    </Transition>
  </div>
</template>




<script setup>
import Slider from '@vueform/slider'
import '@vueform/slider/themes/default.css'

const emits = defineEmits(['sendInput','openCard'])
var minPrice = ref(0)
const setOn = ref(false)
const sendPrice = ref([])
const disableBtn = ref(true)
var maxPrice = ref(0)
var rangeValue = ref([minPrice.value, maxPrice.value])
const showCard = ref(false)
const {public: {apiBase}} = useRuntimeConfig()
const route = useRoute()


onMounted(async() => {
  document.addEventListener('click', (event) => {
    if(! event.target.closest('.priceCard')) {
      showCard.value = false
    }
  })
  refreshCheckBoxes()
})

const {data: prices} = await useFetch(`${apiBase}/child-category-prices`, {
  query: {'slug' : route.params.slug}
})

minPrice.value = Math.min(...prices.value.data)
maxPrice.value = Math.max(...prices.value.data)

watch(rangeValue, () => {
  sendPrice.value = rangeValue.value
})

function setFilter() {
  emits('sendInput', {prices: sendPrice.value})
}


function priceCard() {
  showCard.value = ! showCard.value
  emits('openCard', false)
}

function refreshCheckBoxes() {
  rangeValue.value[0] = minPrice.value
  rangeValue.value[1] = maxPrice.value
}
</script>



<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slider {
  --slider-handle-bg: #000 !important;
  /* background-color: #000 !important; */
  --slider-connect-bg: #000;
  --slider-handle-ring-color: transparent;
}

.disabledBtn {
  padding: .8rem 50px;
  border: 1px solid gray;
  background-color: black;
  color: white;
}

.activeBtn {
  padding: .8rem 50px;
  border: 1px solid gray;
  background-color: black;
  color: white;
}
</style>