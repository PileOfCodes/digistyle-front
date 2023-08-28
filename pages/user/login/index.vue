<template>
    <main class="mt-16 flex flex-col items-center justify-center">
        <div class="text-xl"> ورود یا ثبت نام</div>
        <form @submit.prevent="login" class="mt-4 border border-gray-400 rounded-sm p-6 flex flex-col">
            <label for="sendPass" class="text-xs text-gray-400">شماره مبایل یا ایمیل</label>
            <input type="text" v-model="cellphone" class="border-b-2 mt-2 text-gray-400 border-gray-400 focus:outline-none w-[300px] text-sm">
            <button type="submit" :class="disBtn ? 'btn-disactive' : 'btn-active' "  :disabled="disBtn"> ادامه</button>
            <div class="text-[10px] mx-auto text-center w-[270px]">
                <span>با ورود و یا ثبت نام در دیجی‌استایل، شما <NuxtLink to="#" class="text-[#41c1c6]">شرایط و قوانین</NuxtLink> استفاده از تمام سرویس های سایت دیجی‌کالا و <NuxtLink class="text-[#41c1c6]">قوانین حریم خصوصی</NuxtLink> آن را می‌پذیرید.</span>
            </div>
        </form>
    </main>
    <LoadingSppiner v-if="loading" />
</template>


<script setup>
const disBtn = ref(true)
const cellphone = ref(null)
const loading = ref(false)
watch(cellphone, (newVal) => {
    if( /^(\+98|0)?9\d{9}$/.test(newVal) || /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(newVal))
    {
        disBtn.value = false
    }else {
        disBtn.value = true
    }
})

async function login() {
    try {
        loading.value = true
        const data = await $fetch('/api/auth/login', {
            method: "POST",
            body: {cellphone : cellphone.value}
        })

        return navigateTo('/user/login/confirm')
    } catch (error) {
        return error;
    }finally {
        loading.value = false
    }
}
definePageMeta({
    layout: 'user',
    middleware: 'guest'
})
</script>

<style scoped>
.btn-disactive {
    margin-top: 60px;
    margin-bottom: 20px;
    width: 100%;
    padding-inline: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: gray;
    opacity: .4;
    border-radius: 1px;
}
.btn-active {
    margin-top: 60px;
    margin-bottom: 20px;
    width: 100%;
    padding-inline: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #41c1c6;
    border: 1px solid #41c1c6;
    color: white;
    border-radius: 1px;
}
.btn-active:hover {
    color: #41c1c6;
    background-color: white;
    border-radius: 1px;
}
</style>