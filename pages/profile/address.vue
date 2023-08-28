<template>
    <div class="w-full">
        <NuxtLink to="/profile" class="flex gap-2 border-b border-[#f0f3f6] w-full pb-2">
            <Icon size="24" name="uil:arrow-right" />
            <span>آدرس ها</span>
        </NuxtLink>
        <div>
            <div v-if="addresses.length > 0">
                <div class="flex gap-2 border-b border-[#f0f3f6] w-full py-6">
                    <LazyAddressCreate  />
                </div>
                <div class="flex flex-col mt-4 text-sm pb-4 border-b " v-for="address in addresses" :key="address.id">
                    <div v-if="showCard" class="fixed left-0 top-0 buttom-0 w-full h-full bg-black opacity-[0.9] z-[1000]">
                        <LazyAddressDelete :addressId="address.id" @showDeleteCard="showCard = false" />
                    </div>
                    <div class="relative flex items-center justify-between ">
                        <span>{{ address.address }}</span>
                        <div class="absolute top-0 left-4">
                            <LazyAddressEdit :address="address" />
                            <div @click="deleteCard" class="flex gap-2 items-center mt-4 cursor-pointer">
                                <Icon color="red" size="21" name="uiw:delete" />
                                <span>حذف آدرس</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <div class="flex items-center gap-2">
                            <Icon size="21" name="uil:user" />
                            <span>{{ address.receiver_name }}</span>
                        </div>
                        <div class="flex items-center mt-2 gap-2">
                            <Icon size="21" name="uil:phone" />
                            <span>{{ address.mobile }}</span>
                        </div>
                        <div class="flex items-center mt-2 gap-2">
                            <Icon size="21" name="uil:home" />
                            <span>{{ address.residence }}</span>
                        </div>
                        <div class="flex items-center mt-2 gap-2">
                            <Icon size="21" name="ic:outline-email" />
                            <span>{{ address.postal_code }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else class="flex flex-col items-center justify-center space-y-4 mt-20">
                <div>
                    <img src="/gps.svg" width="150" height="150" alt="">
                </div>
                <div class="text-md w-52 text-center"> با ثبت آدرس خود روند خریدتان را سریعتر کنید</div>
                <LazyAddressCreate  />
            </div>
        </div>
    </div>
</template>

<script setup>

const showCard = ref(false)

function deleteCard() {
    showCard.value = true
}

const {data: addresses, refresh} = await useFetch('/api/profile/address')
provide('getRefreshMethod', refresh)
</script>