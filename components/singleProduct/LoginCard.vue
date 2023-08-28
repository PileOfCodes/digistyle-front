<template>
    <div class="fixed flex items-center justify-center content-none before:opacity-80 before:w-full before:h-[100vh] w-full h-[100vh] before:top-0 before:left-0 top-0 left-0 before:bg-black before:z-[-200000] z-[100000]">
        <div class="absolute flex items-center justify-center bg-white w-[500px] h-[200px] shadow-lg ">
            <div>لطفا ابتدا <NuxtLink class="text-green-400" to="/user/login">وارد حساب کاربری</NuxtLink> خود شوید.</div>
            <button class="absolute left-4 top-2" @click="event => emits('sendSignal', false)">
                <Icon size="32" name="ci:close-big" />
            </button>
        </div>
    </div>
</template>

<script setup>
const emits = defineEmits(['sendSignal'])
</script>