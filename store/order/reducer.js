import {success, error} from 'redux-saga-requests';
import { STATE_STATUSES } from '../../common/constants/statuses';
import {ORDER_NOT_REGISTERED} from './actions';

const order = {
    id: null,
    user_id:'',
    status: '',
    type: ''
};

const initialState = {
    order: order,
    status: STATE_STATUSES.PENDING,
    exception: {
        message: null,
        errors: {}
    }
};

export default (state = initialState, action) => {
    switch (action.type) {


    case ORDER_NOT_REGISTERED: {
        return processReducer(state);
    }
    case success(ORDER_NOT_REGISTERED) : {
        return { ...state, status: STATE_STATUSES.READY};
    }
    case error(ORDER_NOT_REGISTERED) : {
        return errorReducer(action.payload.response.data);
    }


    default:
        return state;
    }
};

const errorReducer = (exception, state = initialState) => ({
    ...state,
    status: STATE_STATUSES.ERROR,
    exception: {
        message: exception,
    }
});

const processReducer = (state = initialState) => ({
    ...state,
    status: STATE_STATUSES.PENDING,
    exception: { ...initialState.exception }
});
