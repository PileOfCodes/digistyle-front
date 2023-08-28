<template>
    <div class="px-10" v-if="showCard == false">
        <LazySingleProductBreadCrumbs :singleProduct="singleProduct" />
        <div class="relative flex gap-20 w-full">
            <div v-if="showSellerCard" class="absolute p-4 left-8 top-0 border border-black w-[500px] z-[4000] bg-white h-[1000px]">
                <LazyProductOtherSellers @open-seller-card="val => openSellerCard(val)" />
            </div>
            <div class="relative z-0 w-[720px] h-[700px] overflow-clip">
                <div >
                    <LazySingleProductSwiper :singleProduct="singleProduct.data"  @show-big-card="val => showCard = val" />
                </div>
                <div v-if="singleProduct.data.brand != null">
                    <NuxtLink :to="`/brand/${singleProduct.data.brand.name}`" class="absolute top-2 left-1 z-10">
                        <img :src="singleProduct.data.brand.brand_image" class="h-24 w-24" alt="">
                    </NuxtLink>
                </div>
                <template v-for="seller in  singleProduct.data.sellers">
                    <span class="bg-black text-white text-lg absolute top-0 right-0 p-2 z-20" v-if="seller.discount && seller.selected == 1">{{ getTheDiscount = seller.discount.percent  }}% تخفیف</span>
                    <span class="bg-black text-white text-lg absolute top-0 right-0 p-2 z-20" v-else-if="seller.discount && seller.selected == 0">{{ getTheDiscount = seller.discount.percent }}% تخفیف</span>
                    <span class="bg-black text-white text-lg absolute top-0 right-0 p-2 z-20" v-else-if="seller.discount && seller.selected == 2">{{ getTheDiscount = seller.discount.percent }}% تخفیف</span>
                </template>
            </div>
            <div class="flex flex-col w-[400px] ">
                <div class="flex justify-between">
                    <div class="flex gap-8">
                        <span @click="seeRate" class="flex cursor-pointer items-center starIcon">
                            <span class="pb-1">4</span>
                        </span>
                        <span @click="seeRate" class="flex cursor-pointer items-center commentIcon">
                            <span class="pb-1">4</span>
                        </span>
                    </div>
                    <div class="flex items-center cursor-pointer shareIcon"
                    data-te-toggle="modal"
                    data-te-target="#exampleModal"
                    data-te-ripple-init
                    data-te-ripple-color="light"></div>
                    <!-- Modal -->
                    <div
                    data-te-modal-init
                    class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                    id="exampleModal"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true">
                    <div
                        data-te-modal-dialog-ref
                        class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[450px]">
                        <div
                        class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                        <div
                            class="flex flex-shrink-0 items-center justify-between rounded-t-md py-4">
                            <!--Modal title-->
                            <h5
                            class="text-md font-medium leading-normal px-10 text-neutral-800 dark:text-neutral-200"
                            id="exampleModalLabel">
                            نظر دوست خوش استایلتان را بپرسید!
                            </h5>
                            <!--Close button-->
                            <button
                            type="button"
                            class="box-content rounded-none ml-10 border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
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
                        <div class="relative flex-auto py-4 px-10" data-te-modal-body-ref>
                            این کالا را به یک دوست نشان دهید و قبل از خرید مشورت کنید.
                        </div>
                        <div class="flex flex-wrap gap-4 px-10 text-white py-6">
                            <button class="bg-green-400 border border-green-400 hover:bg-white hover:text-green-400 duration-150 flex items-center justify-center gap-2 h-12 w-44 ">
                                <Icon size="21" name="uil:whatsapp" />
                                <span>واتس اپ</span>
                            </button>
                            <button class="bg-sky-400 border border-sky-400 hover:bg-white hover:text-sky-400 duration-150 flex items-center justify-center gap-2 h-12 w-44 ">
                                <Icon size="21" name="uil:twitter" />
                                <span> توییتر </span>
                            </button>
                            <button class="bg-[#3b5998] border border-[#3b5998] hover:bg-white hover:text-[#3b5998] duration-150 flex items-center justify-center gap-2 h-12 w-44 ">
                                <Icon size="21" name="uil:facebook" />
                                <span> فیسبوک</span>
                            </button>
                            <button class="bg-[#f04d7d] border border-[#f04d7d] hover:bg-white hover:text-[#f04d7d] duration-150 flex items-center justify-center gap-2 h-12 w-44 ">
                                <Icon size="21" name="ci:mail" />
                                <span> ایمیل </span>
                            </button>
                        </div>
                        <!--Modal footer-->
                        <div
                            class="flex flex-col items-center justify-center space-y-2 pt-2 pb-4 mx-10">
                            <div>لینک را کپی کنید تا جای دیگری به اشتراک بگذارید.</div>
                            <button
                            type="button"
                            class="flex items-center justify-center  gap-2 py-2 w-full bg-black text-white hover:bg-white hover:text-black border border-black duration-150 "
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            <Icon size="21" name="uil:copy" />
                            لینک را کپی کنید
                            </button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="mt-12 text-lg font-bold ">{{ singleProduct.data.title}}</div>
                <div class="mt-2 flex items-center gap-1">
                    <NuxtLink v-if="singleProduct.data.brand != null" :to="`/brand/${singleProduct.data.brand.slug}`" class="font-bold" >{{ singleProduct.data.brand.name }}</NuxtLink>
                    <span class="text-slate-300">/</span>
                    <div v-if="singleProduct.data.brand != null">
                        <NuxtLink  :to="`/brand/${singleProduct.data.brand.slug}/category`" class="text-sm">{{ singleProduct.data.name }}</NuxtLink>
                    </div>
                    <div v-else>
                        <NuxtLink  :to="route.fullPath" class="text-sm">{{ singleProduct.data.name }}</NuxtLink>
                    </div>
                </div>
                <div class="mt-44 flex justify-between ">
                    <template class="mt-2 text-sm" v-for="seller in singleProduct.data.sellers">
                        <div v-if="seller.selected == 1">فروشنده :<NuxtLink :to="`/seller/${seller.slug}`" >{{ getTheSeller = seller.name }}</NuxtLink></div>
                        <div v-else-if="seller.selected == 0">فروشنده :<NuxtLink :to="`/seller/${seller.slug}`" >{{ getTheSeller = seller.name }}</NuxtLink></div>
                        <div v-else>فروشنده :<NuxtLink :to="`/seller/${seller.slug}`" >{{ getTheSeller = seller.name }}</NuxtLink></div>
                    </template>
                    <div class="flex flex-col items-end space-y-1"> 
                        <template v-for="seller in singleProduct.data.sellers">
                            <div v-if="seller.discount != null">
                                <div v-if="seller.discount && seller.selected == 1" class="font-bold text-2xl">{{ numberFormat(getThePrice = roundIt(countDiscount(originalPrice = seller.price, seller.discount.percent))) }}<span class="text-sm">تومان</span></div>
                                <div v-else-if="seller.discount && seller.selected == 0" class="font-bold text-2xl">{{ numberFormat(getThePrice = roundIt(countDiscount(originalPrice = seller.price, seller.discount.percent))) }}<span class="text-sm">تومان</span></div>
                                <div v-else-if="seller.discount && seller.selected == 2" class="font-bold text-2xl">{{ numberFormat(getThePrice = roundIt(countDiscount(originalPrice = seller.price, seller.discount.percent))) }}<span class="text-sm">تومان</span></div>
                            </div>
                            <div v-else class="font-bold text-2xl">{{ numberFormat(getThePrice = seller.price) }} <span class="text-sm">تومان</span></div>
                        </template>
                        <template v-for="seller in singleProduct.data.sellers">
                            <div class="flex gap-2" v-if="seller.discount != null">
                                <del class="text-lg text-gray-600 ">{{ numberFormat(seller.price) }}</del>
                                <div class="bg-black text-white text-sm flex items-center justify-center w-10 h-7">{{ seller.discount.percent }}%</div>
                            </div>
                        </template>
                    </div>
                </div>
                <div class="flex gap-2 mt-6 text-sm text-gray-600">
                    <div class="flex flex-col items-center">
                        <div class="flex  deliveryIcon"></div>
                        <div class="flex  warrantyIcon"></div>
                    </div>
                    <template v-for="seller in singleProduct.data.sellers">
                        <div class="flex flex-col">
                            <span v-if="seller.selected == 1">{{ seller.sending_time }}</span>
                            <span v-else-if="seller.selected == 0">{{ seller.sending_time }}</span>
                            <span v-else>{{ seller.sending_time }}</span>
                            <span v-if="seller.selected == 1">{{ seller.warrant.name }}</span>
                            <span v-else-if="seller.selected == 0">{{ seller.warrant.name }}</span>
                            <span v-else>{{ seller.warrant.name }}</span>
                        </div>
                    </template>
                </div>
                <div @click="openSellerCard(true)"
                v-if="singleProduct.data.sellers.length > 1"
                class="flex items-center justify-end mt-4 cursor-pointer text-sm">
                    <span>{{ singleProduct.data.sellers.length }} فروشنده دیگر</span>
                    <Icon size="24" name="uil:arrow-left" />
                </div>
                <div class="mt-10 text-gray-600">
                    <LazySingleProductSizeSwiper  v-if="singleProduct.data.property == 'size'"  
                    @send-property="property => getTheProperty = property" 
                    @send-quantity="quantity => getTheQuantity = quantity" 
                    :attributes="singleProduct.data.sizes" />
                    <LazySingleProductColorSwiper v-else-if="singleProduct.data.property == 'color'" @send-property="property => getTheProperty = property" :attributes="singleProduct.data.colors" />
                    <LazySingleProductWeightSwiper v-else-if="singleProduct.data.property == 'weight'" @send-property="property => getTheProperty = property" :attributes="singleProduct.data.weights" />
                </div>
                <div class="flex justify-between items-center mt-10">
                    <button @click="getProducts(singleProduct.data, getTheProperty, getThePrice, getTheDiscount, getTheSeller)" class="py-4 px-24 bg-black text-white hover:text-black hover:bg-white focus:bg-green-400 focus:border-green-400 border border-black duration-150">افزودن به سبد خرید </button>
                    <Icon @click="likeProduct" size="57" class="p-2 cursor-pointer border border-black duration-150"
                    :color="isLiked ? 'red' : 'black'"  name="uil:heart" />
                </div>
                <div class="mt-6 flex flex-col space-y-3" v-if="otherDesigns.length > 0">
                    <span>طرح های دیگر </span>
                    <LazySingleProductOtherStyles :otherDesigns="otherDesigns" />
                </div>
                <div class="my-10">
                    <LazySingleProductInfo  />
                </div>
            </div>
        </div>
        <div id="attributeCard" class="relative overflow-hidden border-t py-8 border-t-gray-400 mt-8 mx-12">
            <div class="flex gap-32">
                <div class="flex flex-col space-y-2">
                    <span class="font-bold text-lg"> ویژگی ها </span>
                    <span class="text-xs text-gray-600 ">{{ singleProduct.data.title}}</span>
                </div>
                <div class="flex flex-col">
                    <span class="font-bold text-lg">  مشخصات </span>
                    <div :class="{'h-[240px]' : showMore }">
                        <div class="flex flex-col space-y-4 mb-16 mt-1">
                            <div class="flex gap-28" v-for="attribute in attributes">
                                <span class="w-40 text-gray-600 text-sm ">{{ attribute.parent_attribute.name }}</span>
                                <span class="w-[400px]">{{ attribute.name }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div @click="makeBiger" class="absolute w-[850px] bottom-0 right-[312px] py-8 bg-white ">
                <button v-if="showMore"> نمایش تمام ویژگی ها  <Icon name="material-symbols:keyboard-arrow-down-rounded" /> </button>
                <button v-else > فقط نمایش ویژگی های کلی کالا    <Icon name="material-symbols:keyboard-arrow-up-rounded" /></button>
            </div>
        </div>
        <div id="commentCard" class="relative overflow-hidden border-t py-8 border-t-gray-400 mt-8 mx-12">
            <div class="flex justify-start">
                <div class="flex flex-col items-start w-[330px]">
                    <span class="font-bold text-lg">  دیدگاه کاربران </span>
                    <span class="text-xs text-gray-600 mt-2"> هودی زنانه ایزی دو مدل 234654735766 </span>
                    <div class="text-gray-400 mt-6 text-xl"><span class="pl-1 text-2xl text-black">4</span>از <span class="">5</span></div>
                    <span class="text-xs text-gray-400 mt-1"> از مجموع 6 امتیاز کاربران</span>
                    <div class="flex flex-col space-y-3 mt-4">
                        <div class="flex flex-col space-y-2">
                            <div class="flex gap-32 text-xs">
                                <span class="basis-full">کیفیت موارد به کار رفته</span>
                                <span class="text-gray-400">4</span>
                            </div>
                            <div class="relative w-full h-[9px] border ">
                                <span class="absolute bg-slate-600 w-48 h-[7px] border border-slate-600 "></span>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <div class="flex gap-32 text-xs">
                                <span class="basis-full">کیفیت دوخت و طراحی </span>
                                <span class="text-gray-400">4</span>
                            </div>
                            <div class="relative w-full h-[9px] border ">
                                <span class="absolute bg-slate-600 w-48 h-[7px] border border-slate-600 "></span>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <div class="flex gap-32 text-xs">
                                <span class="basis-full">  راحتی </span>
                                <span class="text-gray-400">4</span>
                            </div>
                            <div class="relative w-full h-[9px] border ">
                                <span class="absolute bg-slate-600 w-48 h-[7px] border border-slate-600 "></span>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <div class="flex gap-32 text-xs">
                                <span class="basis-full">  فرم لباس روی بدن  </span>
                                <span class="text-gray-400">4</span>
                            </div>
                            <div class="relative w-full h-[9px] border ">
                                <span class="absolute bg-slate-600 w-48 h-[7px] border border-slate-600 "></span>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <div class="flex gap-32 text-xs">
                                <span class="basis-full">   ارزش خرید نسبت به قیمت  </span>
                                <span class="text-gray-400">4</span>
                            </div>
                            <div class="relative w-full h-[9px] border ">
                                <span class="absolute bg-slate-600 w-48 h-[7px] border border-slate-600 "></span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-16">
                    <button type="button"
                        data-te-toggle="modal"
                        @click="showAttributeCard = false"
                        data-te-target="#commentModal"
                        data-te-ripple-init
                        data-te-ripple-color="light" 
                        class="border border-black hover:bg-black hover:text-white duration-150 py-2 px-10">شما هم نظر خود را بنویسید!
                    </button>
                    <div
                        data-te-modal-init
                        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
                        id="commentModal"
                        tabindex="-1"
                        aria-labelledby="commentModalLabel"
                        aria-hidden="true">
                        <div
                            data-te-modal-dialog-ref
                            class="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[640px]">
                            <div
                            class="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                            <div
                                class="flex flex-shrink-0 items-center justify-between rounded-t-md px-6 py-12">
                                <!--Modal title-->
                                <h5
                                class="text-md font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                                id="exampleModalLabel">
                                نوشتن دیدگاه
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
                            <div class="relative flex gap-8 px-10" data-te-modal-body-ref>
                                <div class="w-48 ">
                                    <img src="/pro-1.jpg" alt="">
                                </div>
                                <div class="flex flex-col space-y-2">
                                    <span>هودی زنانه ایزی دو مدل 21811141643</span>
                                    <span>برند: ایزی دو</span>
                                </div>
                            </div>
                            <!-- <div class="mt-12 gap-6 flex flex-wrap px-10 ">
                                <div class="flex flex-col ">
                                    <span>کیفیت موارد به کار رفته</span>
                                    <div class="w-[250px] ">
                                        <ul
                                            data-te-stepper-init
                                            class="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
                                            <li
                                                data-te-stepper-step-ref
                                                class="w-[90px]  flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                class="flex cursor-pointer items-center  leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 mr-2 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref>
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute w-full text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                خیلی بد
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                بد
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                متوسط
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                خوب
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                عالی
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <span>کیفیت دوخت و طراحی  </span>
                                    <div class="w-[250px] ">
                                        <ul
                                            data-te-stepper-init
                                            class="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
                                            <li
                                                data-te-stepper-step-ref
                                                class="w-[90px]  flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                class="flex cursor-pointer items-center  leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 mr-2 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref>
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute w-full text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                خیلی بد
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                بد
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                متوسط
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                خوب
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                عالی
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <span> راحتی </span>
                                    <div class="w-[250px] ">
                                        <ul
                                            data-te-stepper-init
                                            class="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
                                            <li
                                                data-te-stepper-step-ref
                                                class="w-[90px]  flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                class="flex cursor-pointer items-center  leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 mr-2 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref>
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute w-full text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                خیلی بد
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                بد
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                متوسط
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                خوب
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                عالی
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <span> فرم لباس روی بدن </span>
                                    <div class="w-[250px] ">
                                        <ul
                                            data-te-stepper-init
                                            class="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
                                            <li
                                                data-te-stepper-step-ref
                                                class="w-[90px]  flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                class="flex cursor-pointer items-center  leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 mr-2 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref>
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute w-full text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                خیلی بد
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                بد
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                متوسط
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                خوب
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                عالی
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="flex flex-col">
                                    <span> ارزش خرید نسبت به قیمت </span>
                                    <div class="w-[250px] ">
                                        <ul
                                            data-te-stepper-init
                                            class="relative m-0 flex list-none justify-between overflow-hidden p-0 transition-[height] duration-200 ease-in-out">
                                            <li
                                                data-te-stepper-step-ref
                                                class="w-[90px]  flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                class="flex cursor-pointer items-center  leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 mr-2 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref>
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute w-full text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                خیلی بد
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                بد
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                متوسط
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[90px] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                data-te-stepper-step-active
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  after:h-[2px] after:w-full after:flex-1 after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">                    
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                خوب
                                                </div>
                                            </li>
                                            <li data-te-stepper-step-ref class="w-[4.5rem] flex-auto">
                                                <div
                                                data-te-stepper-head-ref
                                                class="flex cursor-pointer items-center leading-[1.3rem] no-underline  before:bg-[#e0e0e0] before:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:before:bg-neutral-600 dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                                                <span
                                                    data-te-stepper-head-icon-ref
                                                    class="my-6 flex h-[12px] w-[12px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                                                    
                                                </span>
                                                <span
                                                    data-te-stepper-head-text-ref
                                                    class="text-neutral-500 after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                                                </span>
                                                </div>
                                                <div
                                                data-te-stepper-content-ref
                                                class="absolute left-0 w-full translate-x-[150%] text-xs text-green-800 transition-all duration-500 ease-in-out">
                                                عالی
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> -->
                            <div class="mt-8 px-16">
                                <input type="text" class="border-b outline-none w-full p-2" placeholder="عنوان دیدگاه ">
                            </div>
                            <div class="mt-8 px-16 ">
                                <textarea class="border-b outline-none w-full p-2 resize-none " placeholder="متن دیدگاهتان را بنویسید"></textarea>
                            </div>
                            <div class="mt-8 px-16 flex items-center ">
                                <input type="checkbox" class="w-5 h-5 ml-2 rounded-sm " id="comm_check">
                                <label for="comm_check" class="text-sm">ارسال دیدگاه به صورت ناشناس</label>
                            </div>

                            <!--Modal footer-->
                            <div class="flex flex-col items-end space-y-3 pb-12 px-10">
                                <button
                                type="button"
                                class="ml-1 inline-block rounded bg-black px-8 py-3 font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-white hover:text-black border border-balck "
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                ثبت دیدگاه
                                </button>
                                <div class="text-sm">ثبت نظر به معنی موافقت با <a href="#" class="text-blue-400">قوانین انتشار دیجی‌استایل</a> است</div>
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="flex flex-col w-[calc(100%-330px)] gap-12">
                    <div class="flex pt-8 pb-4 ">
                        <div class="flex gap-6 w-[640px]">
                            <div class="flex items-center justify-center w-12 h-8 bg-green-400 text-white rounded-sm">4</div>
                            <div class="flex flex-col space-y-3">
                                <!-- <div>تایتل کامنت</div> -->
                                <div class="flex gap-2 items-center text-xs">
                                    <span>کاربر دیجی استایل</span>
                                    <span class="w-[5px] h-[5px] rounded-full bg-gray-200 "></span>
                                    <span> 17 روز پیش</span>
                                    <span class="bg-gray-200 py-1 px-2 rounded-xl text-black flex items-center justify-center "> خریدار </span>
                                </div>
                                <div class="w-[500px] text-justify text-sm">
                                    جنسش خوبه خوشرنگه ولی مدل کراپ هستش و چون کشش گشاده و تنگ نیس جالب نبود. اصلا نباید کش میداشت. اینطوری بهتر بود
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-3 items-end w-[200px] ">
                            <div class="flex gap-2 items-center text-green-400 ">
                                <span class="text-xs">خرید این محصول را پیشنهاد می کنم</span>
                                <Icon size="17" name="uil:thumbs-up" />
                            </div>
                            <div class="text-xs">دیجی استایل<span class="text-gray-400"> :فروشنده</span></div>
                            <div class="text-xs"> L <span class="text-gray-400"> :سایز</span></div>
                        </div>
                    </div>
                    <div class="flex border-t border-gray-400 pt-8 pb-4">
                        <div class="flex gap-6 w-[640px]">
                            <div class="flex items-center justify-center w-12 h-8 bg-green-400 text-white rounded-sm">4</div>
                            <div class="flex flex-col space-y-3">
                                <div>تایتل کامنت</div>
                                <div class="flex gap-2 items-center text-xs">
                                    <span>کاربر دیجی استایل</span>
                                    <span class="w-[5px] h-[5px] rounded-full bg-gray-200 "></span>
                                    <span> 17 روز پیش</span>
                                    <span class="bg-gray-200 py-1 px-2 rounded-xl text-black flex items-center justify-center "> خریدار </span>
                                </div>
                                <div class="w-[500px] text-justify text-sm">
                                    جنسش خوبه خوشرنگه ولی مدل کراپ هستش و چون کشش گشاده و تنگ نیس جالب نبود. اصلا نباید کش میداشت. اینطوری بهتر بود
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-3 items-end w-[200px]">
                            <div class="text-xs">دیجی استایل<span class="text-gray-400"> :فروشنده</span></div>
                            <div class="text-xs"> L <span class="text-gray-400"> :سایز</span></div>
                        </div>
                    </div>
                    <div class="flex border-t border-gray-400 pt-8 pb-4">
                        <div class="flex gap-6 w-[640px]">
                            <div class="flex items-center justify-center w-12 h-8 bg-green-400 text-white rounded-sm">4</div>
                            <div class="flex flex-col space-y-3">
                                <div>تایتل کامنت</div>
                                <div class="flex gap-2 items-center text-xs">
                                    <span>کاربر دیجی استایل</span>
                                    <span class="w-[5px] h-[5px] rounded-full bg-gray-200 "></span>
                                    <span> 17 روز پیش</span>
                                    <span class="bg-gray-200 py-1 px-2 rounded-xl text-black flex items-center justify-center "> خریدار </span>
                                </div>
                                <div class="w-[500px] text-justify text-sm">
                                    جنسش خوبه خوشرنگه ولی مدل کراپ هستش و چون کشش گشاده و تنگ نیس جالب نبود. اصلا نباید کش میداشت. اینطوری بهتر بود
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-3 items-end w-[200px]">
                            <div class="flex gap-2 items-center text-green-400 ">
                                <span class="text-xs">خرید این محصول را پیشنهاد می کنم</span>
                                <Icon size="17" name="uil:thumbs-up" />
                            </div>
                            <div class="text-xs">دیجی استایل<span class="text-gray-400"> :فروشنده</span></div>
                            <div class="text-xs"> L <span class="text-gray-400"> :سایز</span></div>
                        </div>
                    </div>
                    <div class="flex border-t border-gray-400 pt-8 pb-4">
                        <div class="flex gap-6 w-[640px]">
                            <div class="flex items-center justify-center w-12 h-8 bg-green-400 text-white rounded-sm">4</div>
                            <div class="flex flex-col space-y-3">
                                <div>تایتل کامنت</div>
                                <div class="flex gap-2 items-center text-xs">
                                    <span>کاربر دیجی استایل</span>
                                    <span class="w-[5px] h-[5px] rounded-full bg-gray-200 "></span>
                                    <span> 17 روز پیش</span>
                                    <span class="bg-gray-200 py-1 px-2 rounded-xl text-black flex items-center justify-center "> خریدار </span>
                                </div>
                                <div class="w-[500px] text-justify text-sm">
                                    جنسش خوبه خوشرنگه ولی مدل کراپ هستش و چون کشش گشاده و تنگ نیس جالب نبود. اصلا نباید کش میداشت. اینطوری بهتر بود
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col space-y-3 items-end w-[200px]">
                            <!-- <div class="flex gap-2 items-center text-green-400 ">
                                <span class="text-xs">خرید این محصول را پیشنهاد می کنم</span>
                                <Icon size="17" name="uil:thumbs-up" />
                            </div> -->
                            <div class="text-xs">دیجی استایل<span class="text-gray-400"> :فروشنده</span></div>
                            <div class="text-xs"> L <span class="text-gray-400"> :سایز</span></div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div @click="makeBiger" class="absolute w-[850px] bottom-0 right-[335px] py-8 bg-white ">
                <button v-if="showMore"> نمایش تمام ویژگی ها  <Icon name="material-symbols:keyboard-arrow-down-rounded" /> </button>
                <button v-else > فقط نمایش ویژگی های کلی کالا    <Icon name="material-symbols:keyboard-arrow-up-rounded" /></button>
            </div> -->
        </div>
        <div>
            <LazySingleProductSameSuggestion  />
        </div>
    </div>
    <div v-if="showAttributeCard" class="fixed top-0 w-full bg-white z-[20000] mb-8 px-[88px] flex justify-between items-center border-b border-b-gray-400">
        <div class="flex gap-12 pt-12">
            <span :class="{'border-b-[6px] border-black' : !chooseComment}" class="pb-4 text-lg font-bold "> ویژگی ها </span>
            <span :class="{'border-b-[6px] border-black' : chooseComment}" class="pb-4 text-lg font-bold "> دیدگاه کاربران </span>
        </div>
        <div class="flex gap-6">
            <template v-for="seller in singleProduct.data.sellers">
                <div class="flex flex-col gap-2 items-end">
                    <div v-if="seller.discount != null">
                        <div v-if="seller.selected == 1" class="font-bold text-lg">{{ numberFormat(roundIt(countDiscount(seller.price, seller.discount.percent)))}}<span class="text-sm">تومان</span></div>
                        <div v-if="seller.selected == 0" class="font-bold text-lg">{{ numberFormat(roundIt(countDiscount(seller.price, seller.discount.percent)))}}<span class="text-sm">تومان</span></div>
                        <div v-else class="font-bold text-lg">{{ numberFormat(roundIt(countDiscount(seller.price, seller.discount.percent)))}}<span class="text-sm">تومان</span></div>
                    </div>
                    <div v-else class="font-bold text-lg">{{ numberFormat(seller.price) }}</div>
                    <div class="flex text-sm gap-2">
                        <div>
                            <span class="py-1 px-2 bg-black text-white" v-if="singleProduct.data.property == 'weight'">{{ getTheProperty }} گرم</span>
                            <span v-else>{{ getTheProperty }}</span>
                        </div>
                        <span v-if="singleProduct.data.property == 'size'" class="rulerIcon"></span>
                    </div>
                </div>
            </template>
            <div class="w-12 h-10 overflow-hidden "><img :src="singleProduct.data.primary_image" class="w-12 h-12" alt=""></div>
            <button class="py-4 px-12 bg-black text-white hover:text-black hover:bg-white border border-black duration-150">افزودن به سبد خرید </button>
        </div>
    </div>
    <div class="fixed top-0 left-0 bg-white flex w-full h-full z-[1000] " v-if="showCard">
        <LazySingleProductShowImages :singleProduct="singleProduct.data" />
        <div class="absolute z-[10000] left-20 top-5"> تصاویر رسمی </div>
        <Icon  @click="showCard = false" class="bg-white cursor-pointer w-12 h-12 rounded-full shadow-xl absolute top-2 left-2 z-[10000]" name="ci:close-small" />
    </div> 
    <div v-if="cartLoading">
        <LoadingSppiner />
    </div>
    <div v-if="showLoginCard">
        <LazySingleProductLoginCard @send-signal="input => showLoginCard = input" />
    </div>
</template>

<script setup>
import { useCartStore } from '~~/store/cart'
import { useLikeStore } from '~~/store/like'

const {authUser} = useAuth()
const cartLoading = ref(false)
const getTheProperty = ref(null)
const getThePrice = ref(null)
const sellerId = ref(null)
const getTheSeller = ref(null)
const getTheDiscount = ref(null)
const getTheQuantity = ref(null)
const originalPrice = ref(null)
const quantity = ref(null)
const showCard = ref(false)
const showLoginCard = ref(false)
const showMore = ref(true)
const showSellerCard = ref(false)
const showAttributeCard = ref(false)
const chooseComment = ref(false)
const route = useRoute()
const {public: {apiBase}} = useRuntimeConfig()
const store = useCartStore()
const likeStore = useLikeStore()

const isLiked = computed(() => likeStore.getItem(authUser.value.id, route.params.slug))

watch(getTheQuantity, (newVal) => {
    quantity.value = newVal
})

function getProducts(product, property, price, discount, seller) {
    store.removeProduct(product.id,property)
    store.getProducts(product, 1, property, price, discount, seller,
    quantity.value, originalPrice.value, sellerId.value)
}

async function likeProduct() {
    if(authUser.value) {
        try {
            cartLoading.value = true
            const data = await $fetch('/api/auth/updateLike',{
            method: "POST",
            body: {'slug' : route.params.slug}
        })
        likeStore.getProductLike(data)
        } catch (error) {
           
        }finally {
            cartLoading.value = false
        }
    }else{
        showLoginCard.value = true
    }
}

function seeRate() {
    var comm = document.getElementById('commentCard')
    var rectComment = comm.getBoundingClientRect()
    window.scrollTo(0,rectComment.top)
}

const {data: singleProduct} = await useFetch(`${apiBase}/getSingleProduct`, {
    params: {'slug' : route.params.slug}
})

const attributes = computed(() => singleProduct.value.data.attributes.filter(att => att.parent_attribute.priority != 1))

const {data : otherDesigns} = await useFetch(`${apiBase}/getOtherProductDesigns`, {
    params: {'slug' : route.params.slug, 'name' : singleProduct.value.data.name }
})

onMounted(() => {
    
    // scroll bar
    var comm = document.getElementById('commentCard')
    var rectComment = comm.getBoundingClientRect()
    var att = document.getElementById('attributeCard')
    var rectAtt = att.getBoundingClientRect()
    window.addEventListener('scroll', () => {
        var scroll = window.scrollY
        if(scroll > rectAtt.top ) {
            showAttributeCard.value = true
            chooseComment.value = false
            if(showMore.value == true && scroll > rectComment.top) {
                chooseComment.value = true
            }
            if(showMore.value == false && scroll >  rectComment.top) {
                chooseComment.value = true
            }
        }else if(scroll < rectAtt.top){
            showAttributeCard.value = false
        }
    })
})

useHead({
    title: ` فروش محصول ${singleProduct.value.data.title} `
})

function makeBiger() {
    showMore.value = ! showMore.value
}

function openSellerCard(value) {
    showSellerCard.value = value
}

definePageMeta({
    layout: 'product',
    key: route => route.fullPath
})

</script>



