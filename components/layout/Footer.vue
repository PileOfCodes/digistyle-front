<template>
    <Info />
    <div class="px-20">
        <div class="flex items-end">
            <div class="w-[160px]">
                <img src="/digi.svg" width="160" alt="">
            </div>
            <hr class="w-full mr-2">
        </div>
        <div class="flex gap-32 py-8">
            <div class="flex flex-col space-y-2">
                <div class="font-bold text-lg">خرید</div>
                <div class="text-gray-600 flex flex-col space-y-2">
                    <div>مردانه</div>
                    <div>زنانه</div>
                    <div>بچه گانه</div>
                    <div>زیبایی و سلامت</div>
                </div>
            </div>
            <div class="flex flex-col space-y-2">
                <div class="font-bold text-lg">خدمات مشتریان</div>
                <div class="text-gray-600 flex flex-col space-y-2">
                    <div>پاسخ به پرسش های متداول</div>
                    <div>رویه های بازگرداندن کالا</div>
                    <div>شرایط استفاده </div>
                    <div> حریم خصوصی</div>
                </div>
            </div>
            <div class="flex flex-col space-y-2">
                <div class="font-bold text-lg">اطلاعات دیجی استایل</div>
                <div class="text-gray-600 flex flex-col space-y-2">
                    <div>درباره دیجی استایل</div>
                    <div>تماس با دیجی استایل</div>
                    <div> همکاری با دیجی استایل</div>
                </div>
            </div>
            <div class="flex flex-col space-y-2">
                <div class="flex gap-28 ">
                    <div class="font-bold text-lg">تلفن پشتیبانی: 021-61930300</div>
                    <div id="bookmark" class="border cursor-pointer border-black w-8 h-8 flex justify-center items-center">
                        <Icon size="19" name="uil:arrow-circle-up"/>
                    </div>
                </div>
                <div class="flex gap-36 py-4">
                    <a href="#">
                        <Icon size="23" name="uil:instagram" />
                    </a>
                    <a href="#">
                        <Icon size="23" name="uil:whatsapp" />
                    </a>
                    <a href="#">
                        <Icon size="23" name="uil:twitter" />
                    </a>
                </div>
                <div class="py-2 text-sm"><a href="#">ثبت نام در خبرنامه دیجی استایل</a></div>
                <div class="py-2">
                    <div class="relative">
                        <input type="text" id="landingEmail" class="p-[9px] w-[300px] hover:outline-none focus:outline-none border border-gray-400" placeholder="ایمیل خود را وارد کنید">
                        <button class="bg-gray-400 absolute left-8 p-[10px]">
                            <Icon size="21" name="uil:arrow-left" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <hr class="my-4 bg-slate-400 h-[2px]">
        <div class="flex items-center  gap-72">
            <div class=""><a href="#">دانلود اپلیکیشن های دیجی استایل</a></div>
            <div class="flex gap-2 justify-center items-center">
                <div class="flex items-center justify-center gap-2 border border-slate-400 px-1 h-12">
                    <span class="font-bold text-[12px]">دریافت از</span>
                    <img src="/sib.png" width="100px" alt="">
                </div>
                <div class="flex items-center justify-center gap-2 border border-slate-400 px-1 h-12">
                    <span class="font-bold text-[12px]">دریافت از</span>
                    <img src="/sib.png" width="100px" alt="">
                </div>
                <div class="flex items-center justify-center gap-2 border border-slate-400 px-1 h-12">
                    <span class="font-bold text-[12px]">دریافت از</span>
                    <img src="/miket.png" width="100px" alt="">
                </div>
                <div class="flex items-center justify-center gap-2 border border-slate-400 px-1 h-12">
                    <div class="font-bold text-[12px]">دریافت از</div>
                    <img src="/Google-Play.png" width="100px" alt="">
                </div>
            </div>
        </div>
        <hr class="my-4 bg-slate-400 h-[2px]">
        <div class="flex justify-between items-center py-4">
            <div class="text-slate-600">کلیه حقوق این سایت متعلق به شرکت نو آوران فن آوازه (فروشگاه اینترنتی دیجی استایل) می باشد.</div>
            <div class="text-md font-sans font-bold text-slate-800">digistyle.com - 2023 © Copyright</div>
        </div>
    </div>
</template>

<script setup>
const showMore = ref(true)

onMounted(() => {
    var bookmark =  document.getElementById('bookmark')
    bookmark.addEventListener('click', () => {
        window.scrollTo(0,0)
    })
})

</script>