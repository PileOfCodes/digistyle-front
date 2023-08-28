export default defineEventHandler(async (event) => {
    const token = getCookie(event, 'token')
    const {public: {apiBase}} = useRuntimeConfig()

    try {
        const data = await $fetch(`${apiBase}/auth/logout`, {
            method: 'POST',
            headers: {
                'Accept' : 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        })
        setCookie(event, 'token', '', {
            secure: true,
            httpOnly: true,
            maxAge: new Date(0),
            path: '/'
        })
        return data;
    } catch (error) {
        return error
    }
})