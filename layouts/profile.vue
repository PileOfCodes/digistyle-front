<template>
    <div class="flex gap-8 my-8 mx-12">
        <div class="flex flex-col ">
            <div class="border rounded-full w-[42px] border-black p-3 flex items-center justify-center">
                <Icon name="uil:user"  />
            </div>
            <div class="border-r-2 mr-[20px] border-black py-4"></div>     
            <div class="flex items-center gap-4  mr-2">
                <Icon size="21" name="uil:wallet" />
                <div class="text-[10px] flex space-y-2">
                    <span class=""> 0 تومان</span>
                </div>
            </div>
            <NuxtLink to="#" class="text-blue-400 mr-12 mb-2">
                <span class="text-[10px]">افزایش موجودی</span>
                <Icon name="uil:arrow-left" />
            </NuxtLink>
            <div class="border-t py-4 w-[200px]">
                <div class="flex flex-col space-y-3">
                    <NuxtLink to="/profile/orders" :class="$route.path == '/profile/orders' ? 'text-black' : 'text-gray-500'" class="flex gap-2 items-center hover:text-black duration-100">
                        <Icon size="27" name="uil:shopping-bag" />
                        <span class="text-sm">سفارشات من</span>
                    </NuxtLink>
                    <NuxtLink to="/profile/next-purchase" :class="$route.path == '/profile/next-purchase' ? 'text-black' : 'text-gray-500'" class="flex gap-2 items-center hover:text-black duration-100">
                        <Icon size="27" name="uil:favorite" />
                        <span class="text-sm"> کالاهای مورد علاقه </span>
                    </NuxtLink>
                    <NuxtLink to="/profile/address" :class="$route.path == '/profile/address' ? 'text-black' : 'text-gray-500'"  class="flex gap-2 items-center hover:text-black duration-100">
                        <Icon size="27" name="uil:home" />
                        <span class="text-sm"> آدرس ها </span>
                    </NuxtLink>
                    <NuxtLink to="/profile/comments" :class="$route.path == '/profile/comments' ? 'text-black' : 'text-gray-500'" class="flex gap-2 items-center hover:text-black duration-100">
                        <Icon size="27" name="uil:comment" />
                        <span class="text-sm">  نظرات ثبت شده </span>
                    </NuxtLink>
                    <NuxtLink to="/profile/user-gift-cards" :class=" $route.path == '/profile/user-gift-cards'? 'text-black' : 'text-gray-500'" class="flex gap-2 items-center hover:text-black duration-100">
                        <Icon size="27" name="uil:card-atm" />
                        <span class="text-sm">  کارت های هدیه </span>
                    </NuxtLink>
                    <NuxtLink to="/profile/additional-info" :class=" $route.path == '/profile/additional-info' ? 'text-black' : 'text-gray-500'" class="flex gap-2 items-center hover:text-black cursor-pointer duration-100">
                        <Icon size="27" name="uil:user" />
                        <span class="text-sm">  اطلاعات حساب </span>
                    </NuxtLink>
                    <NuxtLink to="/user/recover-password" class="flex gap-2 items-center text-gray-500 hover:text-black cursor-pointer duration-100">
                        <Icon size="27" name="uil:lock" />
                        <span class="text-sm">  ایجاد رمز ورود </span>
                    </NuxtLink>
                </div>
            </div>
            <div class="border-t py-4 w-[200px]">
                <div @click="logout" class="flex gap-2 items-center text-gray-500 hover:text-black cursor-pointer duration-100">
                    <Icon size="27" name="uil:exit" />
                    <span class="text-sm"> خروج از حساب کاربری</span>
                </div>
            </div>
        </div>
        <slot />
    </div>
</template>

<script setup>
const {authUser} = useAuth()
async function logout() {
    await $fetch('/api/auth/logout', { method: 'POST'})
    authUser.value = null
    return navigateTo('/')
}
</script>