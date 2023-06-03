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
      <DashboardLayout username={user?.username || 'User'}>
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
          <Route path="/login" element={<Login />} />
          <Route path="/404" element={<Error statusCode={404} />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </DashboardLayout>
    </div>
  );
}

export default App;
