export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {public : {apiBase}} = useRuntimeConfig()
    const token = getCookie(event, 'token')

    try {
        await $fetch(`${apiBase}/profile/userInfo`,{
            method: 'POST',
            body,
            headers: {
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        return 'data'
    } catch (error) {
        return error;
    }
})