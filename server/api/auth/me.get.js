export default defineEventHandler(async (event) => {
    const {public: {apiBase}} = useRuntimeConfig()
    const token = getCookie(event, 'token')
    try {
        const data = await $fetch(`${apiBase}/me`, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        return data.data
    } catch (error) {
        if(error.statusCode == 401) {
            setCookie(event,'token', '',{
                secure: true,
                httpOnly: true,
                maxAge: new Date(0),
                path: '/'
            })
        }
        return error
    }
})