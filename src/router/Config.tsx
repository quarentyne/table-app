import { Route, Routes } from 'react-router-dom';
import { Cars } from '../pages/Cars/Cars';
import { DriversCars } from '../pages/Cars/DriversCars';
import { Driver } from '../pages/Drivers/Driver';
import { Drivers } from '../pages/Drivers/Drivers';
import { Home } from '../pages/Homepage/Home';
import { NotFound } from '../pages/Notfound/NotFound';
import { Layout } from '../shared/layout/Layout';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='driver' element={<Drivers />} />
        <Route path='driver/:id' element={<Driver />} />
        <Route path='car' element={<Cars />} />
        <Route path='car/driverId=:driverId' element={<DriversCars />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}