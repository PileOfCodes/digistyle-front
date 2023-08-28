<template>
    <div class="w-full mx-auto px-20 mt-12 mb-20">
        <div class="mt-20 flex items-center justify-center ">       
            <div class="stepper_progress_container">
                <div class="stepper_progress" id="stepper_progress"></div>
                <div class="circle active">
                    <img src="/bag.svg" width="40" height="40" alt="cart">
                </div>
                <div class="circle ">
                    <img src="/gps.svg" width="40" height="40" alt="shipping">
                </div>
                <div class="circle ">
                    <img src="/ticket.svg" width="40" height="40" alt="ticket">
                </div>
            </div>
        </div>
        <div class="w-full mt-12 relative">
            <span class="font-bold ">سبد خرید شما</span>
            <div class="relative border border-gray-200 rounded-sm p-4 flex my-4" v-for="product in allItems" :key="product.id">
                <div class="flex items-center justify-center ">
                    <img :src="product.primary_image" class="w-32" alt="">
                </div>
                <div class="flex flex-col space-y-2 w-[300px]">
                    <div class="font-bold text-xl">
                        <span v-if="product.brand != null">{{ product.brand.name }}</span>
                        <span v-else>متفرقه</span>
                    </div>
                    <span class="text-sm text-slate-700"> {{ product.title }}</span>
                    <!-- <span class="text-sm ">رنگ: مشکی</span> -->
                    <span class="text-sm ">سایز: {{ product.sellingProperty }}</span>
                    <span class="text-sm ">کد محصول: {{ product.sku }}</span>
                    <span class="text-sm pt-6"> فروشنده: {{ product.sellingSeller }}</span>
                </div>
                <div class="flex flex-col space-y-2 w-[700px]">
                    <div class="mt-[70px] flex items-center">
                        <div class="flex items-center w-[430px]">
                            <span class="ml-4">تعداد: </span>
                            <button @click="() => product.qty < product.sellingQuantity && store.increment(product.id, product.sellingProperty)" class="p-1">+</button>
                            <span class="mx-4 px-2 border border-slate-400">{{ product.qty }}</span>
                            <button @click="() => product.qty > 1 && store.decrement(product.id, product.sellingProperty)" class="p-1">-</button>
                        </div>
                        <div class="flex items-center gap-20 text-sm ">
                            <div class="flex flex-col space-y-2 w-[300px]">
                                <div class="flex items-center justify-start ">
                                    <span class="basis-full">قیمت واحد</span>
                                    <div class="flex gap-1">
                                        <span> {{ numberFormat(product.originalPrice * product.qty) }}</span>
                                        <span>تومان</span>
                                    </div>
                                </div>
                                <div class="flex items-center " v-if="product.sellingDiscount != null">
                                    <span class="text-[#f04d7d] basis-full" > تخفیف حراج استایل</span>
                                    <div class="flex gap-1">
                                        <span class="text-[#f04d7d]" >{{ numberFormat(product.originalPrice * product.qty - roundIt(countDiscount(product.originalPrice * product.qty, product.sellingDiscount)) ) }}</span>
                                        <span class="text-[#f04d7d]">تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr class="w-full h-[2px] ">
                    <div class="mt-8 flex items-center">
                        <div class="h-[2px] w-[430px]"></div>
                        <div class="flex items-center gap-20 text-sm ">
                            <div class="flex flex-col w-[300px]">
                                <div class="flex items-center " v-if="product.sellingDiscount != null">
                                    <span class="basis-full">قیمت نهایی </span>
                                    <div class="flex gap-1">
                                        <span class="">{{ numberFormat(roundIt(countDiscount(product.originalPrice * product.qty, product.sellingDiscount))) }} </span>
                                        <span>تومان</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div @click="store.removeItemFromCart(product.id, product.sellingProperty)" class="cursor-pointer bg-slate-200 flex items-center justify-center rounded-full w-6 h-6">
                    <Icon size="19" name="ci:close-small"/>
                </div>
                <!-- <hr class="w-[570px] h-1  absolute right-[490px] top-[150px]"> -->
            </div>
            <hr class="mt-6">
            <div class="mt-6 bg-gray-100  flex items-center justify-center gap-[140px] py-4">
                <div class="flex justify-center gap-20 items-center border-l border-slate-200  pl-28 py-8">
                    <a href="#" class="flex justify-center items-center gap-2">
                        <div class="w-[40px]">
                            <img src="/delivery.svg" width="40" alt="delivery icon">
                        </div>
                        <div class="text-sm w-20 text-center">تحویل سریع و آسان</div>
                    </a>
                    <a href="#" class="flex justify-center items-center gap-2">
                        <div class="w-[40px]">
                            <img src="/fourteen.svg" width="40" alt="delivery icon">
                        </div>
                        <div class="text-sm w-20 text-center">14 روز ضمانت بازگشت کالا</div>
                    </a>
                    <a href="#" class="flex justify-center items-center gap-2">
                        <div class="w-[40px]">
                            <img src="/warranty.svg" width="40" alt="delivery icon">
                        </div>
                        <div class="text-sm w-20 text-center">ضمات اصل بودن کالا</div>
                    </a>
                </div>
                <div class="flex gap-32 text-sm">
                    <div class="flex flex-col space-y-2 w-[300px]">
                        <div class="flex items-center justify-start ">
                            <span class="basis-full">جمع کل سفارش</span>
                            <div class="flex gap-1">
                                <span> {{ numberFormat(store.totalOrderPrice) }}</span>
                                <span>تومان</span>
                            </div>
                        </div>
                        <div class="flex items-center ">
                            <span class="text-[#f04d7d] basis-full" > تخفیف </span>
                            <div class="flex gap-1">
                                <span class="text-[#f04d7d]" >{{ numberFormat(store.totalDiscountPrice) }}</span>
                                <span class="text-[#f04d7d]">تومان</span>
                            </div>
                        </div>
                        <hr class="">
                        <div class="flex items-center justify-start ">
                            <span class="basis-full"> قیمت نهایی </span>
                            <div class="flex gap-1">
                                <span> {{ numberFormat(store.totalPrice) }}</span>
                                <span>تومان</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-10 flex  justify-between items-center">
            <div class="flex gap-2">
                <Icon size="24" class="text-[#f04d7d]" name="ci:warning-outline" />
                <div class="w-[700px] text-md">با توجه به محدود بودن موجودی کالاها، افزودن کالا به سبد خرید به معنی رزرو آن نیست. جهت نهایی کردن خرید پیش از اتمام موجودی، همین حالا سبد خود را ثبت و خرید را تکمیل کنید.</div>
            </div>
            <button  id="nextStep" class="btn">ثبت و مرحله بعد</button>
        </div>
    </div>
