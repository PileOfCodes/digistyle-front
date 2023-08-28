<template>
    <div>
        <div>لیست نظرات شما</div>
        <div v-if="isComment" class="w-full mt-4">
            <div class="bg-gray-200 flex items-center justify-center gap-[270px] text-sm pl-20 pr-4 py-1">
                <span>نام محصولی که در آن نظر خود را ثبت کرده اید</span>
                <span>وضعیت</span>
                <span>مشاهده نظر</span>
            </div>
            <div class="relative bg-gray-100 flex items-center justify-center gap-[270px] text-sm mt-2 py-5">
                <span class="absolute right-4">نام محصول </span>
                <span class="absolute text-xs text-green-400 right-[540px] "> تایید شده</span>
                <NuxtLink to="#" class="absolute left-24 text-center border py-1 px-2 border-gray-600">
                    <Icon name="uil:link" />
                </NuxtLink>
            </div>
        </div>
        <div v-else class="mt-2 text-md text-gray-600">هیچ دیدگاهی ثبت نشده است</div>
    </div>
</template>

<script setup>

const isComment = ref(false)
</script>