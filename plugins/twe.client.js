import * as twe from 'tw-elements';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use('twe', twe)
})