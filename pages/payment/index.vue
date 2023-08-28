<template>
    <div class="relative">
        <header class="w-full py-6 shadow-lg flex items-center justify-center">
            <NuxtLink to="/">
                <img src="/digi.svg" class="w-36" alt="">
            </NuxtLink>
        </header>
        <div class="mt-20 flex items-center justify-center ">
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
        </div>
        <div class="mt-20 px-32 w-full flex gap-4">
            <div class="w-1/2 border border-gray-400 px-16 py-8 flex flex-col ">
                <div class="bg-gray-200 p-2 text-justify">
                    این سفارش در بازه ساعت<span> ۹ تا ۲۲ </span> تاریخ <span>یکشنبه ۱۷ اردیبهشت ۱۴۰۲</span> به <span> احمدرضاامیری </span> به آدرس <span> خیابان خمینی کوچه شهید میرسالاری </span> و شماره تماس <span> ۰۹۱۶۶۹۰۵۸۰۳ </span> تحویل می‌گردد.
                </div>
                <input type="text" class="w-[200px] mt-20 border-b border-slate-200 focus:outline-none focus:border-black" placeholder="کارت هدیه">
                <input type="text" class="w-[200px] mt-8 border-b border-slate-200 focus:outline-none focus:border-black" placeholder="کد تخفیف">
                <div class="mt-20 font-bold ml-12 flex flex-col space-y-4">
                    <div class="flex justify-between items-center">
                        <span>مبلغ کل خرید</span>
                        <span>3,000,000 تومان</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span>  هزینه ارسال و بسته بندی</span>
                        <span>30,000 تومان</span>
                    </div>
                    <div class="flex justify-between items-center text-[#f04d7d]">
                        <span>   مجموع تخفیف ها  </span>
                        <span>0 تومان</span>
                    </div>
                    <hr>
                    <div class="flex justify-between items-center">
                        <span>  قابل پرداخت </span>
                        <span>3,030,000 تومان</span>
                    </div>
                </div>
            </div>
            <div class="w-1/2 border border-gray-400 px-16 py-8 flex flex-col ">
                <span class="text-lg font-bold">انتخاب شیوه پرداخت</span>
                <div class="mt-12 flex gap-4 font-bold text-lg ">
                    <input type="radio" name="" id="payment">
                    <label for="payment"> پرداخت اینترنتی </label>
                </div>
                <div class="mt-2 mr-[29px] text-gray-600 flex flex-col">
                    <span>(قابل پرداخت با تمامی کارت های عضو شتاب)</span>
                    <span class="mt-2">سرعت بیشتر در پردازش و ارسال سفارش</span>
                    <button class="flex items-center gap-2 text-sm text-black mt-12 border bg-[#41c1c6] bg-opacity-5 border-[#41c1c6] p-4 rounded-sm w-[300px]">
                        <img src="/digipay.png" width="40" alt="">
                        <span>درگاه پرداخت دیجی پی</span>
                    </button>
                </div>
                <div class="mt-12 flex gap-4 font-bold text-lg ">
                    <input type="radio" name="" id="payment">
                    <label for="payment"> پرداخت در محل </label>
                </div>
                <div class="mt-2 mr-[29px] text-gray-600 flex flex-col">
                    <span>(قابل پرداخت با تمامی کارت های بانکی در زمان تحویل)</span>
                </div>
            </div>
        </div>
        <div class="mt-12 px-32 w-full flex justify-between items-center">
            <div class="w-[700px]">با انتخاب دکمه پرداخت و تکمیل خرید، موافقت خود را با <NuxtLink to="#" class="text-[#41c1c6]">شرایط و قوانین</NuxtLink> مربوط به ثبت و رویه‌های پردازش سفارشات دیجی‌استایل اعلام نموده‌اید.</div>
            <button @click="payment" id="prevStep" class="btn"> مرحله قبل</button>
            <button @click="payment" id="nextStep" class="btn">پرداخت و تکمیل خرید</button>
        </div>
        <hr class="mt-12 bg-slate-200  h-1 mx-32">
        <div class="mt-8 flex flex-col mx-32">
            <span class="font-bold text-xl"> سفارش شما </span>
            <div class="flex items-center gap-20 flex-wrap mt-12">
                <div class="flex gap-4 border border-slate-200 pr-2 pl-8 py-2">
                    <img src="/watch-1.jpg" width="80" alt="">
                    <div class="flex flex-col space-y-1">
                        <span class="text-lg font-bold">skemi</span>
                        <span class="font-bold w-[160px] product-elipses">ساعت مچی دیجیتال اسکمی</span>
                        <span>تعداد: <span class="font-bold"> 1</span></span>
                    </div>
                </div>
            </div>
        </div>
        <footer class="flex mt-20 justify-between items-center bg-[#f0f0f0] text-[12px] w-full px-32 py-3" >
            <div>کليه حقوق اين سايت متعلق به شرکت آوازه نو پوشان پارسی (فروشگاه اینترنتی دیجی‌استایل) می‌باشد.</div>
            <div>digistyle.com - 2023 © Copyright</div>
        </footer>
    </div>
</template>


<script setup>
import { useCartStore } from '~~/store/cart'
const store = useCartStore()
const {authUser} = useAuth()
const {public : {apiBase}} = useRuntimeConfig()
const allItems = computed(() => store.allItems)
definePageMeta({
    key: route => route.fullPath,
    layout: false
})
async function payment() {
    try {
        $fetch('/api/payment/send', {
        method: 'POST',
        body: {
            cart: allItems.value,
            address_id: authUser.value.address_id
        }
    })
    } catch (error) {
       
    }
}

onMounted(() => {
    const progress = document.getElementById('stepper_progress')
    const circles = document.querySelectorAll('.circle')
    const next = document.getElementById('nextStep')
    const prev = document.getElementById('prevStep')
    
    update()
    next.addEventListener('click', () => {
    
    })
    prev.addEventListener('click', () => {
        localStorage.removeItem('stepper')
        localStorage.setItem('stepper', 2)
        backTo()
    })
    
    function update() {
        circles.forEach((circle, index) => {
            if(index < localStorage.getItem('stepper')) {
                circle.classList.add('active')
            }else {
                circle.classList.remove('active')
            }
        })

        const actives = document.querySelectorAll('.active')
        progress.style.width = (actives.length / circles.length) * 100 + "%"
    }
})

function backTo() {
    navigateTo('/shipping')
}

</script>

<style scoped>
.product-elipses {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.time-table {
    width: 100%;
    border: 2px solid gray;
    border-collapse: collapse;
}
.time-table td{
    border: 2px solid gray;
}

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
.btn:disabled {
    background-color: gray;
    cursor:not-allowed;
}
</style>