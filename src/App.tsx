import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Ux4iotContextProvider } from 'ux4iot-react';

import { DashboardLayout } from '@/layout';
import {
  Aquarium,
  Dashboard,
  Edit,
  Login,
  NewAquarium,
  PageNotFound,
  Settings,
  Working,
} from '@/pages';

import { useAuthorization } from './hooks';

function App() {
  const [user] = useAuthorization();

  const isLoggedIn = (component: React.ReactNode) =>
    user?.isLogged ? (
      <DashboardLayout username={user?.username || 'User'}>
        {component}
      </DashboardLayout>
    ) : (
      <Navigate to="/login" />
    );

  return (
    <div>
      <DashboardLayout username={user?.username || 'Wiktor'}>
        <Ux4iotContextProvider
          options={{
            adminConnectionString: import.meta.env.VITE_ACCESS,
            onSocketConnectionUpdate: (reason, description) =>
              console.log(reason, description),
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/working" element={<Working />} />
            <Route path="/newAquarium" element={<NewAquarium />} />
            <Route path="/aquarium/:id" element={<Aquarium />} />
            <Route
              path="/aquarium/:id/measurements"
              element={<h1>Historia pomiarów akwarium</h1>}
            />
            <Route path="/aquarium/:id/edit" element={<Edit />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/first-run" element={<h1>Pierwsze uruchomienie</h1>} />
            <Route path="/404" element={<PageNotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </Ux4iotContextProvider>
      </DashboardLayout>
    </div>
  );
}

export default App;
