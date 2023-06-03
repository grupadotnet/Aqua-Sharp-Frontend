import { Navigate, Route, Routes } from 'react-router-dom';

import { DashboardLayout } from '@/layout';
import {
  Aquarium,
  Dashboard,
  Edit,
  Error,
  Login,
  NewAquarium,
  Settings,
  Working,
} from '@/pages';

import { useAuthorization } from './hooks';

function App() {
  const [user] = useAuthorization();

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout username={user?.username || 'User'}>
              <Navigate to="/dashboard" />
            </DashboardLayout>
          }
        />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout username={user?.username || 'User'}>
              <Dashboard />
            </DashboardLayout>
          }
        />
        <Route
          path="/working"
          element={
            <DashboardLayout username={user?.username || 'User'}>
              <Working />
            </DashboardLayout>
          }
        />
        <Route
          path="/newAquarium"
          element={
            <DashboardLayout username={user?.username || 'User'}>
              <NewAquarium />
            </DashboardLayout>
          }
        />
        <Route
          path="/aquarium/:id"
          element={
            <DashboardLayout username={user?.username || 'User'}>
              <Aquarium />
            </DashboardLayout>
          }
        />
        <Route
          path="/aquarium/:id/measurements"
          element={<h1>Historia pomiarów akwarium</h1>}
        />
        <Route
          path="/aquarium/:id/edit"
          element={
            <DashboardLayout username={user?.username || 'User'}>
              <Edit />
            </DashboardLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <DashboardLayout username={user?.username || 'User'}>
              <Settings />
            </DashboardLayout>
          }
        />
        <Route path="/first-run" element={<h1>Pierwsze uruchomienie</h1>} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/404"
          element={
            <DashboardLayout username={user?.username || 'User'}>
              <Error statusCode={404} />
            </DashboardLayout>
          }
        />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
