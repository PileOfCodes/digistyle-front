<template>
    <div class="relative">
        <header class="w-full py-6 shadow-lg flex items-center justify-center">
            <NuxtLink to="/">
                <img src="/digi.svg" class="w-36" alt="">
            </NuxtLink>
        </header>
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
        <div v-if="authUser.address" class="mt-20 px-20">
            <div class="flex justify-between items-center">
                <div class="font-bold text-xl">مکان و زمان تحویل سفارش</div>
                <button @click="showStuff" class="mt-4 px-16 font-bold py-3 border border-black">{{ showChanges ? 'افزودن آدرس' :  'تغییر آدرس'}}</button>
            </div>
            <div class="mt-8">سفارش شما به آدرس زیر ارسال می شود:</div>
            <div :class="{' border border-slate-200' : showChanges}" class="mt-4 w-full p-4 flex justify-between">
                <div class="flex flex-col space-y-4 mr-12">
                    <div class="flex items-center gap-8">
                        <div class="font-bold">{{ fullname }}</div>
                        <span class="font-bold text-xl">|</span>
                        <div class="text-gray-600 text-sm w-[500px]"><span class="font-bold"> آدرس: </span>استان {{ authUser.province_name }}، شهر {{ authUser.city_name }}، {{ authUser.address }}</div>
                        <div class="text-gray-600 text-sm"><span class="font-bold"> شماره تماس: </span>{{ authUser.mobile }}</div>
                    </div>
                    <div class="text-gray-600 text-sm"><span class="text-black">هزینه ارسال:</span> <span class="font-bold text-black">فقط</span> <span>39</span> هزار تومان برای تمامی سفارش ها</div>
                </div>
                <div v-if="showChanges" class="flex items-center gap-2">
                    <div class="w-12 h-12 cursor-pointer rounded-full border border-slate-200 flex items-center justify-center">
                        <Icon size="32" class="text-slate-400 hover:text-black duration-100" name="ci:close-small" />
                    </div>
                    <div class="w-12 h-12 cursor-pointer rounded-full border border-slate-200 flex items-center justify-center">
                        <Icon size="32" class="text-slate-400 hover:text-black duration-100" name="ci:edit" />
                    </div>
                </div>
            </div>
            <div class="mt-20">لطفا بازه زمانی مناسب برای تحویل سفارش را انتخاب کنید:</div>
            <table class="time-table mt-4">
                <tr>
                    <td class="px-8 w-[300px]">
                        <div class="flex gap-8 items-center">
                            <span>چهارشنبه</span>
                            <span>13 اردیبهشت 1402</span>
                        </div>
                    </td>
                    <td class="py-4">
                        <div class="flex items-center justify-center gap-2">
                            <input type="radio" name="" id="time">
                            <label for="time">ساعت 9 -22</label>
                        </div>
                    </td>
                </tr>
            </table>
            <div class="mt-10 flex justify-between items-center">
                <div class="flex gap-2">
                    <div>آیا مایل هستید به همراه این سفارش فاکتور ارسال شود؟</div>
                    <div class="mr-8">
                        <label for="yes">بله </label>
                        <input type="radio" name="" id="yes">
                        <label for="no" class="mr-4">خیر</label>
                        <input type="radio" name="" id="no">
                    </div>
                </div>
                <div>
                    <button id="prevStep" class="btn" > مرحله قبل</button>
                    <button id="nextStep" class="btn" style="margin-right: 20px;">ثبت و مرحله بعد</button>
                </div>
            </div>
            <div class="flex justify-center gap-20 mt-20 items-center ">
                <a href="#" class="flex justify-center items-center gap-4">
                    <div class="w-[70px]">
                        <img src="/delivery.svg" width="70" alt="delivery icon">
                    </div>
                    <div class="text-md w-32 text-center">تحویل سریع و آسان</div>
                </a>
                <a href="#" class="flex justify-center items-center gap-4">
                    <div class="w-[70px]">
                        <img src="/fourteen.svg" width="70" alt="delivery icon">
                    </div>
                    <div class="text-md w-32 text-center">14 روز ضمانت بازگشت کالا</div>
                </a>
                <a href="#" class="flex justify-center items-center gap-4">
                    <div class="w-[70px]">
                        <img src="/warranty.svg" width="70" alt="delivery icon">
                    </div>
                    <div class="text-md w-32 text-center">ضمات اصل بودن کالا</div>
                </a>
            </div>
        </div>
        <div v-else class="mt-32 flex items-center justify-center flex-col">
            <div class="font-bold ">شما هنوز آدرسی را ثبت کرده اید!</div>
            <button 
            data-te-toggle="modal"
            data-te-target="#exampleModal"
            data-te-ripple-init
            class="mt-4 px-12 py-3 border border-black"> افزودن آدرس جدید </button>
            <div
                data-te-modal-init
                class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div
                    data-te-modal-dialog-ref
                    class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[900px]">
                    <div
                    class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                    <div
                        class="flex flex-shrink-0 items-center justify-between rounded-t-md p-4">
                        <!--Modal title-->
                        <h5
                        class="text-xl mr-8 font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        id="exampleModalLabel">
                        افزودن آدرس جدید
                        </h5>
                        <!--Close button-->
                        <button
                        type="button"
                        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss
                        aria-label="Close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="h-6 w-6">
                            <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        </button>
                    </div>

                    <!--Modal body-->
                    <FormKit type="form" id="addressForm" @submit="createAddress" #default="{value}" :incomplete-message="false" :actions="false">
                        <div class="flex flex-col mr-12">
                            <FormKit type="text" help="فقط برای اولین خرید" name="national_code" id="national_code" placeholder=" کد ملی خریدار " 
                            input-class="form-control block w-[400px] p-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white  focus:outline-none"
                            :help-class="{
                                'text-xs p-1' : true
                            }"
                            />
                        </div>
                        <div class="flex items-center mt-4 mr-12">
                            <FormKit
                            type="checkbox"
                            name="is_foreigner"
                            label= "تبعه خارجی هستم، کد ملی ندارم."
                            />
                        </div>
                        <p class="mt-8 mr-12 font-bold "> اطلاعات تحویل گیرنده </p>
                        <div class="flex flex-col mt-4 mr-12">
                            <FormKit type="text" name="receiver_name" id="receiver_name" placeholder=" نام و نام خانوادگی تحویل گیرنده " 
                            input-class="form-control block w-[400px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white  focus:outline-none"
                            validation="required"
                            :validation-messages="{required: 'فیلد نام و نام خانوادگی الزامی است'}"
                            messages-class="text-red-600 text-xs pt-2"
                            />
                        </div>
                        <div class="flex flex-col mt-4 mr-12">
                            <FormKit type="text" name="cellphone" help="تلفن همراه" id="cellphone" placeholder=" شماره تماس ضروری" 
                            input-class="form-control block w-[400px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none"
                            :help-class="{
                                'text-xs text-gray-700 p-1' : true
                            }"
                            :validation="[['required'],['matches', /^(\+98|0)?9\d{9}$/]]"
                            :validation-messages="{required: 'فیلد شماره تماس الزامی است', matches: 'فیلد شماره تماس معتبر نمی باشد'}"
                            messages-class="text-red-600 text-xs pt-2"
                            />
                        </div>
                        <div class="flex gap-2 mt-6 mr-12">
                            <FormKit type="select" name="province_id" id="province_id" label=" استان" 
                                label-class="text-gray-700"
                                input-class="form-control block w-[300px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none"
                                validation="required"
                                @change="changeProvince"
                                :validation-messages="{required: 'فیلد استان الزامی است'}"
                                messages-class="text-red-600 pt-2">
                                <option v-for="province in provinces.data" :key="province.id" :value="province.id">{{ province.name }}</option>
                            </FormKit>
                            <FormKit type="select" ref="cityEl" name="city_id" id="city_id" label=" شهر" 
                                label-class="text-gray-700"    
                                input-class="form-control block w-[300px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none"
                                validation="required"
                                :validation-messages="{required: 'فیلد شهر الزامی است'}"
                                messages-class="text-red-600 pt-2">
                                <option v-for="city in cities.data.filter((item) => item.province_id == value.province_id)" :key="city.id" :value="city.id">{{ city.name }}</option>
                            </FormKit>
                        </div>
                        <FormKit type="text" name="address" id="address" placeholder=" آدرس پستی"    
                        input-class="form-control block w-[300px] mt-8 mr-12 py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none"
                        validation="required"
                        :validation-messages="{required: 'فیلد آدرس پستی الزامی است'}"
                        messages-class="text-red-600 pt-2 mr-12"
                        />
                        <div class="flex gap-2 mt-6 mr-12">
                            <FormKit type="text" name="postal_code" id="postal_code" placeholder=" کد پستی" 
                            input-class="form-control block w-[300px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none"
                            :validation="[['required'], ['matches', /^\d{5}[ -]?\d{5}$/i]]"
                            :validation-messages="{required: 'فیلد کد پستی الزامی است', matches: 'کد پستی نامعتبر می باشد'}"
                            messages-class="text-red-600 pt-2"
                            />
                            <FormKit type="text" name="phone" help=" اختیاری " id="phone" placeholder=" شماره تماس ضروری" 
                            input-class="form-control block w-[300px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none"
                            :help-class="{
                                'text-xs text-gray-700 p-1' : true
                            }"
                            />
                            <FormKit type="text" name="city_code" id="city_code" placeholder=" کد شهر" 
                            input-class="form-control block w-max-[100px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none"
                            />
                        </div>
                        <div class="mt-2 mb-12 ml-12 float-left">
                        <FormKit type="submit" input-class="text-[#ef5a88] text-md">
                        <LoadingSppiner v-if="loading" />
                        ثبت اطلاعات و بازگشت 
                        </FormKit>
                    </div>
                    </FormKit>
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


