<template>
        <div>
        <header class="w-full py-6 shadow-lg flex items-center justify-center">
            <NuxtLink to="/">
                <img src="/digi.svg" class="w-36" alt="">
            </NuxtLink>
        </header>
        <slot />
        <div class="flex flex-col  items-center justify-center mt-12">
            <span class="text-xs">Login Powered by</span>
            <span><img src="/digikala.svg" class="w-28" alt=""></span>
        </div>
        <footer class="flex justify-between items-center absolute bottom-0 bg-[#f0f0f0] text-[12px] w-full px-32 py-3" >
            <div>کليه حقوق اين سايت متعلق به شرکت آوازه نو پوشان پارسی (فروشگاه اینترنتی دیجی‌استایل) می‌باشد.</div>
            <div>digistyle.com - 2023 © Copyright</div>
        </footer>
    </div>
</template>