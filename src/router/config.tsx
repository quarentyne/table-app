import { Route, Routes } from 'react-router-dom';
import { Cars } from '../pages/cars/Cars';
import { Drivers } from '../pages/drivers/Drivers';
import { Home } from '../pages/homepage/Home';
import { NotFound } from '../pages/notfound/NotFound';
import { Layout } from '../shared/layout/Layout';

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='driver' element={<Drivers />} />
        <Route path='driver/:id' element={<Drivers />} />
        <Route path='car' element={<Cars />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}