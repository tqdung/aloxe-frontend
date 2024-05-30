import { Navigate, Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import { useApplicationStore } from '@aloxe-frontend/data-application-store';
import { AppDrawer } from './AppDrawer';

export function AppLayout() {
  const auth = useApplicationStore((store) => store.auth);
  if (!auth) {
    return <Navigate to="/auth" />;
  }

  return (
    <Container h="100vh" padding="0" position="relative">
      <AppDrawer />
      <Outlet />
    </Container>
  );
}

export default AppLayout;
