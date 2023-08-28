<template>
     <div class="categoryCard relative">
    <button @click="categoryCard" :class=" showCard ? 'border border-black' : 'border border-white'" class="flex gap-2 p-2  cursor-pointer hover:border-black transition ease-in-out duration-150">
      دسته بندی
      <span class="ml-2 w-2">
          <Icon size="21" :name="showCard ?'material-symbols:keyboard-arrow-up-rounded' : 'material-symbols:keyboard-arrow-down-rounded' " />
      </span>
    </button>
    <Transition name="fade">
        <div v-if="showCard" class="flex flex-col border border-black bg-white absolute top-[50px] w-[340px] z-[1000] float-right m-0 min-w-max overflow-hidden text-right ">
          <div class="flex items-center mx-2 my-2">
              <Icon name="uil:search" class="text-slate-500" />
              <input type="text" v-model="search" class="text-xs mx-1 focus:border-none focus:outline-none" placeholder="جستجو در دسته بندی ...">
          </div>
          <div class="flex flex-col overflow-auto h-[200px] mb-2 shadow-sm scroll-dev">
              <div style="direction: rtl;" class="flex justify-between items-center text-sm mx-2 my-2 " v-for="category in props.categories.data" :key="category.id">
                <div class="flex items-center gap-1">
                    <input type="checkbox" v-model="chkCategories" :value="category.id" class="w-4 h-4" :id="`categoryCheckBox${category.id}`">
                    <label :for="`categoryCheckBox${category.id}`" class="opacity-80 hover:opacity-100 ">{{ category.name }}</label>
                </div>
              </div>
          </div>
          <div class="flex justify-between items-center mx-2 my-4 ">
              <div @click="selectAll" class="text-blue-600 cursor-pointer opacity-70 text-xs hover:opacity-100">انتخاب همه</div>
              <div class="ml-2">
                <button @click="refreshCheckBoxes" class="border border-black opacity-40 hover:opacity-100 ml-2 p-3 transition-all duration-150 ">
                    <Icon size="26" name="ci:refresh" />
                </button>
                <button @click="setFilter" :class="chkCategories.length > 0 ?'activeBtn opacity-100' : 'disabledBtn opacity-40'"  :disabled="chkCategories.length > 0 ? disableBtn = false : disableBtn = true">اعمال</button>
              </div>
          </div>
        </div>
    </Transition>
  </div>
</template>




<script setup>

const chkCategories = ref([])
const search = ref(null)
var categories = ref([])
const showCard = ref(false)
const props = defineProps(['categories'])
const emits = defineEmits(['sendInput', 'searchItem', 'openCard'])

emits('searchItem', search.value)

watch(search, (newVal) => {
  emits('searchItem', newVal)
})

function setFilter() {
  emits('sendInput', {categories : chkCategories.value})
  showCard.value = false
}

onMounted(() => {
  document.addEventListener('click', (event) => {
    if(! event.target.closest('.categoryCard')) {
      showCard.value = false
    }
  })
})

function categoryCard() {
  showCard.value = ! showCard.value
  emits('openCard', false)
}

function selectAll() {
  categories.value.data.forEach(c => chkCategories.value.push(c.id))
}

function refreshCheckBoxes() {
  chkCategories.value = []
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