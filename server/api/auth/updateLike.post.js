export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const token = getCookie(event, 'token')
    const {public: {apiBase}} = useRuntimeConfig()

    try {
        const data = await $fetch(`${apiBase}/singleProduct/updateLike`,{
            method: "POST",
            body,
            headers: {
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        return data.data
    } catch (error) {
        return error
    }
})