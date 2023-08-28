<template>
    <div class="flex flex-col ">
        <span>اطلاعات مشتری حقیقی</span>
        <div class="flex gap-1 mt-6 text-sm">
            <div class="flex flex-col w-[600px]">
                <div class="bg-gray-100 py-2 pr-4">
                    <span>نام و نام خانوادگی: <span>{{ fullname }} </span></span>
                </div>
                <div class="bg-gray-200 py-2 pr-4">
                    <span> آدرس الکترونیک: <span> {{ authUser.email }}</span></span>
                </div>
                <div class="bg-gray-100 py-2 pr-4">
                    <span> کد ملی: <span> {{ authUser.national_code }}</span></span>
                </div>
                <div class="bg-gray-200 py-2 pr-4">
                    <span> شماره تلفن ثابت: <span>{{ authUser.phone }} </span></span>
                </div>
                <div class="bg-gray-100 py-2 pr-4">
                    <span> شماره تلفن همراه: <span> {{ authUser.cellphone }}</span></span>
                </div>
            </div>
            <div class="flex flex-col w-[420px]">
                <div class="bg-gray-100 py-2 pr-4">
                    <span> تاریخ تولد: <span>{{ authUser.birthday }} </span></span>
                </div>
                <div class="bg-gray-200 py-2 pr-4">
                    <span> جنسیت: <span> {{ authUser.sex }}</span></span>
                </div>
                <div class="bg-gray-100 py-2 pr-4">
                    <span> محل سکونت: <span> {{ authUser.residence }}</span></span>
                </div>
                <div class="bg-gray-200 py-2 pr-4">
                    <span> دریافت خبرنامه: <span> </span></span>
                </div>
                <div class="bg-gray-100 py-2 pr-4">
                    <span> شماره کارت: <span> </span></span>
                </div>
            </div>
        </div>
        <div class="flex justify-end text-sm">
            <NuxtLink to="/profile/additional-info" class="py-2 px-6 border border-gray-400">ویرایش اطلاعات</NuxtLink>
            <NuxtLink to="/user/recover-password" class="py-2 px-6 border border-gray-400"> تغییر رمز ورود </NuxtLink>
        </div>
    </div>
</template>

<script setup>

const {authUser} = useAuth()
const fullname = computed(() => authUser.value.firstname + ' ' + authUser.value.lastname)
</script>