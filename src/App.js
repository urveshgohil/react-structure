import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes";
const Loading = () => <div className="pt-3 text-center">Loading...</div>
const ScrollToTop = React.lazy(() => import('./components/common/scroll'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={Loading()}>
                <ScrollToTop>
                    <AppRoutes />
                </ScrollToTop>
            </Suspense>
        </BrowserRouter>
    );
}
export default App;