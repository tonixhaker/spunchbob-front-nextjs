const resourceBase = '/api';

export const AUTH_LOGIN = 'AUTH_LOGIN';

export const login = (data) => ({
    type: AUTH_LOGIN,
    payload: {
        request: {
            method: 'post',
            url: `${resourceBase}/login`,
            data
        }
    }
});

export const AUTH_REGISTER = 'AUTH_REGISTER';
export const register = (data) => ({
    type: AUTH_REGISTER,
    payload: {
        request: {
            method: 'post',
            url: `${resourceBase}/register`,
            data
        }
    }
});

export const AUTH_FETCH_USER = 'AUTH_FETCH_USER';
export const fetchAuthUser = () => ({
    type: AUTH_FETCH_USER,
    payload: {
        request: {
            method: 'post',
            url: `${resourceBase}/get-auth-user`
        }
    }
});

export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const logout = () => ({
    type: AUTH_LOGOUT,
    payload: {
        request: {
            method: 'post',
            url: `${resourceBase}/logout`
        }
    }
});

export const AUTH_GOOGLE = 'AUTH_GOOGLE';
export const google_auth = (token) => ({
    type: AUTH_GOOGLE,
    payload: {
        request: {
            method: 'post',
            url: `${resourceBase}/social_login/google`,
            data:token
        }
    }
});

export const AUTH_TELEGRAM = 'AUTH_TELEGRAM';
export const telegram_auth = (response) => ({
    type: AUTH_TELEGRAM,
    payload: {
        request: {
            method: 'post',
            url: `${resourceBase}/social_login/telegram`,
            data:response
        }
    }
});


export const AUTH_SET_PASSWORD = 'AUTH_SET_PASSWORD';
export const set_password = (data) => ({
    type: AUTH_SET_PASSWORD,
    payload: {
        request: {
            method: 'post',
            url: `${resourceBase}/set-password`,
            data
        }
    }
});
