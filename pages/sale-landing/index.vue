<template>
    <div>
        <Head>
            <Title>حراج</Title>
        </Head>
        <LazyLandingSaleSlider  />
        <div class="flex flex-col items-center justify-center space-y-4">
            <div class="mt-12 py-8 text-2xl font-bold bg-no-repeat bg-[length:100px_80px] bg-top bg-[url('/images/regal.svg')]">حراج استایل در تمام دسته ها</div>
            <LazyLandingSaleCategoryCards />
        </div>
        <div class="my-12">
            <LazyLandingSaleShegeft />
        </div>
    </div>
</template>


<script setup>

definePageMeta({
    key: route => route.fullPath,
    layout: 'simple'
})

</script>