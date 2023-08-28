<template>
    <div class="bg-[#dc3165] w-full py-8 px-16">
        <div class="flex flex-col">
            <div class="flex justify-between">
                <div class="flex items-center text-white justify-center gap-2 h-10 overflow-hidden">
                    <span class="text-2xl font-black">  کالاهای شگفت آویز </span>
                </div>
                <div class="flex items-center justify-center gap-2 border border-white text-white px-6 hover:bg-white hover:text-black bg-[#dc3165] cursor-pointer duration-150">
                    <div>نمایش تمام کالاها</div>
                    <Icon name="material-symbols:arrow-back-ios-new-rounded" />
                </div>
            </div>
            <div class="container mt-10">
                <LazySuggestSwiper />
            </div>
        </div>
    </div>
</template>

