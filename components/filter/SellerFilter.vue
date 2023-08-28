<template>
     <div class="sellerCard relative">
    <button @click="sellerCard" :class=" showCard ? 'border border-black' : 'border border-white'" class="flex gap-2 p-2  cursor-pointer hover:border-black transition ease-in-out duration-150">
      فروشنده 
      <span class="ml-2 w-2">
          <Icon size="21" :name="showCard ?'material-symbols:keyboard-arrow-up-rounded' : 'material-symbols:keyboard-arrow-down-rounded' " />
      </span>
    </button>
    <Transition name="fade">
        <div v-if="showCard" class="flex flex-col border border-black bg-white absolute top-[50px] w-[340px] z-[1000] float-right m-0 min-w-max overflow-hidden text-right ">
          <div style="direction: rtl" class="flex flex-col mt-4 mr-2 overflow-auto h-[200px] shadow-sm scroll-dev">
              <div class="flex items-center gap-1">
                  <input type="checkbox" v-model="chkSellers" :value="0" class="w-4 h-4" id="sellerCheckBox1">
                  <label for="sellerCheckBox1" class="opacity-80 hover:opacity-100 "> دیجی استایل </label>
              </div>
              <div class="flex items-center gap-1">
                  <input type="checkbox" v-model="chkSellers" :value="1" class="w-4 h-4" id="sellerCheckBox2">
                  <label for="sellerCheckBox2" class="opacity-80 hover:opacity-100 ">  فروشنده رسمی برند </label>
              </div>
              <div class="flex items-center gap-1">
                  <input type="checkbox" v-model="chkSellers" :value="2" class="w-4 h-4" id="sellerCheckBox3">
                  <label for="sellerCheckBox3" class="opacity-80 hover:opacity-100 ">  فروشنده برگزیده </label>
              </div>
          </div>
          <div class="flex justify-end items-center mx-2 my-4 ">
              <div class="ml-2">
                <button @click="refreshCheckBoxes" class="border border-black opacity-40 hover:opacity-100 ml-2 p-3 transition-all duration-150 ">
                    <Icon size="26" name="ci:refresh" />
                </button>
                <button @click="setFilter" :class="chkSellers.length > 0 ?'activeBtn opacity-100' : 'disabledBtn opacity-40'"  :disabled="chkSellers.length > 0 ? disableBtn = false : disableBtn = true">اعمال</button>
              </div>
          </div>
        </div>
    </Transition>
  </div>
</template>




<script setup>

const chkSellers = ref([])
const showCard = ref(false)
const emits = defineEmits(['sendInput','openCard'])

onMounted(() => {
  document.addEventListener('click', (event) => {
    if(! event.target.closest('.sellerCard')) {
      showCard.value = false
    }
  })
})

function setFilter() {
  emits('sendInput', {sellers : chkSellers.value})
  refreshCheckBoxes()
  showCard.value = false
}

function sellerCard() {
  showCard.value = ! showCard.value
  emits('openCard', false)
}

function refreshCheckBoxes() {
  chkSellers.value = []
}
</script>



<style scoped>
.scroll-dev {
  direction: ltr;
}

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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