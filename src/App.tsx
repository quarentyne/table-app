import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Carpage } from './pages/car/Carpage';
import { Driverpage } from './pages/driver/Driverpage';
import { Driverspage } from './pages/driver/Driverspage';
import { Homepage } from './pages/homepage/Homepage';
import { Notfoundpage } from './pages/notfound/Notfoundpage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='driver/:id' element={<Driverpage />} />
        <Route path='driver' element={<Driverspage />} />

        <Route path='car' element={<Carpage />} />
        <Route path='*' element={<Notfoundpage />} />
      </Route>
    </Routes>
  );
};

export default App;
