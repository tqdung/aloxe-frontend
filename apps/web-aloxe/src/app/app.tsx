import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AxiosInstance } from '@aloxe-frontend/aloxe-api';
import { authenticationInterceptor } from '@aloxe-frontend/util-axios';

import AppRouter from '../components/AppRouter';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  authenticationInterceptor(AxiosInstance);
  return (
    <React.Suspense fallback={undefined}>
      <ChakraProvider
        toastOptions={{ defaultOptions: { position: 'top-right' } }}
      >
        <QueryClientProvider client={queryClient}>
          <AppRouter />
        </QueryClientProvider>
      </ChakraProvider>
    </React.Suspense>
  );
}

export default App;
