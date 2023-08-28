<template>
    <div class="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 flex flex-col border p-4 w-[400px] bg-white">
        <span>آیا از حذف این آدرس مطمئن هستید؟</span>
        <div class="flex items-center justify-center gap-4 mb-2 mt-12">
            <button @click="() => emit('showDeleteCard', false)" class="py-4 px-12 border hover:text-[#ef5a88] duration-100">خیر</button>
            <button @click="deleteAddress" class="py-4 bg-[#ef5a88] text-white transition-all duration-100 hover:text-[#ef5a88] hover:bg-white px-12 border">بله</button>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['showDeleteCard'])
const props = defineProps(['addressId'])
const getRefresh = inject('getRefreshMethod')
async function deleteAddress() {
    try{
        await $fetch('/api/profile/address/delete', {
            method: "POST",
            body: {address_id : props.addressId}
        })
        emit('showDeleteCard', false)
        getRefresh()
    }catch(error) {
        console.log(error.data)
    }
}

</script>