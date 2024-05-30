import axios from 'axios';

export const AxiosInstance = axios.create({
    baseURL: process.env['NX_APP_API_URL'] || '',
});
AxiosInstance.interceptors.response.use((data) => data.data);

export default AxiosInstance;