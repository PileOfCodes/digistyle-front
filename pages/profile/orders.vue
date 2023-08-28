<template>
    <div class="w-full">
        <div class="relative flex items-center justify-between border-b pb-4">
            <div v-if="isSearched" class="flex">
                <div @click="section = 'processing'" :class="{'border-b-4 pb-3 border-black' : section == 'processing'}" class="flex absolute top-0 items-center gap-2 cursor-pointer text-gray-400">
                    <span class="text-sm" :class="{'text-black' : section == 'processing'}">در حال پردازش</span>
                    <span :class="section == 'processing' ? 'bg-black' : 'bg-gray-400'"
                    class="flex justify-center items-center p-1 w-[24px] rounded-full text-white text-xs">0</span>
                </div>
                <div @click="section = 'delivered'" :class="{'border-b-4 pb-3 border-black' : section == 'delivered'}" class="flex items-center gap-2 cursor-pointer absolute right-[140px] top-0 text-gray-400">
                    <span class="text-sm" :class="{'text-black' : section == 'delivered'}"> تحویل شده </span>
                    <span :class="section == 'delivered' ? 'bg-black' : 'bg-gray-400'"
                    class="flex justify-center items-center p-1 w-[24px] rounded-full text-white text-xs">0</span>
                </div>
                <div @click="section = 'canceled'" :class="{'border-b-4 pb-3 border-black' : section == 'canceled'}" class="flex items-center gap-2 cursor-pointer absolute right-[260px] top-0 text-gray-400">
                    <span class="text-sm" :class="{'text-black' : section == 'canceled'}"> لغو شده </span>
                    <span :class="section == 'canceled' ? 'bg-black' : 'bg-gray-400'"
                    class="flex justify-center items-center p-1 w-[24px] rounded-full text-white text-xs">0</span>
                </div>
                <div @click="section = 'returned'" :class="{'border-b-4 pb-3 border-black' : section == 'returned'}" class="flex items-center gap-2 cursor-pointer absolute right-[360px] top-0 text-gray-400">
                    <span class="text-sm" :class="{'text-black' : section == 'returned'}"> مرجوعی </span>
                    <span :class="section == 'returned' ? 'bg-black' : 'bg-gray-400'"
                    class="flex justify-center items-center p-1 w-[24px] rounded-full text-white text-xs">0</span>
                </div>
            </div>
            <input v-if="!isSearched" type="text" autofocus class="outline-none border-none w-full" placeholder="عنوان کالا یا شماره سفارش مورد نظرتان را جستجو کنید">
            <Icon @click="isSearched = ! isSearched" size="21" :name="isSearched ? 'uil:search' : 'ci:close-big'" class="cursor-pointer " />
        </div>
        <div v-if="isSearched">
            <div v-if="section == 'processing'" class="mt-20 ">
                <div class="flex items-center justify-center">
                    <p>شما هیچ سفارش در حال پردازش ندارید.</p>
                </div>
            </div>
            <div v-if="section == 'delivered'" class="mt-20 ">
                <div class="flex items-center justify-center">
                    <p>شما هیچ سفارش تحویل شده ای ندارید.</p>
                </div>
            </div>
            <div v-if="section == 'canceled'" class="mt-20 ">
                <div class="flex items-center justify-center">
                    <p>شما هیچ سفارش لغو شده ای ندارید.</p>
                </div>
            </div>
            <div v-if="section == 'returned'" class="mt-20 ">
                <div class="flex items-center justify-center">
                    <p>شما هیچ سفارش مرجوعی ای ندارید.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const isSearched = ref(true)
const section = ref('processing')

</script> 