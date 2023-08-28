<template>
    <LazyInfo />
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
                        <input type="text" class="p-[9px] w-[300px] hover:outline-none focus:outline-none border border-gray-400" placeholder="ایمیل خود را وارد کنید">
                        <button class="bg-gray-400 absolute left-8 p-[10px]">
                            <Icon size="21" name="uil:arrow-left" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
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
        <div class="flex justify-between gap-8 w-full">
            <div class="relative w-[700px] flex flex-col overflow-hidden" :class="showMore ? 'h-40' : ''">
                <div class="pb-4">فروشگاه اینترنتی مد و لباس دیجی‌استایل</div>
                <div class="text-sm text-justify">
                    <div class="pb-10">دیجی‌استایل، پس از تجربه‌ی موفق فروشگاه اینترنتی دیجی‌کالا به صورت تخصصی پا به عرصه مد، پوشاک و سبک زندگی گذاشت تا همان تجربه‌ی شیرین، در قالبی نو تکرار شود. در دیجی ‌استایل می‌توانید همه آنچه مرتبط با مد و پوشاک از انواع لباس زنانه، لباس مردانه و لباس بچگانه گرفته تا کیف و کفش و اکسسوری را با تخفیف ویژه در حراج ها، پیدا کنید و به سادگی یک ست کامل از جدیدترین‌ برندهای معتبر را بخرید.</div>
                    <div class="pb-10">در دیجی استایل برندهای ایرانی مشهوری نظیر چرم مشهد، درسا، کفش ملی، کفش شیما، شیفر، چرم کروکو، مارال چرم، بادی اسپینر، ال سی من، پاتن جامه، تن درست، زیبو، زی، کیکی رایکی، نیکتا و ... برندهای خارجی نظیر دیور (Dior)، آلدو (Aldo)، آندر آرمور (Under Armour)، نایکی (Nike)، اسکچرز (Skechers)، ریباک (Reebok)، سالامون (Salomon)، ری بن (Rey Ban)، ال سی وایکیکی (LC Waikiki)، پوما (Puma)، دنیلی (Daniellee) و... موجود است و می توانید جدیدترین محصولات این برندها رو به صورت آنلاین تهیه کنید و به راحتی درب منزل تحویل بگیرید.</div>
                    <div class="pb-10">همچنان دیجی استایل با ورود به دنیای زیبایی و سلامت انواع عطر و ادکلن، لوازم آرایش چشم و ابرو، آرایش صورت، لوازم شخصی برقی، بهداشت و زیبایی ناخن، ابزار سلامت و ... را در اختیار مشتریان قرار داده تا بتوانند از محصولات اورجینال و اصل خریداری کنند و در صورت مغایرت کالا تا 14 روز امکان بازگشت کالا را وجود دارد. پس همین حالا برای خرید انواع رنگ مو، سشوار، پنکیک، ماسک صورت، خط چشم، لاک ناخن، ادکلن، کانسیلر، شامپو، سایه ابرو و سایه چشم به فروشگاه اینترنتی دیجی استایل مراجعه کنید و تنها با چند کلیک محصول مورد نظر خود را سفارش دهید.</div>
                </div>
                <div @click="showMore = ! showMore"  class="absolute cursor-pointer bottom-0 w-1/2 py-2">{{ showMore ? 'مشاهده بیشتر' : 'بستن' }}<Icon name="uil:arrow-left" /></div>
            </div>
            <div class="flex gap-12 ">
                <div class="border border-slate-200 w-32 h-32 flex items-center justify-center">
                    <img src="/digimedia.png" width="100" alt="">
                </div>
                <div class="border border-slate-200 w-32 h-32 flex items-center justify-center">
                    <img src="/virtual.png" width="100" alt="">
                </div>
                <div class="border border-slate-200 w-32 h-32 flex items-center justify-center">
                    <img src="/trust.png" width="60" alt="">
                </div>
            </div>
        </div>
        <hr class="mt-4 bg-slate-400 h-[2px]">
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