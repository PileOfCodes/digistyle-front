<template>
    <div class="w-full">
        <div>ویرایش اطلاعات</div>
        <div>
            <FormKit type="form" id="addressForm" @submit="sendInfo" #default="{value}" :incomplete-message="false" :actions="false">
                <div class="flex flex-col mt-4">
                    <FormKit type="text" name="firstname" id="firstname" placeholder=" نام  " 
                    input-class="form-control block w-[400px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white  focus:outline-none"
                    validation="required"
                    :validation-messages="{required: 'فیلد نام الزامی است'}"
                    messages-class="text-red-600 text-xs pt-2"
                    />
                </div>
                <div class="flex flex-col mt-4">
                    <FormKit type="text" name="lastname" id="lastname" placeholder=" نام خانوادگی " 
                    input-class="form-control block w-[400px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white  focus:outline-none"
                    validation="required"
                    :validation-messages="{required: 'فیلد نام خانوادگی الزامی است'}"
                    messages-class="text-red-600 text-xs pt-2"
                    />
                </div>
                <div class="flex flex-col mt-4">
                    <FormKit type="email" name="email" id="email" placeholder=" ایمیل " 
                    input-class="form-control block w-[400px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white  focus:outline-none"
                    validation="required"
                    :validation-messages="{required: 'فیلد ایمیل الزامی است'}"
                    messages-class="text-red-600 text-xs pt-2"
                    />
                </div>
                <div class="flex flex-col mt-4 ">
                    <FormKit type="text" name="cellphone" placeholder="تلفن همراه" id="cellphone"
                    input-class="form-control block w-[400px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none"
                    :validation="[['required'],['matches', /^(\+98|0)?9\d{9}$/]]"
                    :validation-messages="{required: 'فیلد شماره تماس الزامی است', matches: 'فیلد شماره تماس معتبر نمی باشد'}"
                    messages-class="text-red-600 text-xs pt-2"
                    />
                </div>
                
                <div class="flex flex-col mt-4">
                    <FormKit type="text" help="تبعه خارجی هستم، کد ملی ندارم." name="national_code" id="national_code" placeholder=" کد ملی  " 
                    input-class="form-control block w-[400px] p-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white  focus:outline-none"
                    :help-class="{
                        'text-xs p-1' : true
                    }"
                    />
                </div>
                <p class="mt-4">تاریخ تولد</p>
                <div class="flex gap-4 ">
                    <FormKit type="select" name="day" id="day"
                        input-class="form-control block w-[120px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none">
                        <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
                    </FormKit>
                    <FormKit type="select" name="month" id="month"
                        input-class="form-control block w-[300px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none">
                        <option v-for="month in monthes" :key="month" :value="month">{{ month }}</option>
                    </FormKit>
                    <FormKit type="select" name="year" id="year"
                        input-class="form-control block w-[200px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none">
                        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                    </FormKit>
                </div>
                <FormKit
                type="radio"
                label="جنسیت"
                name="sex"
                :options="[
                    {label: 'مرد', value: 'مرد'},
                    {label: 'زن', value: 'زن'},
                ]"
                />
                <p class="mt-6">محل سکونت</p>
                <div class="flex gap-2">
                    <FormKit type="select" name="province_id" id="province_id"
                        input-class="form-control block w-[300px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none"
                        validation="required"
                        @change="changeProvince"
                        :validation-messages="{required: 'فیلد استان الزامی است'}"
                        messages-class="text-red-600 pt-2">
                        <option v-for="province in provinces.data" :key="province.id" :value="province.id">{{ province.name }}</option>
                    </FormKit>
                    <FormKit type="select" ref="cityEl" name="city_id" id="city_id" 
                        input-class="form-control block w-[300px] py-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white focus:outline-none"
                        validation="required"
                        :validation-messages="{required: 'فیلد شهر الزامی است'}"
                        messages-class="text-red-600 pt-2">
                        <option v-for="city in cities.data.filter((item) => item.province_id == value.province_id)" :key="city.id" :value="city.id">{{ city.name }}</option>
                    </FormKit>
                </div>
                <div class="mt-8 ml-12 float-left">
                    <FormKit type="submit" input-class="text-[#ef5a88] p-4 hover:text-white hover:bg-[#ef5a88]">
                            <LoadingSppiner v-if="loading" />
                            ثبت اطلاعات و بازگشت 
                    </FormKit>
                </div>
            </FormKit>
        </div>
    </div>
</template>

<script setup>

const loading = ref(false)
const cityEl = ref(null)
const days = ref([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31])
const monthes = ref([1,2,3,4,5,6,7,8,9,10,11,12])
const years = ref([1370,1371])
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

async function sendInfo(formData) {
    try {
        loading.value = true
        await $fetch('/api/profile/userInfo', {
            method: 'POST',
            body: formData,
            headers: useRequestHeaders(['cookie'])
        })
        navigateTo('/profile')
    }catch(error) {
        
    }finally {
        loading.value = false
    }
}

</script>