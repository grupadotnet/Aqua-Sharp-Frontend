import { Route, Routes } from 'react-router-dom';

import { Working } from '@/pages/working';
import { DashboardLayout } from '@/layout';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <Working />
            </DashboardLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
