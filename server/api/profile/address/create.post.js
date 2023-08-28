export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {public : {apiBase}} = useRuntimeConfig()
    const token = getCookie(event, 'token')

    try {
        const data = await $fetch(`${apiBase}/profile/address/create`,{
            method: 'POST',
            body,
            headers: {
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        return data.data;
    } catch (error) {
        return error;
    }
})