</template>


<script setup>
import { useCartStore } from '~~/store/cart'

const store = useCartStore()
const allItems = computed(() => store.allItems)
definePageMeta({
    key: route => route.fullPath,
    layout: 'simple'
})

onMounted(() => {
    const next = document.getElementById('nextStep')
    next.addEventListener('click', () => {
        if(localStorage.getItem('stepper') !== null) {
            localStorage.removeItem('stepper')
            localStorage.setItem('stepper', 2)
        }else {
            localStorage.setItem('stepper', 2)
        }
        goTo()
    })
})

function goTo() {
    return navigateTo('/shipping')
}
</script>

<style>

:root {
    --line-border-fill: #41c1c6;
    --line-border-empty: #ccc;
}
.stepper_progress_container {
    display: flex;
    justify-content:space-between;
    max-width: 100%;
    width: 500px;
    position: relative;
}
.stepper_progress_container::before {
    content: '';
    background-color: var(--line-border-empty);
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 5px;
    width: 100%;
    z-index: -1;
    transition: 0.4s ease;
}
.stepper_progress {
    background-color: var(--line-border-fill);
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    height: 5px;
    width: 30%;
    z-index: -1;
    transition: 0.4s ease;
}
.circle{
    background-color: #fff;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    color: #ccc;
    border: 5px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease;
}
.circle.active{
    border-color: var(--line-border-fill);
}
.btn {
    background-color: #f04d7d;
    color: #fff;
    padding-inline: 20px;
    padding-block: 10px;
}
</style>