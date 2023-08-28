<template>
    <div class="flex gap-2">
        <div class="flex cursor-pointer "
        id="dropdownMenuButton1"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
        data-te-ripple-init>
            <Icon name="uil:user" />
            <Icon size="19px" name="uil:angle-down" />
        </div>
        <ul
            class="absolute z-[1000] float-right p-2  m-0 hidden min-w-max list-none overflow-hidden rounded-md border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
            aria-labelledby="dropdownMenuButton1"
            data-te-dropdown-menu-ref>
            <li>
                <NuxtLink to="/profile" class="text-gray-500 hover:text-black flex gap-2 items-center pl-12 py-2">
                    <Icon name="uil:setting" />
                    <span class="text-[14px]">حساب کاربری</span>
                </NuxtLink>
            </li>
            <li class="border-t border-t-slate-200">
                <NuxtLink to="/profile/orders" class="text-gray-500 hover:text-black flex gap-2 items-center pl-12 py-2">
                    <Icon name="uil:shopping-bag" />
                    <span class="text-[14px]"> سفارش های من </span>
                </NuxtLink>
            </li>
            <li class="border-t border-t-slate-200">
                <NuxtLink to="/profile/next-purchase" class="text-gray-500 hover:text-black flex gap-2 items-center pl-12 py-2">
                    <Icon name="material-symbols:favorite-outline-rounded" />
                    <span class="text-[14px]"> لیست علاقه مندی ها  </span>
                </NuxtLink>
            </li>
            <li class="border-t border-t-slate-200">
                <NuxtLink to="#" class="text-gray-500 hover:text-black flex gap-2 items-center pl-12 py-2">
                    <Icon name="uil:exit" />
                    <span class="text-[14px]">  خروج از حساب کاربری  </span>
                </NuxtLink>
            </li>
        </ul>
        <NuxtLink to="/profile" >
            <div v-if="authUser.firstname" class="text-[12px] font-bold">{{ fullname }} <span>عزیز، سلام</span></div>
            <div v-else class="text-[12px] font-bold">{{ authUser.cellphone }} <span>عزیز، سلام</span></div>
        </NuxtLink>
    </div>
</template>

<script setup>
const {authUser} = useAuth()
const fullname = computed(() => authUser.value.firstname + ' ' + authUser.value.lastname)

</script>