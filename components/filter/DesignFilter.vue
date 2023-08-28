<template>
     <div class="designCard relative">
    <button @click="designCard" :class=" showCard ? 'border border-black' : 'border border-white'" class="flex gap-2 p-2 cursor-pointer hover:border-black transition ease-in-out duration-150">
      طرح 
      <span class="ml-2 w-2">
          <Icon size="21" :name="showCard ?'material-symbols:keyboard-arrow-up-rounded' : 'material-symbols:keyboard-arrow-down-rounded' " />
      </span>
    </button>
    <Transition name="fade">
        <div v-if="showCard" class="flex flex-col border border-black bg-white absolute top-[50px] w-[340px] z-[1000] float-right m-0 min-w-max overflow-hidden text-right ">
          <div class="flex items-center mx-2 my-2">
              <Icon name="uil:search" class="text-slate-500" />
              <input type="text" id="designSearch" v-model="search" class="text-xs mx-1 focus:border-none focus:outline-none" placeholder="جستجو در دسته بندی ...">
          </div>
          <div style="direction: rtl" class="flex flex-col mr-2 overflow-auto h-[200px] mb-2 shadow-sm scroll-dev">
              <div class="flex items-center gap-1" v-for="design in props.designs.data" :key="design.id">
                  <input type="checkbox" v-model="chkDesigns" :value="design.id" class="w-4 h-4" :id="`designCheckBox${design.id}`">
                  <label :for="`designCheckBox${design.id}`" class="opacity-80 hover:opacity-100 "> {{ design.name }} </label>
              </div>
          </div>
          <div class="flex justify-end items-center mx-2 my-4 ">
              <div class="ml-2">
                <button @click="refreshCheckBoxes" class="border border-black opacity-40 hover:opacity-100 ml-2 p-3 transition-all duration-150 ">
                    <Icon size="26" name="ci:refresh" />
                </button>
                <button @click="setFilter" :class="chkDesigns.length > 0 ?'activeBtn opacity-100' : 'disabledBtn opacity-40'"  :disabled="chkDesigns.length > 0 ? disableBtn = false : disableBtn = true">اعمال</button>
              </div>
          </div>
        </div>
    </Transition>
  </div>
</template>




<script setup>

const chkDesigns = ref([])
const search = ref(null)
const showCard = ref(false)
const props = defineProps(['designs'])
const emits = defineEmits(['sendInput', 'searchItem', 'openCard'])
emits('searchItem', search.value)

watch(search, (newVal) => {
  emits('searchItem', newVal)
})

function setFilter() {
  emits('sendInput', {designs : chkDesigns.value})
  refreshCheckBoxes()
  showCard.value = false
}

onMounted(() => {
  document.addEventListener('click', (event) => {
    if(! event.target.closest('.designCard')) {
      showCard.value = false
    }
  })
})
function designCard() {
  showCard.value = ! showCard.value
  emits('openCard', false)
}

function refreshCheckBoxes() {
  chkDesigns.value = []
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