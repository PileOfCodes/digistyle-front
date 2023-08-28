<template>
    <main class="mt-16 flex flex-col items-center justify-center">
        <div class="text-xl">ایجاد رمز ورود</div>
        <div class="mt-4 border border-gray-400 rounded-sm p-6 flex flex-col">
            <label for="sendPass" class="text-xs text-gray-400">شماره مبایل یا ایمیل</label>
            <input type="text" class="border-b-2 mt-2 text-gray-400 border-gray-400 focus:outline-none w-[300px] text-sm">
            <button class="bg-[#41c1c6] border mb-6 border-[#41c1c6] duration-150  text-white hover:bg-white hover:text-[#41c1c6] w-full py-2 mt-16  rounded-sm">ارسال درخواست</button>
        </div>
    </main>
</template>


<script setup>

definePageMeta({
    layout: 'user'
})
</script>