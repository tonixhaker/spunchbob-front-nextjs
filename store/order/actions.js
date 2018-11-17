const resourceBase = '/api';


export const ORDER_NOT_REGISTERED = 'ORDER_NOT_REGISTERED';
export const notRegisteredOrder = (data) => ({
    type: ORDER_NOT_REGISTERED,
    payload: {
        request: {
            method: 'post',
            url: `${resourceBase}/not-registered-order`,
            data
        }
    }
});

