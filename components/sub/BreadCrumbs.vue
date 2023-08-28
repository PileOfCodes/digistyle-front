<template>
    <div class="flex gap-1 text-xs my-12">
        <div class="text-slate-500"> فروشگاه اینترنتی لباس دیجی استایل / </div>
        <div>{{ props.subCategory.data.parent_category.parent.name }} / </div>
        <div>{{ props.subCategory.data.name }} </div>
    </div>
</template>

<script setup>

const props = defineProps(['subCategory'])

</script>