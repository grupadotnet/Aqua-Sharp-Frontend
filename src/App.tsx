import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { Working } from './pages/working';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Working />} />
      </Routes>
    </div>
  );
}

export default App;
