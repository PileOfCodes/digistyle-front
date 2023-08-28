<template>
    <div>
        <button
        data-te-toggle="modal"
        data-te-target="#exampleModal"
        data-te-ripple-init
        >
        <Icon size="24" name="uil:plus" />
        <span> افزودن آدرس جدید </span>
        </button>
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
                    <div class="flex flex-col mr-12" v-if="!authUser.address">
                        <FormKit type="text" help="فقط برای اولین خرید" name="national_code" id="national_code" placeholder=" کد ملی خریدار " 
                        input-class="form-control block w-[400px] p-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-black  focus:bg-white  focus:outline-none"
                        :help-class="{
                            'text-xs p-1' : true
                        }"
                        />
                    </div>
                    <div class="flex items-center mt-4 mr-12" v-if="!authUser.address">
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
                        <FormKit type="text" name="mobile" help="تلفن همراه" id="mobile" placeholder=" شماره تماس ضروری" 
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
                        <FormKit type="text" name="code" id="code" placeholder="  کد شهر" 
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
</template>

<script setup>

const cityEl = ref(null)
const errors = ref([])
const getRefresh = inject('getRefreshMethod')
const loading = ref(false)
const {authUser} = useAuth()
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
        getRefresh()
    }
}

</script>