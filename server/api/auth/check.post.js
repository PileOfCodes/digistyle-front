export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const loginToken = getCookie(event,'login_token')
    const {public : {apiBase}} = useRuntimeConfig()

    try {
        const data = await $fetch(`${apiBase}/auth/check`, {
            method: 'POST',
            body: {...body, login_token: loginToken},
            headers: {
                'ACCEPT' : 'application/json'
            }
        })
        setCookie(event, 'token', data.data.token, {
            secure: true,
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
        })
        setCookie(event, 'login_token', '', {
            secure: true,
            httpOnly: true,
            maxAge: new Date(0),
            path: '/'
        })
        return data.data.user;
    } catch (error) {
        return error;
    }
})