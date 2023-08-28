<template>
    <div class="px-12 flex justify-between items-center sticky top-0 bg-white pt-8 pb-12 ">
        <div class="text-lg font-bold "> برندهای دیجی استایل  </div>
        <div class="flex items-center gap-2 border-b border-black pb-2">
            <Icon size="21" class="text-slate-500" name="uil:search" />
            <input type="text" v-model="search" class="text-sm w-52 focus:border-none focus:outline-none" autofocus placeholder=" جستجوی برند (فارسی یا انگلیسی) ">
        </div>
    </div>
    <div class="px-12 mb-20">
        <div class="flex items-center justify-center gap-3 my-10">
            <img src="/brand-banner-1.jpg" width="290" height="290" alt="">
            <img src="/brand-banner-2.jpg" width="290" height="290" alt="">
            <img src="/brand-banner-3.jpg" width="290" height="290" alt="">
            <img src="/brand-banner-4.jpg" width="290" height="290" alt="">
        </div>
    </div>
    <div class="px-12 sticky top-[80px] bg-white pt-4">
        <div class="flex gap-20 text-gray-500">
            <div>برندهای ایرانی</div>
            <div class="flex gap-[18px]">
                <span id="alef" class="cursor-pointer">آ</span>
                <span id="aleff" class="cursor-pointer">ا</span>
                <span id="be" class="cursor-pointer">ب</span>
                <span id="pe" class="cursor-pointer">پ</span>
                <span id="te" class="cursor-pointer">ت</span>
                <span id="se" class="cursor-pointer">ث</span>
                <span id="je" class="cursor-pointer">ج</span>
                <span id="che" class="cursor-pointer">چ</span>
                <span id="he" class="cursor-pointer">ح</span>
                <span id="khe" class="cursor-pointer">خ</span>
                <span id="dal" class="cursor-pointer">د</span>
                <span id="zal" class="cursor-pointer">ذ</span>
                <span id="re" class="cursor-pointer">ر</span>
                <span id="ze" class="cursor-pointer">ز</span>
                <span id="zhe" class="cursor-pointer">ژ</span>
                <span id="sin" class="cursor-pointer">س</span>
                <span id="shin" class="cursor-pointer">ش</span>
                <span id="sad" class="cursor-pointer">ص</span>
                <span id="zad" class="cursor-pointer">ض</span>
                <span id="ta" class="cursor-pointer">ط</span>
                <span id="za" class="cursor-pointer">ظ</span>
                <span id="ein" class="cursor-pointer">ع</span>
                <span id="ghein" class="cursor-pointer">غ</span>
                <span id="fa" class="cursor-pointer">ف</span>
                <span id="ghaf" class="cursor-pointer">ق</span>
                <span id="kaf" class="cursor-pointer">ک</span>
                <span id="gaf" class="cursor-pointer">گ</span>
                <span id="lam" class="cursor-pointer">ل</span>
                <span id="mim" class="cursor-pointer">م</span>
                <span id="noon" class="cursor-pointer">ن</span>
                <span id="vav" class="cursor-pointer">و</span>
                <span id="hee" class="cursor-pointer">ه</span>
                <span id="ye" class="cursor-pointer">ی</span>
            </div>
        </div>
        <div class="flex gap-20 mt-6 text-gray-500 border-b pb-4">
            <div>برندهای خارجی</div>
            <div class="flex gap-[27px] ">
                <span id="Zletter" class="cursor-pointer">Z</span>
                <span id="Yletter" class="cursor-pointer">Y</span>
                <span id="Xletter" class="cursor-pointer">X</span>
                <span id="Wletter" class="cursor-pointer">W</span>
                <span id="Vletter" class="cursor-pointer">V</span>
                <span id="Uletter" class="cursor-pointer">U</span>
                <span id="Tletter" class="cursor-pointer">T</span>
                <span id="Sletter" class="cursor-pointer">S</span>
                <span id="Rletter" class="cursor-pointer">R</span>
                <span id="Qletter" class="cursor-pointer">Q</span>
                <span id="Pletter" class="cursor-pointer">P</span>
                <span id="Oletter" class="cursor-pointer">O</span>
                <span id="Nletter" class="cursor-pointer">N</span>
                <span id="Mletter" class="cursor-pointer">M</span>
                <span id="Lletter" class="cursor-pointer">L</span>
                <span id="Kletter" class="cursor-pointer">K</span>
                <span id="Jletter" class="cursor-pointer">J</span>
                <span id="Iletter" class="cursor-pointer">I</span>
                <span id="Hletter" class="cursor-pointer">H</span>
                <span id="Gletter" class="cursor-pointer">G</span>
                <span id="Fletter" class="cursor-pointer">F</span>
                <span id="Eletter" class="cursor-pointer">E</span>
                <span id="Dletter" class="cursor-pointer">D</span>
                <span id="Cletter" class="cursor-pointer">C</span>
                <span id="Bletter" class="cursor-pointer">B</span>
                <span id="Aletter" class="cursor-pointer">A</span>
            </div>
        </div>
    </div>
    <div class="px-12">
        <div class="flex gap-4 py-2">
            <span>فیلتر: </span>
            <span class="bg-gray-200 py-1 px-2 text-xs rounded-full">برندهای جدید</span>
            <span class="bg-gray-200 py-1 px-2 text-xs rounded-full">برندهای برتز</span>
            <span class="bg-gray-200 py-1 px-2 text-xs rounded-full"> طراح ایرانی </span>
        </div>
        <div class="border-t pt-2 pb-8" v-if="alefcomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="alefBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">آ</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in alefcomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="aleffcomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="aleffBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ا</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in aleffcomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="becomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="beBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ب</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in becomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="pecomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="peBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">پ</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in pecomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="tecomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="teBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ت</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in tecomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="secomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="seBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ث</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in secomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="jecomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="jeBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ج</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in jecomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="checomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="cheBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">چ</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in checomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="hecomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="heBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ح</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in hecomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="khecomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="kheBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">خ</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in khecomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="dalcomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="dalBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">د</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in dalcomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="zalcomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="zalBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ذ</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in zalcomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="recomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="reBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ر</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in recomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="zecomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="zeBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ز</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in zecomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="zhecomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="zheBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ژ</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in zhecomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="sincomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="sinBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">س</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in sincomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="shincomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="shinBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ش</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in shincomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="sadcomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="sadBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ص</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in sadcomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="zadcomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="zadBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ض</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in zadcomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="tacomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="taBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ط</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in tacomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="zacomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="zaBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ظ</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in zacomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="eincomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="einBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ع</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in eincomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="gheincomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="gheinBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">غ</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in gheincomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="facomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="faBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ف</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in facomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="ghafcomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="ghafBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ق</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in ghafcomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="kafcomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="kafBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ک</div>
                </div>
                <div class="flex gap-x-20 gap-y-4  flex-wrap ">
                    <div v-for="brand in kafcomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="gafcomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="gafBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">گ</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in gafcomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="lamcomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="lamBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ل</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in lamcomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="mimcomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="mimBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">م</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in mimcomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="nooncomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="noonBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ن</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in nooncomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="vavcomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="vavBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">و</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in vavcomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="heecomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="heeBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ه</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in heecomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="border-t pt-2 pb-8" v-if="yecomputed.length > 0">
            <div class="flex mt-4">
                <div class="w-32">
                    <div id="yeBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tl-full px-4 py-3">ی</div>
                </div>
                <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4">
                    <div v-for="brand in yecomputed" :key="brand.id">
                        <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.name }}</NuxtLink>
                    </div>
                </div>
            </div>
        </div>

        <div style="direction: ltr;font-family: sans-serif" class="font-bold">
            <div class="border-t pt-2 pb-8" v-if="Acomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="aBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">A</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Acomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Bcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="bBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">B</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Bcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Ccomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="cBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">C</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Ccomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Dcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="dBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">D</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Dcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Ecomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="eBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">E</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Ecomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Fcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="fBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">F</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Fcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Gcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="gBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">G</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Gcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Hcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="hBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">H</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Hcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Icomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="iBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">I</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Icomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Jcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="jBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">J</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Jcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Kcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="kBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">K</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Kcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Lcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="lBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">L</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Lcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Mcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="mBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">M</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Mcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Ncomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="nBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">N</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Ncomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Ocomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="oBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">O</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Ocomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Pcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="pBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">P</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Pcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Qcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="qBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">Q</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Qcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Rcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="rBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">R</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Rcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Scomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="sBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">S</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Scomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Tcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="tBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">T</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Tcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Ucomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="uBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">U</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Ucomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Vcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="vBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">V</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Vcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Wcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="wBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">W</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Wcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Xcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="xBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">X</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Xcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Ycomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="yBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">Y</div>
                    </div>
                    <div class="flex gap-x-20 gap-y-4   flex-wrap ">
                        <div v-for="brand in Ycomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-t pt-2 pb-8" v-if="Zcomputed.length > 0">
                <div class="flex mt-4">
                    <div class="w-32">
                        <div id="zBrand" class="w-10 bg-gray-200 rounded-br-full rounded-bl-full rounded-tr-full px-4 py-3">Z</div>
                    </div>
                    <div class="flex gap-20 flex-wrap gap-x-20 gap-y-4 ">
                        <div v-for="brand in Zcomputed" :key="brand.id">
                            <NuxtLink :to="`/brand/${brand.slug}`">{{ brand.english }}</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    </div>
