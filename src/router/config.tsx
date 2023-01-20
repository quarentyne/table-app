import { Route, Routes } from 'react-router-dom';
import { Cars } from '../pages/aCars/Cars';
import { Driver } from '../pages/aDrivers/Driver';
import { Drivers } from '../pages/aDrivers/Drivers';
import { Home } from '../pages/aHomepage/Home';
import { NotFound } from '../pages/aNotfound/NotFound';
import { Layout } from '../shared/layout/Layout';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='driver' element={<Drivers />} />
        <Route path='driver/:id' element={<Driver />} />
        <Route path='car' element={<Cars />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}