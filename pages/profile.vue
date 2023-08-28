<template>
    <NuxtLayout name="profile" >
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
definePageMeta({
    layout: 'simple',
    key: route => route.fullPath,
    middleware: 'auth'
})
</script>