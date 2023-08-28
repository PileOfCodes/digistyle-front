<template>
    <div>
        <div>کارت های هدیه</div>
        <div v-if="isGift"></div>
        <div v-else class="mt-2 text-md text-gray-600">هیچ کارت هدیه ای ثبت نشده است</div>
    </div>
</template>

<script setup>

const isGift = ref(false)
</script>