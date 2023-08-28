<template>
    <div class="bg-[#f5f5f5] w-full py-20 ">
        <div class="flex gap-4">
            <div class="flex flex-col space-y-64 mr-24">
                <img src="/shegeft.svg" width="120" height="80" alt="">
                <NuxtLink to="/promotion/incredible-offers" class="bg-[#F04D7D] border hover:bg-transparent hover:text-[#F04D7D] border-[#F04D7D] text-white text-center  w-[140px] px-3 py-2 transition-all duration-150" target="_blank">مشاهده همه</NuxtLink>
            </div>
            <LazySuggestSwiper />
        </div>
    </div>
</template>


