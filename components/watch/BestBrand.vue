<template>
    <div class="flex w-full bg-[#e9e9e9] py-12 gap-4">
        <div class="flex flex-col w-[400px] items-center space-y-[200px]">
            <div class=" text-center text-2xl mt-6">   بهترین برندها  </div>
            <button class="bg-white border hover:bg-black hover:text-white border-black text-black w-[140px] px-3 py-2 transition-all duration-150 ease-in-out">مشاهده همه</button>
        </div>
        <LazyWatchSecondCardSlider />
    </div>
</template>