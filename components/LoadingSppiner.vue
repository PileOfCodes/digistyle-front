<template>
    <div class="fixed flex items-center justify-center before:z-[-200000] content-none before:opacity-80  before:w-full before:h-[100vh] w-full h-[100vh] before:top-0 before:bottom-0 before:right-0 before:left-0 top-0 right-0 bottom-0 left-0  before:bg-black z-[100000]">
        <div class="absolute bg-white w-[400px] h-[300px] shadow-lg ">
            <div class="w-full flex items-center justify-center mt-12">
                <img src="/digi.svg" width="200" alt="">
            </div>
            <div
            class="relative right-[170px] bottom-24 mt-44 h-12 w-12 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
            >
            </div>
        </div>
    </div>
</template>