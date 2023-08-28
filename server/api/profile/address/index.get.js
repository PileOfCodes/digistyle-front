export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'token')
    const {public : {apiBase}} = useRuntimeConfig()

    try {
        const data = await $fetch(`${apiBase}/profile/addresses`, {
            headers : {
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        return data.data
    } catch (error) {
        return error
    }
})