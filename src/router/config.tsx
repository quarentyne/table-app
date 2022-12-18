import { Route, Routes } from 'react-router-dom';
import { Drivers } from '../pages/drivers/Drivers';
import { Home } from '../pages/homepage/Home';
import { NotFound } from '../pages/notfound/NotFound';
import { Layout } from '../shared/layout/Layout';
// import { Carpage } from '../pages/car/Carpage';
// import { Driverpage } from '../pages/driver/Driverpage';
// import { Driverspage } from '../pages/driver/Driverspage';
// import { Homepage } from '../pages/homepage/Homepage';
// import { Notfoundpage } from '../pages/notfound/Notfoundpage';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route index element={<Homepage />} />
        <Route path='driver/:id' element={<Driverpage />} />
        <Route path='driver' element={<Driverspage />} />

        <Route path='car' element={<Carpage />} /> */}
        <Route path='driver' element={<Drivers />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}