<template>
    <div>
        <LazyCategorySlider  />
        <div class="my-10 flex flex-col items-center">
            <LazyCategoryCards />
        </div>
        <LazyCategoryWomenCard v-if="route.params.slug == 'womens-apparel-shop'" />
        <LazyCategoryMenCard v-else-if="route.params.slug == 'mens-apparel-shop'" />
        <LazyCategoryMenCard v-else-if="route.params.slug == 'kids-apparel-shop'" />
        <LazyCategoryMakeupCard v-else-if="route.params.slug == 'personal-appliance-shop'" />
    </div>
</template>

<script setup>
const route = useRoute()
</script>