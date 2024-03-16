import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const WebAuthentication = React.lazy(() => import('web-authentication/Module'));

const WebCustomer = React.lazy(() => import('web-customer/Module'));

const WebDriver = React.lazy(() => import('web-driver/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/web-authentication">WebAuthentication</Link>
        </li>

        <li>
          <Link to="/web-customer">WebCustomer</Link>
        </li>

        <li>
          <Link to="/web-driver">WebDriver</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="web-aloxe" />} />

        <Route path="/web-authentication" element={<WebAuthentication />} />

        <Route path="/web-customer" element={<WebCustomer />} />

        <Route path="/web-driver" element={<WebDriver />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
