import axios from 'axios';

import { createRequestInstance, watchRequests } from 'redux-saga-requests';
import { createDriver } from 'redux-saga-requests-axios';

axios.defaults.baseURL = 'http://localhost:8000/api';


export default function* rootSaga() {
    yield createRequestInstance({ driver: createDriver(axios) });
    yield watchRequests();
}