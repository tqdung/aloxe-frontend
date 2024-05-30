import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from '../routes';

export function AppRouter() {
  return <RouterProvider router={createBrowserRouter(routes)} />;
}

export default AppRouter;