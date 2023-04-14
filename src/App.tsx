import { Navigate, Route, Routes } from 'react-router-dom';

import { Working } from '@/pages/working';
import { DashboardLayout } from '@/layout';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route
          path="/dashboard"
          element={
            <DashboardLayout>
              <Working />
            </DashboardLayout>
          }
        />
        <Route path="*" element={<h1 className="p-3">404 NOT FOUND</h1>} />
      </Routes>
    </div>
  );
}

export default App;
