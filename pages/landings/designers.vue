<template>
    <div class=" mb-[100px]">
        <div class="bg-black text-white text-xl mt-4 mb-2 p-5 text-center ">طراحان لباس ایرانی دیجی استایل</div>
        <div class="designGrid">
            <div class="gridItem1">
                <NuxtLink to="/brand/rees-brand">
                    <img src="/rees-collection.jpg">
                </NuxtLink>
            </div>
            <div class="gridItem2">
                <NuxtLink to="/brand/koi-brand">
                    <img src="/koi-collection.jpg">
                </NuxtLink>
            </div>
                <div class="gridItem3">
                    <NuxtLink to="/brand/clotho-brand">
                        <img src="/clotho.jpg" class="w-[426px] h-[300px] object-cover">
                    </NuxtLink>
                </div>
                <div class="gridItem4">
                    <NuxtLink to="">
                        <img src="/de.jpg" class="w-[426px] h-[300px] object-cover">
                    </NuxtLink>
                </div>
                <div class="gridItem5">
                    <NuxtLink to="">
                        <img src="/enc-1.jpg" class="w-[426px] h-[300px] object-cover">
                    </NuxtLink>
                </div>
                <div class="gridItem6">
                    <NuxtLink to="">
                        <img src="/barza.jpg">
                    </NuxtLink>
                </div>
                <div class="gridItem7">
                    <NuxtLink to="/brand/degerman-brand">
                        <img src="/degerman.jpg">
                    </NuxtLink>
                </div>
                <div class="gridItem8">
                    <NuxtLink to="/brand/gray-brand">
                        <img src="/gray.jpg" class="h-[516px] object-cover" >
                    </NuxtLink>
                </div>
                <div class="gridItem9">
                    <NuxtLink to="">
                        <img src="/artman.jpg"  class="object-cover h-[250px]">
                    </NuxtLink>
                </div>
                <div class="gridItem10">
                    <NuxtLink to="">
                        <img src="/o.jpg" class="object-cover h-[250px]">
                    </NuxtLink>
                </div>
                <div class="gridItem11">
                    <NuxtLink to="">
                        <img src="/ciado.jpg" class="object-cover w-[426px] h-[300px]">
                    </NuxtLink>
                </div>
                <div class="gridItem12">
                    <NuxtLink to="">
                        <img src="/jandaghi.jpg" class="object-cover w-[426px] h-[300px]">
                    </NuxtLink>
                </div>
                <div class="gridItem13">
                    <NuxtLink to="">
                        <img src="/tachar.jpg" class="object-cover w-[426px] h-[300px]">
                    </NuxtLink>
                </div>
                <div class="gridItem14">
                    <NuxtLink to="">
                        <img src="/pepa-collection.jpg">
                    </NuxtLink>
                </div>
                <div class="gridItem15">
                    <NuxtLink to="">
                        <img src="/ador.jpg" alt="">
                    </NuxtLink>
                </div>
            </div>
    </div>
</template>

<script setup>

definePageMeta({
    key: route => route.fullPath,
    layout: 'simple'
})
</script>

<style>

.designGrid{
    margin-inline: 20px;
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 355px 1fr 355px 250px 250px 300px 480px;
}
.gridItem1 {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column: span 3;
}
.gridItem2 {
    grid-row-start: 1;
    grid-row-end: 2;
    grid-column: span 3;
} 
.gridItem3 {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column: span 2;
}
.gridItem4 {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column: span 2;
}
.gridItem5 {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column: span 2;
}
.gridItem6 {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column: span 3;
}
.gridItem7 {
    grid-row-start: 3;
    grid-row-end: 4;
    grid-column: span 3;
}
.gridItem8 {
    grid-row-start: 4;
    grid-row-end: 6;
    grid-column: span 4;
}
.gridItem9 {
    grid-row-start: 4;
    grid-row-end: 5;
    grid-column: span 2;
}
.gridItem10 {
    grid-row-start: 5;
    grid-row-end: 6;
    grid-column: span 2;
}
.gridItem11 {
    grid-row-start: 6;
    grid-row-end: 7;
    grid-column: span 2;
}
.gridItem12 {
    grid-row-start: 6;
    grid-row-end: 7;
    grid-column: span 2;
}
.gridItem13 {
    grid-row-start: 6;
    grid-row-end: 7;
    grid-column: span 2;
}
.gridItem14 {
    grid-row-start: 7;
    grid-row-end: 8;
    grid-column: span 2;
    align-self: center;
}
.gridItem15 {
    grid-row-start: 7;
    grid-row-end: 8;
    grid-column: span 4;
}
</style>