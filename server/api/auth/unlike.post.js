export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const token = getCookie(event, 'token')
    const {public: {apiBase}} = useRuntimeConfig()

    try {
        await $fetch(`${apiBase}/singleProduct/unLike`,{
            method: "POST",
            body,
            headers: {
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        return 'data'
    } catch (error) {
        return error
    }
})