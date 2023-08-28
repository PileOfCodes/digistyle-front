<template>
    <div class="fastenCard relative">
    <button @click="fastenCard" :class=" showCard ? 'border border-black' : 'border border-white'" class="flex gap-2 p-2  cursor-pointer hover:border-black transition ease-in-out duration-150">
      نحوه بسته شدن 
      <span class="ml-2 w-2">
          <Icon size="21" :name="showCard ?'material-symbols:keyboard-arrow-up-rounded' : 'material-symbols:keyboard-arrow-down-rounded' " />
      </span>
    </button>
    <Transition name="fade">
        <div v-if="showCard" class="flex flex-col border border-black bg-white absolute top-[50px] w-[340px] z-[1000] float-right m-0 min-w-max overflow-hidden text-right ">
          <div style="direction: rtl" class="flex flex-col mt-4 mr-2 overflow-auto h-[200px] shadow-sm scroll-dev">
              <div class="flex items-center gap-1" v-for="fasten in fastenType.data">
                  <input type="checkbox" v-model="chkFasten" :value="fasten.id" class="w-4 h-4" :id="`sellerCheckBox${fasten.id}`">
                  <label :for="`sellerCheckBox${fasten.id}`" class="opacity-80 hover:opacity-100 "> {{ fasten.name }} </label>
              </div>
          </div>
          <div class="flex justify-end items-center mx-2 my-4 ">
              <div class="ml-2">
                <button @click="refreshCheckBoxes" class="border border-black opacity-40 hover:opacity-100 ml-2 p-3 transition-all duration-150 ">
                    <Icon size="26" name="ci:refresh" />
                </button>
                <button @click="setFilter" :class="chkFasten.length > 0 ?'activeBtn opacity-100' : 'disabledBtn opacity-40'"  :disabled="chkFasten.length > 0 ? disableBtn = false : disableBtn = true">اعمال</button>
              </div>
          </div>
        </div>
    </Transition>
  </div>
</template>




<script setup>

const chkFasten = ref([])
const showCard = ref(false)

onMounted(() => {
  document.addEventListener('click', (event) => {
    if(! event.target.closest('.fastenCard')) {
      showCard.value = false
    }
  })
})

function setFilter() {
  emits('sendInput', {fasten : chkFasten.value})
  refreshCheckBoxes()
  showCard.value = false
}

function fastenCard() {
  showCard.value = ! showCard.value
}

function refreshCheckBoxes() {
  chkFasten.value = []
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