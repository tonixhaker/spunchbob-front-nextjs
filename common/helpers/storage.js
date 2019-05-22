import axios from 'axios';

export const tokenRestore = () => {
    return localStorage.getItem('authToken');
};

export const tokenStore = (token) => {
    localStorage.setItem('authToken', token);
    axios.defaults.headers.common = {'Authorization': `Token ${token}`};
};

export const tokenRemove = () => {
    localStorage.removeItem('authToken');
};

export const setAuthHeader = (token=localStorage.getItem('authToken')) => {
    axios.defaults.headers.common = {'Authorization': `Token ${token}`};
};