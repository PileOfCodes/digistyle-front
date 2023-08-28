<template>
    <div>
        <img src="/paydar.png" alt="">
    </div>
    <div class="flex flex-col bg-gray-100 p-4 mx-12 my-4">
        <span class="font-bold text-xl mt-4">با لباس‌ها برای زمین</span>
        <span class="font-bold text-xl mt-2">انتخابی برای آینده زمین</span>
        <span class="text-sm mt-6">مد پایدار، سازوکاری است که زمین و زیست سبز موجودات در آن برایش اهمیت دارد. سبکی خاص در طراحی و تولید پوشاک که بر پایه مبانی اقتصادی، اجتماعی و زیست‌محیطی شکل گرفته است.</span>
        <span class="text-sm"> 
الگوی مصرفی‌ آگاهانه که ما را در یادگار گذاشتن زمین سبز برای نسل‌های بعد یاری می‌کند. در این بخش کالاهایی قرار دارند که طی یک فرآیند تخصصی بررسی شدند؛ کالاهایی که مواد اولیه استفاده شده در آنها و فرآیند تولیدشان با الگوهای محیط زیستی سازگاری بیشتری دارد. در این مسیر شما هم با انتخاب و خریدی آگاهانه می‌توانید در آینده‌ای سبز برای زمین نقش داشته باشید. </span>
    </div>
    <div v-for="product in products.data" :key="product.id">
        <div class="my-20 flex flex-wrap items-center justify-center gap-x-4 gap-y-8 ">
            <LazyProductCard3 :product=product />
        </div>
    </div>
    <!-- <div class="flex items-center justify-center">
        <div class="w-36 border border-black py-2 px-4 hover:bg-black hover:text-white duration-150 cursor-pointer flex items-center gap-2 justify-center">
            <span> نمایش همه </span>
            <Icon size="17" name="uil:angle-left" />
        </div>
    </div> -->
</template>

<script setup>
const {public: {apiBase}} = useRuntimeConfig()
const {data: products} = await useFetch(`${apiBase}/paidar/products`)
</script>