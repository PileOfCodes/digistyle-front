<template>
            <div class="flex flex-col my-8 p-12 border-t border-b border-gray-400 w-full ">
            <div class="text-2xl font-bold ">پیشنهادهای مشابه</div>
            <swiper
            :cssMode="true"
            :navigation="true"
            :slides-per-view="2"
            :slides-per-group="1"
            :space-between="480"
            :effect="'creative'"
            :autoplay="{
                delay: 8000,
                disableOnInteraction: true,
            }"
            :creative-effect="{
            prev: {
                shadow: false,
                translate: ['-20%', 0, -1],
            },
            next: {
                translate: ['100%', 0, 0],
            },
            }"
            :mousewheel="true"
            :keyboard="true"
            :modules="[SwiperNavigation]"
        >
            <swiper-slide>
            <div class="bg-white w-[300px] shadow-xl px-3 py-4 rounded-sm group">
                <div class="flex flex-col">
                    <div class="relative bg-white h-[340px] my-2">
                        <a href="#">
                            <span class="absolute right-0 top-0 bg-white p-2">تن زیب</span>
                        </a>
                        <a href="#">
                            <img src="/style-1.jpg" alt="">
                        </a>
                        <div class="absolute bottom-0 left-0  w-14 p-3 bg-gray-900 text-white ">40%</div>
                    </div>
                    <div class="flex justify-between items-center  py-2">
                        <div class="">ست تیشرت و شلوارک تن زیب مدل 55-2365423</div>
                    </div>
                    <div class="flex justify-between gap-8 py-4">
                        <span></span>
                        <div class="flex gap-2 items-center">
                        <del class="text-slate-500 text-sm">395000</del>
                        <span class="text-lg">270000 تومان</span>
                        </div>
                    </div>
                </div>
            </div>
            </swiper-slide>  
            <swiper-slide>
            <div class="bg-white w-[300px] shadow-xl px-3 py-4 rounded-sm group">
                <div class="flex flex-col">
                    <div class="relative bg-white h-[340px] my-2">
                        <a href="#">
                            <span class="absolute right-0 top-0 bg-white p-2">تن زیب</span>
                        </a>
                        <a href="#">
                            <img src="/style-2.jpg" alt="">
                        </a>
                        <div class="absolute bottom-0 left-0  w-14 p-3 bg-gray-900 text-white ">40%</div>
                    </div>
                    <div class="flex justify-between items-center  py-2">
                        <div class="">ست تیشرت و شلوارک تن زیب مدل 55-2365423</div>
                    </div>
                    <div class="flex justify-between gap-8 py-4">
                        <span></span>
                        <div class="flex gap-2 items-center">
                        <del class="text-slate-500 text-sm">395000</del>
                        <span class="text-lg">270000 تومان</span>
                        </div>
                    </div>
                </div>
            </div>
            </swiper-slide>  
            <swiper-slide>
            <div class="bg-white w-[300px] shadow-xl px-3 py-4 rounded-sm group">
                <div class="flex flex-col">
                    <div class="relative bg-white h-[340px] my-2">
                        <a href="#">
                            <span class="absolute right-0 top-0 bg-white p-2">تن زیب</span>
                        </a>
                        <a href="#">
                            <img src="/style-3.jpg" alt="">
                        </a>
                        <div class="absolute bottom-0 left-0  w-14 p-3 bg-gray-900 text-white ">40%</div>
                    </div>
                    <div class="flex justify-between items-center  py-2">
                        <div class="">ست تیشرت و شلوارک تن زیب مدل 55-2365423</div>
                    </div>
                    <div class="flex justify-between gap-8 py-4">
                        <span></span>
                        <div class="flex gap-2 items-center">
                        <del class="text-slate-500 text-sm">395000</del>
                        <span class="text-lg">270000 تومان</span>
                        </div>
                    </div>
                </div>
            </div>
            </swiper-slide>  
            <swiper-slide>
            <div class="bg-white w-[300px] shadow-xl px-3 py-4 rounded-sm group">
                <div class="flex flex-col">
                    <div class="relative bg-white h-[340px] my-2">
                        <a href="#">
                            <span class="absolute right-0 top-0 bg-white p-2">تن زیب</span>
                        </a>
                        <a href="#">
                            <img src="/style-4.jpg" alt="">
                        </a>
                        <div class="absolute bottom-0 left-0  w-14 p-3 bg-gray-900 text-white ">40%</div>
                    </div>
                    <div class="flex justify-between items-center  py-2">
                        <div class="">ست تیشرت و شلوارک تن زیب مدل 55-2365423</div>
                    </div>
                    <div class="flex justify-between gap-8 py-4">
                        <span></span>
                        <div class="flex gap-2 items-center">
                        <del class="text-slate-500 text-sm">395000</del>
                        <span class="text-lg">270000 تومان</span>
                        </div>
                    </div>
                </div>
            </div>
            </swiper-slide>  
            <swiper-slide>
            <div class="bg-white w-[300px] shadow-xl px-3 py-4 rounded-sm group">
                <div class="flex flex-col">
                    <div class="relative bg-white h-[340px] my-2">
                        <a href="#">
                            <span class="absolute right-0 top-0 bg-white p-2">تن زیب</span>
                        </a>
                        <a href="#">
                            <img src="/style-5.jpg" alt="">
                        </a>
                        <div class="absolute bottom-0 left-0  w-14 p-3 bg-gray-900 text-white ">40%</div>
                    </div>
                    <div class="flex justify-between items-center  py-2">
                        <div class="">ست تیشرت و شلوارک تن زیب مدل 55-2365423</div>
                    </div>
                    <div class="flex justify-between gap-8 py-4">
                        <span></span>
                        <div class="flex gap-2 items-center">
                        <del class="text-slate-500 text-sm">395000</del>
                        <span class="text-lg">270000 تومان</span>
                        </div>
                    </div>
                </div>
            </div>
            </swiper-slide>  
            </swiper>
        </div>
</template>