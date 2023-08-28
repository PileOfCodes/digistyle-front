<template>
  <div class="relative mostView">
    <button @click="getCard" :class=" showCard ? 'border border-black' : 'border border-white'"
    class="flex text-sm justify-end gap-2 p-2 cursor-pointer hover:border hover:border-black transition-all ">
        {{ selected }}
        <span class="ml-2 w-2">
            <span class="filterIcon"></span>
        </span>
    </button>
    <Transition name="fade">
      <ul v-if="showCard" class="border border-black bg-white absolute top-12 w-[220px] left-0  z-[1000] float-right m-0  min-w-max list-none overflow-hidden text-right ">
        <li>
          <button @click="event => {emits('sendItem', {mostVisited : 'mostVisited'}), selected = 'پربازدید ترین'}" class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"> پربازدید ترین </button>
        </li>
        <li>
          <button @click="event => {emits('sendItem', {mostSells : 'mostSells'}), selected = 'پرفروش ترین'}" class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">پرفروش ترین</button>
        </li>
        <li>
          <button @click="event => {emits('sendItem', {mostFavorite : 'mostFavorite'}), selected = 'محبوب ترین'}" class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"> محبوب ترین </button>
        </li>
        <li>
          <button @click="event => {emits('sendItem', {newest : 'newest'}), selected = 'جدیدترین'}" class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">  جدیدترین </button>
        </li>
        <li>
          <button @click="event => {emits('sendItem', {lowToHigh : 'lowToHigh'}), selected = 'قیمت از کم به زیاد'}" class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">  قیمت از کم به زیاد </button>
        </li>
        <li>
          <button @click="event => {emits('sendItem', {highToLow : 'highToLow'}), selected = 'قیمت از زیاد به کم'}" class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600">  قیمت از زیاد به کم </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
const showCard = ref(false)
const emits = defineEmits(['sendItem'])
const selected = ref('پربازدید ترین')

onMounted(() => {
  document.addEventListener('click', (event) => {
    if(! event.target.closest('.mostView')) {
      showCard.value = false
    }
  })
})

function getCard() {
  showCard.value = ! showCard.value
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

</style>
