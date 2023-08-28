<template>
    <main class="mt-16 flex flex-col items-center justify-center">
        <div class="text-xl"> ورود با شماره مبایل</div>
        <div v-if="errors !=null" class="text-red-400 mt-4 text-sm">{{ errors }}</div>
        <form @submit.prevent="checkOtp" class="mt-4 border border-gray-400 rounded-sm p-6 flex flex-col">
            <div class="text-xs text-gray-400" > کد ارسال شده به شماره مبایل 09123409878 را وارد کنید </div>
            <input type="text" v-model="otp" class="border-b-2 mt-2 text-gray-400 border-gray-400 focus:outline-none w-[300px] text-sm">
            <button type="submit" :class="disBtn ? 'btn-disactive' : 'btn-active' "  :disabled="disBtn"> ورود</button>
        </form>
    </main>
    <LoadingSppiner v-if="loading" />
</template>


<script setup>
const disBtn = ref(true)
const loading = ref(false)
const errors = ref(null)
const otp = ref(null)
const {authUser} = useAuth()

watch(otp, (newVal) => {
    errors.value = null
    if(/^[0-9]{6}$/.test(newVal)) {
        disBtn.value = false
    }else {
        disBtn.value = true
    }
})
async function checkOtp() {
    try {
        loading.value = true
        const data = await $fetch('/api/auth/check', {
            method: 'POST',
            body: {otp: otp.value}
        })
        authUser.value = data
        navigateTo('/')
    } catch (error) {
        errors.value = error.data.data.message
    } finally {
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