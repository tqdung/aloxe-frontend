import {
  AxiosError,
  AxiosInstance,
  AxiosRequestHeaders,
  HttpStatusCode,
} from 'axios';
import { useApplicationStore } from '@aloxe-frontend/data-application-store';

export const authenticationInterceptor = (axios: AxiosInstance) => {
  axios.interceptors.request.use((config) => {
    const { auth } = useApplicationStore.getState();
    if (config.url?.startsWith('/api/auth')) {
      return config;
    }
    return {
      ...config,
      headers: {
        ...config.headers,
        'x-access-token': auth?.accessToken,
        'ngrok-skip-browser-warning': 69420,
      } as unknown as AxiosRequestHeaders,
    };
  });

  axios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      const { clearAuth } = useApplicationStore.getState();
      if (error.response?.status === HttpStatusCode.Unauthorized) {
        clearAuth();
      }
      return Promise.reject(error);
    }
  );
};

export default authenticationInterceptor;
