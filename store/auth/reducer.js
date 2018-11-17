import {success, error} from 'redux-saga-requests';
import { STATE_STATUSES } from '../../common/constants/statuses';
import {tokenRemove, tokenStore} from '../../common/helpers/storage';
import {
    AUTH_FETCH_USER,
    AUTH_GOOGLE,
    AUTH_LOGIN,
    AUTH_LOGOUT,
    AUTH_REGISTER,
    AUTH_SET_PASSWORD,
    AUTH_TELEGRAM
} from './actions';

const user = {
    id: null,
    first_name: '',
    last_name: '',
    email: '',
    avatar_url:'',
    full_name:'',
    is_admin:0
};

const initialState = {
    user: user,
    isAuthenticated: false,
    status: STATE_STATUSES.PENDING,
    exception: {
        message: null,
        errors: {}
    }
};

export default (state = initialState, action) => {
    switch (action.type) {


    case AUTH_LOGIN: {
        return processReducer(state);
    }
    case success(AUTH_LOGIN) : {
        const { token, user } = action.payload.data.data;
        tokenStore(token);
        return { ...state, status: STATE_STATUSES.READY, user:user, isAuthenticated: true };
    }
    case error(AUTH_LOGIN) : {
        return errorReducer(action.payload.response.data);
    }

    case AUTH_GOOGLE: {
        return processReducer(state);
    }
    case success(AUTH_GOOGLE) : {
        const { token, user } = action.payload.data.data;
        tokenStore(token);
        return { ...state, status: STATE_STATUSES.READY, user:user, isAuthenticated: true };
    }
    case error(AUTH_GOOGLE) : {
        return errorReducer(action.payload.response.data);
    }

    case AUTH_TELEGRAM: {
        return processReducer(state);
    }
    case success(AUTH_TELEGRAM) : {
        const { token, user } = action.payload.data.data;
        tokenStore(token);
        return { ...state, status: STATE_STATUSES.READY, user:user, isAuthenticated: true };
    }
    case error(AUTH_TELEGRAM) : {
        return errorReducer(action.payload.response.data);
    }


    case AUTH_REGISTER : {
        return processReducer(state);
    }
    case success(AUTH_REGISTER) : {
        const { token, user } = action.payload.data.data;
        tokenStore(token);
        return { ...state, status: STATE_STATUSES.READY, user:user, isAuthenticated: true };
    }
    case error(AUTH_REGISTER) : {
        return errorReducer(action.payload.response.data);
    }


    case AUTH_FETCH_USER: {
        return processReducer(state);
    }
    case success(AUTH_FETCH_USER) : {
        const { user } = action.payload.data.data;
        return { ...state, status: STATE_STATUSES.READY, user:user, isAuthenticated: true };
    }
    case error(AUTH_FETCH_USER) : {
        tokenRemove();
        return errorReducer(action.payload.response.data);
    }

    case AUTH_LOGOUT: {
        return processReducer(state);
    }
    case success(AUTH_LOGOUT): {
        return {...initialState, status: STATE_STATUSES.READY, isAuthenticated: false };
    }
    case error(AUTH_LOGOUT): {
        return errorReducer(action.payload.response.data);
    }

    case AUTH_SET_PASSWORD: {
        return processReducer(state);
    }
    case success(AUTH_SET_PASSWORD): {
        const { token, user } = action.payload.data.data;
        tokenStore(token);
        return { ...state, status: STATE_STATUSES.READY, user:user, isAuthenticated: true };
    }
    case error(AUTH_SET_PASSWORD): {
        return errorReducer(action.payload.response.data);
    }


    default:
        return state;
    }
};

const errorReducer = (exception, state = initialState) => ({
    ...state,
    isAuthenticated: !! state.user.id,
    status: STATE_STATUSES.ERROR,
    exception: {
        errors: {...exception.errors},
        message: exception.message,
    }
});

const processReducer = (state = initialState) => ({
    ...state,
    status: STATE_STATUSES.PENDING,
    exception: { ...initialState.exception }
});