definePageMeta({
    key: route => route.fullPath,
    layout: false
})

const cityEl = ref(null)
const errors = ref([])
const loading = ref(false)
const {authUser} = useAuth()
const store = useCartStore()
const fullname = computed(() => authUser.value.firstname + ' ' + authUser.value.lastname)

const {public: {apiBase}} = useRuntimeConfig()

const {data: cities} = await useFetch(`${apiBase}/getCities`, {
    headers: {'Accept' : 'application/json'}
}) 

const {data: provinces} = await useFetch(`${apiBase}/getProvinces`, {
    headers: {'Accept' : 'application/json'}
}) 

function changeProvince(el) {
    cityEl.value.node.input(cities.value.data.find(item => item.province_id == el.target.value).id)
}

async function createAddress(formData) {
    try {
        loading.value = true
        await $fetch('/api/profile/address/create', {
            method: 'POST',
            body: formData,
        })
    }catch(error) {
        errors.value = Object.values(error.data.data.message).flat()
    }finally {
        loading.value = false
    }
}

const showChanges = ref(false)
function showStuff() {
    showChanges.value = true
}

onMounted(() => {
    const progress = document.getElementById('stepper_progress')
    const circles = document.querySelectorAll('.circle')
    const next = document.getElementById('nextStep')
    const prev = document.getElementById('prevStep')
    update()
    next.addEventListener('click', () => {
        localStorage.removeItem('stepper')
        localStorage.setItem('stepper', 3)
        goTo()
    })
    prev.addEventListener('click', () => {
        localStorage.removeItem('stepper')
        localStorage.setItem('stepper', 1)
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

function goTo() {
    navigateTo('/payment')
}

function backTo() {
    navigateTo('/cart')
}

</script>

<style>
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