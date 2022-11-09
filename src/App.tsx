
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Driverpage } from './pages/driver/Driverpage';
import { Homepage } from './pages/homepage/Homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='driver' element={<Driverpage />} />


      </Route>
    </Routes>
  );
}

export default App;
