import React from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from "../common/Header";
import Footer from "../common/Footer";
import routes from '../../routes';

const Layout = (props) => {
    return (
        <>
            <Header />
            <main className="app-main d-flex flex-column flex-1">
                <Routes>
                    {routes.map((route, idx) => {
                        return route.element ? (
                            <Route
                                key={idx}
                                path={route.path}
                                exact={route.exact}
                                name={route.name}
                                element={<route.element {...props} />}
                            />
                        ) : (null)
                    })}
                    <Route path="/" element={<Navigate replace to="/" />} />
                </Routes>
            </main>
            <Footer />
        </>
    )
}

export default Layout;