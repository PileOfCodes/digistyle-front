<template>
    <div>
        <div class="flex justify-between items-center ">
            <span>فروشندگان این کالا</span>
            <Icon @click="emit('openSellerCard', false)" class="cursor-pointer" size="24" name="uil:times" />
        </div>
        <div class="flex flex-col overflow-y-auto px-4 h-[900px] mt-4">
            <div class="flex flex-col space-y-4 border-t py-6">
                <div class="flex gap-2 text-sm items-center">
                    <Icon size="24" name="uil:home-alt" />
                    <span>زمانه</span>
                    <span class="w-[5px] h-[5px] rounded-full bg-gray-200 "></span>
                    <span class="text-[12px]">85% رضایت از کالا</span>
                    <span class="text-xs text-green-600 bg-green-100 py-1 px-2 rounded-full">برگزیده</span>
                </div>
                <div class="flex gap-2 mr-8 text-xs text-gray-600">
                    <div class="flex flex-col space-y-2 items-center">
                        <div class="flex  deliveryIcon"></div>
                        <div class="flex  warrantyIcon"></div>
                    </div>
                    <div class="flex flex-col space-y-2 ">
                        <span>آماده ارسال</span>
                        <span> گارانتی اصالت و سلامت فیزیکی کالا </span>
                    </div>
                </div>
                <div class="flex justify-between items-center ">
                    <button class="p-2 text-xs bg-black text-white hover:text-black hover:bg-white border border-black duration-150">افزودن به سبد خرید </button>
                    <div class="flex flex-col items-end space-y-1"> 
                        <div class="font-bold text-sm">265,000 <span class="text-sm">تومان</span></div>
                        <div class="flex gap-2">
                        <del class="text-xs text-gray-600 ">680,000</del>
                    <div class="bg-black text-white text-xs flex items-center justify-center w-7 h-4">61%</div>
                </div>
            </div>
                </div>
            </div>
            <div class="flex flex-col space-y-4 border-t py-6">
                <div class="flex gap-2 text-sm items-center">
                    <Icon size="24" name="uil:home-alt" />
                    <span>زمانه</span>
                    <span class="w-[5px] h-[5px] rounded-full bg-gray-200 "></span>
                    <span class="text-[12px]">85% رضایت از کالا</span>
                    <span class="text-xs text-green-600 bg-green-100 py-1 px-2 rounded-full">برگزیده</span>
                </div>
                <div class="flex gap-2 mr-8 text-xs text-gray-600">
                    <div class="flex flex-col space-y-2 items-center">
                        <div class="flex  deliveryIcon"></div>
                        <div class="flex  warrantyIcon"></div>
                    </div>
                    <div class="flex flex-col space-y-2 ">
                        <span>آماده ارسال</span>
                        <span> گارانتی اصالت و سلامت فیزیکی کالا </span>
                    </div>
                </div>
                <div class="flex justify-between items-center ">
                    <button class="p-2 text-xs bg-black text-white hover:text-black hover:bg-white border border-black duration-150">افزودن به سبد خرید </button>
                    <div class="flex flex-col items-end space-y-1"> 
                        <div class="font-bold text-sm">265,000 <span class="text-sm">تومان</span></div>
                        <div class="flex gap-2">
                        <del class="text-xs text-gray-600 ">680,000</del>
                    <div class="bg-black text-white text-xs flex items-center justify-center w-7 h-4">61%</div>
                </div>
            </div>
                </div>
            </div>
            <div class="flex flex-col space-y-4 border-t py-6">
                <div class="flex gap-2 text-sm items-center">
                    <Icon size="24" name="uil:home-alt" />
                    <span>زمانه</span>
                    <span class="w-[5px] h-[5px] rounded-full bg-gray-200 "></span>
                    <span class="text-[12px]">85% رضایت از کالا</span>
                    <span class="text-xs text-green-600 bg-green-100 py-1 px-2 rounded-full">برگزیده</span>
                </div>
                <div class="flex gap-2 mr-8 text-xs text-gray-600">
                    <div class="flex flex-col space-y-2 items-center">
                        <div class="flex  deliveryIcon"></div>
                        <div class="flex  warrantyIcon"></div>
                    </div>
                    <div class="flex flex-col space-y-2 ">
                        <span>آماده ارسال</span>
                        <span> گارانتی اصالت و سلامت فیزیکی کالا </span>
                    </div>
                </div>
                <div class="flex justify-between items-center ">
                    <button class="p-2 text-xs bg-black text-white hover:text-black hover:bg-white border border-black duration-150">افزودن به سبد خرید </button>
                    <div class="flex flex-col items-end space-y-1"> 
                        <div class="font-bold text-sm">265,000 <span class="text-sm">تومان</span></div>
                        <div class="flex gap-2">
                        <del class="text-xs text-gray-600 ">680,000</del>
                    <div class="bg-black text-white text-xs flex items-center justify-center w-7 h-4">61%</div>
                </div>
            </div>
                </div>
            </div>
            <div class="flex flex-col space-y-4 border-t py-6">
                <div class="flex gap-2 text-sm items-center">
                    <Icon size="24" name="uil:home-alt" />
                    <span>زمانه</span>
                    <span class="w-[5px] h-[5px] rounded-full bg-gray-200 "></span>
                    <span class="text-[12px]">85% رضایت از کالا</span>
                    <span class="text-xs text-green-600 bg-green-100 py-1 px-2 rounded-full">برگزیده</span>
                </div>
                <div class="flex gap-2 mr-8 text-xs text-gray-600">
                    <div class="flex flex-col space-y-2 items-center">
                        <div class="flex  deliveryIcon"></div>
                        <div class="flex  warrantyIcon"></div>
                    </div>
                    <div class="flex flex-col space-y-2 ">
                        <span>آماده ارسال</span>
                        <span> گارانتی اصالت و سلامت فیزیکی کالا </span>
                    </div>
                </div>
                <div class="flex justify-between items-center ">
                    <button class="p-2 text-xs bg-black text-white hover:text-black hover:bg-white border border-black duration-150">افزودن به سبد خرید </button>
                    <div class="flex flex-col items-end space-y-1"> 
                        <div class="font-bold text-sm">265,000 <span class="text-sm">تومان</span></div>
                        <div class="flex gap-2">
                        <del class="text-xs text-gray-600 ">680,000</del>
                    <div class="bg-black text-white text-xs flex items-center justify-center w-7 h-4">61%</div>
                </div>
            </div>
                </div>
            </div>
            <div class="flex flex-col space-y-4 border-t py-6">
                <div class="flex gap-2 text-sm items-center">
                    <Icon size="24" name="uil:home-alt" />
                    <span>زمانه</span>
                    <span class="w-[5px] h-[5px] rounded-full bg-gray-200 "></span>
                    <span class="text-[12px]">85% رضایت از کالا</span>
                    <span class="text-xs text-green-600 bg-green-100 py-1 px-2 rounded-full">برگزیده</span>
                </div>
                <div class="flex gap-2 mr-8 text-xs text-gray-600">
                    <div class="flex flex-col space-y-2 items-center">
                        <div class="flex  deliveryIcon"></div>
                        <div class="flex  warrantyIcon"></div>
                    </div>
                    <div class="flex flex-col space-y-2 ">
                        <span>آماده ارسال</span>
                        <span> گارانتی اصالت و سلامت فیزیکی کالا </span>
                    </div>
                </div>
                <div class="flex justify-between items-center ">
                    <button class="p-2 text-xs bg-black text-white hover:text-black hover:bg-white border border-black duration-150">افزودن به سبد خرید </button>
                    <div class="flex flex-col items-end space-y-1"> 
                        <div class="font-bold text-sm">265,000 <span class="text-sm">تومان</span></div>
                        <div class="flex gap-2">
                        <del class="text-xs text-gray-600 ">680,000</del>
                    <div class="bg-black text-white text-xs flex items-center justify-center w-7 h-4">61%</div>
                </div>
            </div>
                </div>
            </div>
            <div class="flex flex-col space-y-4 border-t py-6">
                <div class="flex gap-2 text-sm items-center">
                    <Icon size="24" name="uil:home-alt" />
                    <span>زمانه</span>
                    <span class="w-[5px] h-[5px] rounded-full bg-gray-200 "></span>
                    <span class="text-[12px]">85% رضایت از کالا</span>
                    <span class="text-xs text-green-600 bg-green-100 py-1 px-2 rounded-full">برگزیده</span>
                </div>
                <div class="flex gap-2 mr-8 text-xs text-gray-600">
                    <div class="flex flex-col space-y-2 items-center">
                        <div class="flex  deliveryIcon"></div>
                        <div class="flex  warrantyIcon"></div>
                    </div>
                    <div class="flex flex-col space-y-2 ">
                        <span>آماده ارسال</span>
                        <span> گارانتی اصالت و سلامت فیزیکی کالا </span>
                    </div>
                </div>
                <div class="flex justify-between items-center ">
                    <button class="p-2 text-xs bg-black text-white hover:text-black hover:bg-white border border-black duration-150">افزودن به سبد خرید </button>
                    <div class="flex flex-col items-end space-y-1"> 
                        <div class="font-bold text-sm">265,000 <span class="text-sm">تومان</span></div>
                        <div class="flex gap-2">
                        <del class="text-xs text-gray-600 ">680,000</del>
                    <div class="bg-black text-white text-xs flex items-center justify-center w-7 h-4">61%</div>
                </div>
            </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const emit = defineEmits(['openSellerCard'])

</script>

<style scoped>

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}

</style>