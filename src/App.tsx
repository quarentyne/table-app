import { Suspense } from 'react';
import { RouterConfig } from './router/Config';
import { Loading } from './shared/components/Loading/Loading';
import { GlobalStyle } from './styles';

export const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <GlobalStyle />
      <RouterConfig />
    </Suspense>
  );
};