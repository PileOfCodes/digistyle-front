<template>
    <div class="flex gap-1 text-xs mt-12 my-4 text-slate-500">
        <div>  دیجی استایل / </div>
        <div v-if="childCategory.data.subCategory.category.parent.parent"> 
            {{ childCategory.data.subCategory.category.parent.parent.name }} / 
        </div>
        <div> {{ childCategory.data.subCategory.category.parent.name }} / </div>
        <div> {{ childCategory.data.bread }} / </div>
        <div class="text-black ">{{ props.singleProduct.data.title }}</div>
    </div>
</template>

<script setup>

const props = defineProps(['singleProduct'])
const route = useRoute()
const {public : {apiBase}} = useRuntimeConfig()

const {data: childCategory} = await useFetch(`${apiBase}/singleProductCategory`, {
    params: {'slug': route.params.slug }
})
console.log(childCategory.value.data);
</script>