</template>


<script setup>
import { debounce } from 'lodash';
useHead({
    title: 'برند های دیجی استایل'
})
definePageMeta({
    key: route => route.fullPath,
    layout: 'simple'
})

const search = ref(null)
var brands = ref([])


const {public : {apiBase}} = useRuntimeConfig()
var {data: brands} = await useFetch(`${apiBase}/brand/all-brands`, {
    query: {'search': search}
})

watch(search, debounce(async() => {
    var {data: brands} = await useFetch(`${apiBase}/brand/all-brands`, {
        query: {'search': search}
    })
    brands.value = brands
    console.log(brands);
},1500))

const alefcomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'آ'))
const aleffcomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ا'))
const becomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ب'))
const pecomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'پ'))
const tecomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ت'))
const secomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ث'))
const jecomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ج'))
const checomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'چ'))
const hecomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ح'))
const khecomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'خ'))
const dalcomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'د'))
const zalcomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ذ'))
const recomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ر'))
const zecomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ز'))
const zhecomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ژ'))
const sincomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'س'))
const shincomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ش'))
const sadcomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ص'))
const zadcomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ض'))
const tacomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ط'))
const zacomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ظ'))
const eincomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ع'))
const gheincomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'غ'))
const facomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ف'))
const ghafcomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ق'))
const kafcomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ک'))
const gafcomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'گ'))
const lamcomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ل'))
const mimcomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'م'))
const nooncomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ن'))
const vavcomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'و'))
const heecomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ه'))
const yecomputed = computed(() => brands.value.data.filter(b => b.name.charAt(0) == 'ی'))
const Acomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'a'))
const Bcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'b'))
const Ccomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'c'))
const Dcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'd'))
const Ecomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'e'))
const Fcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'f'))
const Gcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'g'))
const Hcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'h'))
const Icomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'i'))
const Jcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'j'))
const Kcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'k'))
const Lcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'l'))
const Mcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'm'))
const Ncomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'n'))
const Ocomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'o'))
const Pcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'p'))
const Qcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'q'))
const Rcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'r'))
const Scomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 's'))
const Tcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 't'))
const Ucomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'u'))
const Vcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'v'))
const Wcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'w'))
const Xcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'x'))
const Ycomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'y'))
const Zcomputed = computed(() => brands.value.data.filter(b => b.english.charAt(0) == 'z'))

