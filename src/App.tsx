import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Carpage } from './pages/car/Carpage';
import { Driverpage } from './pages/driver/Driverpage';
import { Homepage } from './pages/homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='driver' element={<Driverpage />} />
        <Route path='car' element={<Carpage />} />
      </Route>
    </Routes>
  );
};

export default App;
