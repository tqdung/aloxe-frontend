/* eslint-disable @nx/enforce-module-boundaries */
import { Navigate, RouteObject } from 'react-router-dom';
import CustomerApp from 'web-customer/Module';
import DriverApp from 'web-driver/Module';
import AuthenticationApp from 'web-authentication/Module';
import { useUserProfile } from '@aloxe-frontend/data-application-store';

import AppLayout from '../components/AppLayout';

const Permission = () => {
  const user = useUserProfile();
  if (user?.role === "CUSTOMER") {
    return <Navigate to="/customer" />
  }
  if (user?.role === "DRIVER") {
    return <Navigate to="/driver" />
  }
  return null;
};

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '', element: <Permission /> },
      { path: 'customer', Component: CustomerApp },
      { path: 'driver', Component: DriverApp },
    ],
  },
  {
    path: '/auth',
    Component: AuthenticationApp,
  },
];
