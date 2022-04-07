import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));

const routes = [
    // Home Route
    { path: '/', exact: true, name: 'Home', element: Home },
]

export default routes