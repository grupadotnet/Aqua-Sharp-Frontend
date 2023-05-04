import { Navigate, Route, Routes } from 'react-router-dom';

import { DashboardLayout } from '@/layout';
import { Edit } from '@/pages/edit';
import { Settings } from '@/pages/settings';
import { Working } from '@/pages/working';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout username="uzytkownik testowy">
              <Working />
            </DashboardLayout>
          }
        />
        <Route path="/aquarium" element={<h1>Nowe akwarium</h1>} />
        <Route
          path="/aquarium/:id"
          element={<h1>Szczegóły danego akwarium</h1>}
        />
        <Route
          path="/aquarium/:id/measurements"
          element={<h1>Historia pomiarów akwarium</h1>}
        />
        <Route
          path="/aquarium/:id/edit"
          element={
            <DashboardLayout username="testowy">
              <Edit />
            </DashboardLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <DashboardLayout username="test">
              <Settings />
            </DashboardLayout>
          }
        />
        <Route path="/first-run" element={<h1>Pierwsze uruchomienie</h1>} />
        <Route path="*" element={<h1 className="p-3">404 NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
