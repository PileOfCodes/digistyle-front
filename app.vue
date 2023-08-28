<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  titleTemplate: (title) => {
    return title ? ` ${title} | فروشگاه اینترنتی لباس دیجی استایل ` : ' فروشگاه اینترنتی لباس دیجی استایل '
  }
})
</script>
