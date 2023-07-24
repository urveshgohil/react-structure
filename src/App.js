import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes";
import ScrollToTop from './components/common/scroll';

const Loading = () => <div className="pt-3 text-center">Loading...</div>

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