onMounted(() => {
    var alef = document.getElementById('alef')
    var aleff = document.getElementById('aleff')
    var be = document.getElementById('be')
    var pe = document.getElementById('pe')
    var te = document.getElementById('te')
    var se = document.getElementById('se')
    var je = document.getElementById('je')
    var che = document.getElementById('che')
    var he = document.getElementById('he')
    var khe = document.getElementById('khe')
    var dal = document.getElementById('dal')
    var zal = document.getElementById('zal')
    var re = document.getElementById('re')
    var ze = document.getElementById('ze')
    var zhe = document.getElementById('zhe')
    var sin = document.getElementById('sin')
    var shin = document.getElementById('shin')
    var sad = document.getElementById('sad')
    var zad = document.getElementById('zad')
    var ta = document.getElementById('ta')
    var za = document.getElementById('za')
    var ein = document.getElementById('ein')
    var ghein = document.getElementById('ghein')
    var fa = document.getElementById('fa')
    var ghaf = document.getElementById('ghaf')
    var kaf = document.getElementById('kaf')
    var gaf = document.getElementById('gaf')
    var lam = document.getElementById('lam')
    var mim = document.getElementById('mim')
    var noon = document.getElementById('noon')
    var vav = document.getElementById('vav')
    var hee = document.getElementById('hee')
    var ye = document.getElementById('ye')
    var Aletter = document.getElementById('Aletter')
    var Bletter = document.getElementById('Bletter')
    var Cletter = document.getElementById('Cletter')
    var Dletter = document.getElementById('Dletter')
    var Eletter = document.getElementById('Eletter')
    var Fletter = document.getElementById('Fletter')
    var Glettere = document.getElementById('Gletter')
    var Hletter = document.getElementById('Hletter')
    var Iletter = document.getElementById('Iletter')
    var Jletter = document.getElementById('Jletter')
    var Kletter = document.getElementById('Kletter')
    var Lletter = document.getElementById('Lletter')
    var Mletter = document.getElementById('Mletter')
    var Nletter = document.getElementById('Nletter')
    var Oletter = document.getElementById('Oletter')
    var Pletter = document.getElementById('Pletter')
    var Qletter = document.getElementById('Qletter')
    var Rletter = document.getElementById('Rletter')
    var Sletter = document.getElementById('Sletter')
    var Tletter = document.getElementById('Tletter')
    var Uletter = document.getElementById('Uletter')
    var Vletter = document.getElementById('Vletter')
    var Wletter = document.getElementById('Wletter')
    var Xletter = document.getElementById('Xletter')
    var Yletter = document.getElementById('Yletter')
    var Zletter = document.getElementById('Zletter')


    if(alefcomputed.value.length > 0) {
        var alefBrand = document.getElementById('alefBrand')
        let rectAlef = alefBrand.getBoundingClientRect()
        alef.addEventListener('click', () => {
        window.scrollTo(0,rectAlef.top - 200)
    })
    }
    if(aleffcomputed.value.length > 0) {
        var aleffBrand = document.getElementById('aleffBrand')
        let rectAleff = aleffBrand.getBoundingClientRect()
        aleff.addEventListener('click', () => {
        window.scrollTo(0,rectAleff.top - 200)
    })
    }
    if(becomputed.value.length > 0) {
        var beBrand = document.getElementById('beBrand')
        let rectBe = beBrand.getBoundingClientRect()
        be.addEventListener('click', () => {
        window.scrollTo(0,rectBe.top - 200)
    })

    }
    if(pecomputed.value.length > 0) {
        var peBrand = document.getElementById('peBrand')
        let rectPe = peBrand.getBoundingClientRect()
        pe.addEventListener('click', () => {
        window.scrollTo(0, rectPe.top - 200)
    })
    }
    if(tecomputed.value.length > 0) {
        var teBrand = document.getElementById('teBrand')
        let rectTe = teBrand.getBoundingClientRect()
        te.addEventListener('click', () => {
        window.scrollTo(0, rectTe.top - 200)
    })
    }
    if(secomputed.value.length > 0) {
        var seBrand = document.getElementById('seBrand')
        let rectSe = seBrand.getBoundingClientRect()
        se.addEventListener('click', () => {
        window.scrollTo(0, rectSe.top - 200)
    })
    }
    if(jecomputed.value.length > 0) {
        var jeBrand = document.getElementById('jeBrand')
        let rectJe = jeBrand.getBoundingClientRect()
        je.addEventListener('click', () => {
        window.scrollTo(0, rectJe.top - 200)
    })
    }
    if(checomputed.value.length > 0) {
        var cheBrand = document.getElementById('cheBrand')
        let rectChe = cheBrand.getBoundingClientRect()
        che.addEventListener('click', () => {
        window.scrollTo(0, rectChe.top - 200)
    })
    }
    if(hecomputed.value.length > 0) {
        var heBrand = document.getElementById('heBrand')
        let rectHe = heBrand.getBoundingClientRect()
        he.addEventListener('click', () => {
        window.scrollTo(0, rectHe.top - 200)
    })
    }
    if(khecomputed.value.length > 0) {
        var kheBrand = document.getElementById('kheBrand')
        let rectKhe = kheBrand.getBoundingClientRect()
        khe.addEventListener('click', () => {
        window.scrollTo(0, rectKhe.top - 200)
    })
    }
    if(dalcomputed.value.length > 0) {
        var dalBrand = document.getElementById('dalBrand')
        let rectDal = dalBrand.getBoundingClientRect()
        dal.addEventListener('click', () => {
        window.scrollTo(0, rectDal.top - 200)
    })
    }
    if(zalcomputed.value.length > 0) {
        var zalBrand = document.getElementById('zalBrand')
        let rectZal = zalBrand.getBoundingClientRect()
        zal.addEventListener('click', () => {
        window.scrollTo(0, rectZal.top - 200)
    })
    }
    if(recomputed.value.length > 0) {
        var reBrand = document.getElementById('reBrand')
        let rectRe = reBrand.getBoundingClientRect()
        re.addEventListener('click', () => {
        window.scrollTo(0, rectRe.top - 200)
    })
    }
    if(zecomputed.value.length > 0) {
        var zeBrand = document.getElementById('zeBrand')
        let rectZe = zeBrand.getBoundingClientRect()
        ze.addEventListener('click', () => {
        window.scrollTo(0, rectZe.top - 200)
    })
    }
    if(zhecomputed.value.length > 0) {
        var zheBrand = document.getElementById('zheBrand')
        let rectZhe = zheBrand.getBoundingClientRect()
        zhe.addEventListener('click', () => {
        window.scrollTo(0, rectZhe.top - 200)
    })
    }
    if(sincomputed.value.length > 0) {
        var sinBrand = document.getElementById('sinBrand')
        let rectSin = sinBrand.getBoundingClientRect()
        sin.addEventListener('click', () => {
        window.scrollTo(0, rectSin.top - 200)
    })
    }
    if(shincomputed.value.length > 0) {
        var shinBrand = document.getElementById('shinBrand')
        let rectShin = shinBrand.getBoundingClientRect()
        shin.addEventListener('click', () => {
        window.scrollTo(0, rectShin.top - 200)
    })
    }
    if(sadcomputed.value.length > 0) {
        var sadBrand = document.getElementById('sadBrand')
        let rectSad = sadBrand.getBoundingClientRect()
        sad.addEventListener('click', () => {
        window.scrollTo(0, rectSad.top - 200)
    })
    }
    if(zadcomputed.value.length > 0) {
        var zadBrand = document.getElementById('zadBrand')
        let rectZad = zadBrand.getBoundingClientRect()
        zad.addEventListener('click', () => {
        window.scrollTo(0, rectZad.top - 200)
    })
    }
    if(tacomputed.value.length > 0) {
        var taBrand = document.getElementById('taBrand')
        let rectTa = taBrand.getBoundingClientRect()
        ta.addEventListener('click', () => {
        window.scrollTo(0, rectTa.top - 200)
    })
    }
    if(zacomputed.value.length > 0) {
        var zaBrand = document.getElementById('zaBrand')
        let rectZa = zaBrand.getBoundingClientRect()
        za.addEventListener('click', () => {
        window.scrollTo(0, rectZa.top - 200)
    })
    }
    if(eincomputed.value.length > 0) {
        var einBrand = document.getElementById('einBrand')
        let rectEin = einBrand.getBoundingClientRect()
        ein.addEventListener('click', () => {
        window.scrollTo(0, rectEin.top - 200)
    })
    }
    if(gheincomputed.value.length > 0) {
        var gheinBrand = document.getElementById('gheinBrand')
        let rectGhein = gheinBrand.getBoundingClientRect()
        ghein.addEventListener('click', () => {
        window.scrollTo(0, rectGhein.top - 200)
    })
    }
    if(facomputed.value.length > 0) {
        var faBrand = document.getElementById('faBrand')
        let rectFa = faBrand.getBoundingClientRect()
        fa.addEventListener('click', () => {
        window.scrollTo(0, rectFa.top - 200)
    })
    }
    if(ghafcomputed.value.length > 0) {
        var ghafBrand = document.getElementById('ghafBrand')
        let rectGhaf = ghafBrand.getBoundingClientRect()
        ghaf.addEventListener('click', () => {
        window.scrollTo(0, rectGhaf.top - 200)
    })
    }
    if(kafcomputed.value.length > 0) {
        var kafBrand = document.getElementById('kafBrand')
        let rectKaf = kafBrand.getBoundingClientRect()
        kaf.addEventListener('click', () => {
        window.scrollTo(0, rectKaf.top - 200)
    })
    }
    if(gafcomputed.value.length > 0) {
        var gafBrand = document.getElementById('gafBrand')
        let rectGaf = gafBrand.getBoundingClientRect()
        gaf.addEventListener('click', () => {
        window.scrollTo(0, rectGaf.top - 200)
    })
    }
    if(lamcomputed.value.length > 0) {
        var lamBrand = document.getElementById('lamBrand')
        let rectLam = lamBrand.getBoundingClientRect()
        lam.addEventListener('click', () => {
        window.scrollTo(0, rectLam.top - 200)
    })
    }
    if(mimcomputed.value.length > 0) {
        var mimBrand = document.getElementById('mimBrand')
        let rectMim = mimBrand.getBoundingClientRect()
        mim.addEventListener('click', () => {
        window.scrollTo(0, rectMim.top - 200)
    })
    }
    if(nooncomputed.value.length > 0) {
        var noonBrand = document.getElementById('noonBrand')
        let rectNoon = noonBrand.getBoundingClientRect()
        noon.addEventListener('click', () => {
        window.scrollTo(0, rectNoon.top - 200)
    })
    }
    if(vavcomputed.value.length > 0) {
        var vavBrand = document.getElementById('vavBrand')
        let rectVav = vavBrand.getBoundingClientRect()
        vav.addEventListener('click', () => {
        window.scrollTo(0, rectVav.top - 200)
    })
    }
    if(heecomputed.value.length > 0) {
        var heeBrand = document.getElementById('heeBrand')
        let rectHee = heeBrand.getBoundingClientRect()
        hee.addEventListener('click', () => {
        window.scrollTo(0, rectHee.top - 200)
    })
    }
    if(yecomputed.value.length > 0) {
        var yeBrand = document.getElementById('yeBrand')
        let rectYe = yeBrand.getBoundingClientRect()
        ye.addEventListener('click', () => {
        window.scrollTo(0, rectYe.top - 200)
    })
    }
    if(Acomputed.value.length > 0) {
        var aBrand = document.getElementById('aBrand')
        let rectA = aBrand.getBoundingClientRect()
        Aletter.addEventListener('click', () => {
        window.scrollTo(0, rectA.top - 200)
    })
    }
    if(Bcomputed.value.length > 0) {
        var bBrand = document.getElementById('bBrand')
        let rectB = bBrand.getBoundingClientRect()
        Bletter.addEventListener('click', () => {
        window.scrollTo(0, rectB.top - 200)
    })
    }
    if(Ccomputed.value.length > 0) {
        var cBrand = document.getElementById('cBrand')
        let rectC = cBrand.getBoundingClientRect()
        Cletter.addEventListener('click', () => {
        window.scrollTo(0, rectC.top - 200)
    })
    }
    if(Dcomputed.value.length > 0) {
        var dBrand = document.getElementById('dBrand')
        let rectD = dBrand.getBoundingClientRect()
        Dletter.addEventListener('click', () => {
        window.scrollTo(0, rectD.top - 200)
    })
    }
    if(Ecomputed.value.length > 0) {
        var eBrand = document.getElementById('eBrand')
        let rectE = eBrand.getBoundingClientRect()
        Eletter.addEventListener('click', () => {
        window.scrollTo(0, rectE.top - 200)
    })
    }
    if(Fcomputed.value.length > 0) {
        var fBrand = document.getElementById('fBrand')
        let rectF = fBrand.getBoundingClientRect()
        Fletter.addEventListener('click', () => {
        window.scrollTo(0, rectF.top - 200)
    })
    }
    if(Gcomputed.value.length > 0) {
        var gBrand = document.getElementById('gBrand')
        let rectG = gBrand.getBoundingClientRect()
        Gletter.addEventListener('click', () => {
        window.scrollTo(0, rectG.top - 200)
    })
    }
    if(Hcomputed.value.length > 0) {
        var hBrand = document.getElementById('hBrand')
        let rectH = hBrand.getBoundingClientRect()
        Hletter.addEventListener('click', () => {
        window.scrollTo(0, rectH.top - 200)
    })
    }
    if(Icomputed.value.length > 0) {
        var iBrand = document.getElementById('iBrand')
        let rectI = iBrand.getBoundingClientRect()
        Iletter.addEventListener('click', () => {
        window.scrollTo(0, rectI.top - 200)
    })
    }
    if(Jcomputed.value.length > 0) {
        var jBrand = document.getElementById('jBrand')
        let rectJ = jBrand.getBoundingClientRect()
        Jletter.addEventListener('click', () => {
        window.scrollTo(0, rectJ.top - 200)
    })
    }
    if(Kcomputed.value.length > 0) {
        var kBrand = document.getElementById('kBrand')
        let rectK = kBrand.getBoundingClientRect()
        Kletter.addEventListener('click', () => {
        window.scrollTo(0, rectK.top - 200)
    })
    }
    if(Lcomputed.value.length > 0) {
        var lBrand = document.getElementById('lBrand')
        let rectL = lBrand.getBoundingClientRect()
        Lletter.addEventListener('click', () => {
        window.scrollTo(0, rectL.top - 200)
    })
    }
    if(Mcomputed.value.length > 0) {
        var mBrand = document.getElementById('mBrand')
        let rectM = mBrand.getBoundingClientRect()
        Mletter.addEventListener('click', () => {
        window.scrollTo(0, rectM.top - 200)
    })
    }
    if(Ncomputed.value.length > 0) {
        var nBrand = document.getElementById('nBrand')
        let rectN = nBrand.getBoundingClientRect()
        Nletter.addEventListener('click', () => {
        window.scrollTo(0, rectN.top - 200)
    })
    }
    if(Ocomputed.value.length > 0) {
        var oBrand = document.getElementById('oBrand')
        let rectO = oBrand.getBoundingClientRect()
        Oletter.addEventListener('click', () => {
        window.scrollTo(0, rectO.top - 200)
    })
    }
    if(Pcomputed.value.length > 0) {
        var pBrand = document.getElementById('pBrand')
        let rectP = pBrand.getBoundingClientRect()
        Pletter.addEventListener('click', () => {
        window.scrollTo(0, rectP.top - 200)
    })
    }
    if(Qcomputed.value.length > 0) {
        var qBrand = document.getElementById('qBrand')
        let rectQ = qBrand.getBoundingClientRect()
        Qletter.addEventListener('click', () => {
        window.scrollTo(0, rectQ.top - 200)
    })
    }
    if(Rcomputed.value.length > 0) {
        var rBrand = document.getElementById('rBrand')
        let rectR = rBrand.getBoundingClientRect()
        Rletter.addEventListener('click', () => {
        window.scrollTo(0, rectR.top - 200)
    })
    }
    if(Scomputed.value.length > 0) {
        var sBrand = document.getElementById('sBrand')
        let rectS = sBrand.getBoundingClientRect()
        Sletter.addEventListener('click', () => {
        window.scrollTo(0, rectS.top - 200)
    })
    }
    if(Tcomputed.value.length > 0) {
        var tBrand = document.getElementById('tBrand')
        let rectT = tBrand.getBoundingClientRect()
        Tletter.addEventListener('click', () => {
        window.scrollTo(0, rectT.top - 200)
    })
    }
    if(Ucomputed.value.length > 0) {
        var uBrand = document.getElementById('uBrand')
        let rectU = uBrand.getBoundingClientRect()
        Uletter.addEventListener('click', () => {
        window.scrollTo(0, rectU.top - 200)
    })
    }
    if(Vcomputed.value.length > 0) {
        var vBrand = document.getElementById('vBrand')
        let rectV = vBrand.getBoundingClientRect()
        Vletter.addEventListener('click', () => {
        window.scrollTo(0, rectV.top - 200)
    })
    }
    if(Wcomputed.value.length > 0) {
        var wBrand = document.getElementById('wBrand')
        let rectW = wBrand.getBoundingClientRect()
        Wletter.addEventListener('click', () => {
        window.scrollTo(0, rectW.top - 200)
    })
    }
    if(Xcomputed.value.length > 0) {
        var xBrand = document.getElementById('xBrand')
        let rectX = xBrand.getBoundingClientRect()
        Xletter.addEventListener('click', () => {
        window.scrollTo(0, rectX.top - 200)
    })
    }
    if(Ycomputed.value.length > 0) {
        var yBrand = document.getElementById('yBrand')
        let rectY = yBrand.getBoundingClientRect()
        Yletter.addEventListener('click', () => {
        window.scrollTo(0, rectY.top - 200)
    })
    }
    if(Zcomputed.value.length > 0) {
        var zBrand = document.getElementById('zBrand')
        let rectZ = zBrand.getBoundingClientRect()
        Zletter.addEventListener('click', () => {
            window.scrollTo(0, rectZ.top - 200)
        })
    }

})
</script>