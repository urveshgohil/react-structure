import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/';
const Loading = () => <div className="pt-3 text-center">Loading...</div>
const ScrollToTop = React.lazy(() => import('./components/common/scroll'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={Loading()}>
                <ScrollToTop>
                    <Routes>
                        <Route path="*" element={<Layout />} />
                    </Routes>
                </ScrollToTop>
            </Suspense>
        </BrowserRouter>
    );
}
export default App;